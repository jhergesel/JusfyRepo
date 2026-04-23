import React, {
	ReactNode,
	useCallback,
	useEffect,
	useImperativeHandle,
	useMemo,
	useRef,
	useState,
	forwardRef,
} from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import * as S from './styles';
import { LeftChevronIcon, RightChevronIcon } from '../core/icons';

type ResponsiveConfig = Record<
	string,
	{
		breakpoint: { max: number; min: number };
		items: number;
		slidesToSlide?: number;
		partialVisibilityGutter?: number;
	}
>;

interface CarouselButtonGroupProps {
	next?: () => void;
	previous?: () => void;
	disablePrevious?: boolean;
	disableNext?: boolean;
}

export interface CarouselHandle {
	scrollTo: (index: number) => void;
}

export interface CarouselProps {
	children: ReactNode;
	title?: ReactNode;
	titleClassName?: string;
	actionButton?: ReactNode;
	emptyState?: ReactNode;
	className?: string;
	responsive?: ResponsiveConfig;
	showDots?: boolean;
	arrows?: boolean;
	infinite?: boolean;
	autoPlay?: boolean;
	autoPlaySpeed?: number;
	ssr?: boolean;
	swipeable?: boolean;
	draggable?: boolean;
	keyBoardControl?: boolean;
	pauseOnHover?: boolean;
	transitionDuration?: number;
	customTransition?: string;
	itemClassName?: string;
	onSlideChange?: (index: number) => void;
	startIndex?: number;
	adaptiveHeight?: boolean;
}

const defaultResponsive: ResponsiveConfig = {
	desktop: {
		breakpoint: { max: 3000, min: 1200 },
		items: 3,
		slidesToSlide: 1,
		partialVisibilityGutter: 40,
	},
	tablet: {
		breakpoint: { max: 1199, min: 768 },
		items: 2,
		slidesToSlide: 1,
		partialVisibilityGutter: 30,
	},
	mobile: {
		breakpoint: { max: 767, min: 0 },
		items: 1,
		slidesToSlide: 1,
		partialVisibilityGutter: 30,
	},
};

const ButtonGroup: React.FC<CarouselButtonGroupProps> = ({
	next,
	previous,
	disablePrevious,
	disableNext,
}) => {
	return (
		<S.Navigation>
			<S.ArrowButton
				type="button"
				onClick={previous}
				disabled={disablePrevious}
				aria-label="Slide anterior"
			>
				<LeftChevronIcon size={10} color={disablePrevious ? "#CECED2" : "#5E5E60"} />
			</S.ArrowButton>

			<S.ArrowButton
				type="button"
				onClick={next}
				disabled={disableNext}
				aria-label="Próximo slide"
			>
				<RightChevronIcon size={10} color={disableNext ? "#CECED2" : "#5E5E60"} />
			</S.ArrowButton>
		</S.Navigation>
	);
};

const getResponsiveItemsForWidth = (
	width: number,
	responsive: ResponsiveConfig,
): number => {
	const configs = Object.values(responsive).sort(
		(a, b) => a.breakpoint.max - b.breakpoint.max,
	);

	const matchedConfig = configs.find(
		(config) => width <= config.breakpoint.max && width >= config.breakpoint.min,
	);

	return matchedConfig?.items ?? configs[configs.length - 1]?.items ?? 1;
};

const getInitialSlidesToShow = (responsive: ResponsiveConfig, ssr: boolean): number => {
	if (typeof window === 'undefined') {
		return ssr ? getResponsiveItemsForWidth(1920, responsive) : 1;
	}

	return getResponsiveItemsForWidth(window.innerWidth, responsive);
};

const Carousel = forwardRef<CarouselHandle, CarouselProps>(({
	children,
	title,
	titleClassName,
	actionButton,
	emptyState,
	className,
	responsive = defaultResponsive,
	showDots = false,
	arrows = true,
	infinite = false,
	autoPlay = false,
	autoPlaySpeed = 5000,
	ssr = true,
	swipeable = true,
	draggable = true,
	keyBoardControl = true,
	pauseOnHover = true,
	transitionDuration = 50,
	customTransition = 'all .3s ease',
	itemClassName,
	onSlideChange,
	startIndex = 0,
	adaptiveHeight = false,
}, ref) => {
	const items = useMemo(() => React.Children.toArray(children), [children]);
	const isAutoWidth = itemClassName?.includes('jusfy-carousel-item--auto-width') ?? false;
	const [slidesToShow, setSlidesToShow] = useState(() =>
		getInitialSlidesToShow(responsive, ssr),
	);
	const [selectedIndex, setSelectedIndex] = useState(0);
	const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
	const [canScrollPrev, setCanScrollPrev] = useState(false);
	const [canScrollNext, setCanScrollNext] = useState(false);
	const isHoveredRef = useRef(false);

	const [emblaRef, emblaApi] = useEmblaCarousel({
		loop: infinite,
		align: 'start',
		containScroll: 'trimSnaps',
		watchDrag: draggable && swipeable,
		startIndex,
	});

	useImperativeHandle(ref, () => ({
		scrollTo: (index: number) => {
			emblaApi?.scrollTo(index);
		},
	}), [emblaApi]);

	const syncCarouselState = useCallback(() => {
		if (!emblaApi) {
			return;
		}

		setScrollSnaps(emblaApi.scrollSnapList());
		const newIndex = emblaApi.selectedScrollSnap();
		setSelectedIndex(newIndex);
		onSlideChange?.(newIndex);
		setCanScrollPrev(emblaApi.canScrollPrev());
		setCanScrollNext(emblaApi.canScrollNext());
	}, [emblaApi, onSlideChange]);

	useEffect(() => {
		if (typeof window === 'undefined') {
			return;
		}

		const handleResize = () => {
			setSlidesToShow(getResponsiveItemsForWidth(window.innerWidth, responsive));
		};

		handleResize();
		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, [responsive]);

	useEffect(() => {
		if (!emblaApi) {
			return;
		}

		syncCarouselState();

		emblaApi.on('select', syncCarouselState);
		emblaApi.on('reInit', syncCarouselState);

		return () => {
			emblaApi.off('select', syncCarouselState);
			emblaApi.off('reInit', syncCarouselState);
		};
	}, [emblaApi, syncCarouselState]);

	useEffect(() => {
		if (!emblaApi || !autoPlay) {
			return;
		}

		const intervalId = window.setInterval(() => {
			if (pauseOnHover && isHoveredRef.current) {
				return;
			}

			if (emblaApi.canScrollNext() || infinite) {
				emblaApi.scrollNext();
				return;
			}

			emblaApi.scrollTo(0);
		}, autoPlaySpeed);

		return () => {
			window.clearInterval(intervalId);
		};
	}, [autoPlay, autoPlaySpeed, emblaApi, infinite, pauseOnHover]);

	useEffect(() => {
		emblaApi?.reInit();
	}, [emblaApi, slidesToShow, isAutoWidth, items.length]);

	// Adaptive height: resize viewport to match the active slide's content height
	useEffect(() => {
		if (!adaptiveHeight || !emblaApi) return;

		const updateHeight = () => {
			const slideNodes = emblaApi.slideNodes();
			const selected = emblaApi.selectedScrollSnap();
			const activeSlide = slideNodes[selected];
			const rootNode = emblaApi.rootNode();
			if (activeSlide && rootNode) {
				rootNode.style.transition = 'height 0.3s ease';
				rootNode.style.height = activeSlide.scrollHeight + 'px';
			}
		};

		updateHeight();
		emblaApi.on('select', updateHeight);
		emblaApi.on('reInit', updateHeight);

		return () => {
			emblaApi.off('select', updateHeight);
			emblaApi.off('reInit', updateHeight);
		};
	}, [emblaApi, adaptiveHeight]);

	const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
		if (!keyBoardControl || !emblaApi) {
			return;
		}

		if (event.key === 'ArrowLeft') {
			event.preventDefault();
			emblaApi.scrollPrev();
		}

		if (event.key === 'ArrowRight') {
			event.preventDefault();
			emblaApi.scrollNext();
		}
	};

	const slideBasis = `calc((100% - ${(Math.max(slidesToShow, 1) - 1) * 16}px) / ${Math.max(
		slidesToShow,
		1,
	)})`;
	const itemClassNames = itemClassName ?? 'jusfy-carousel-item';

	if (!items.length) {
		if (!emptyState) {
			return null;
		}

		return (
			<S.Wrapper className={className}>
				{title && (
					<S.Header>
						<S.Title className={titleClassName}>{title}</S.Title>
					</S.Header>
				)}
				<S.EmptyStateContainer>{emptyState}</S.EmptyStateContainer>
			</S.Wrapper>
		);
	}

	return (
		<S.Wrapper className={className}>
			{(title || arrows) && (
				<S.Header>
					{title && <S.Title className={titleClassName}>{title}</S.Title>}
					{arrows && title ? (
						<S.HeaderActions>
							{actionButton}
							<ButtonGroup
								next={() => emblaApi?.scrollNext()}
								previous={() => emblaApi?.scrollPrev()}
								disablePrevious={!infinite && !canScrollPrev}
								disableNext={!infinite && !canScrollNext}
							/>
						</S.HeaderActions>
					) : arrows ? <S.NavigationPlaceholder /> : null}
				</S.Header>
			)}

			<S.CarouselContainer>
				{arrows && !title ? (
					<>
						{actionButton}
						<ButtonGroup
							next={() => emblaApi?.scrollNext()}
							previous={() => emblaApi?.scrollPrev()}
							disablePrevious={!infinite && !canScrollPrev}
							disableNext={!infinite && !canScrollNext}
						/>
					</>
				) : null}

				<S.Viewport
					ref={emblaRef}
					onMouseEnter={() => {
						isHoveredRef.current = true;
					}}
					onMouseLeave={() => {
						isHoveredRef.current = false;
					}}
					onKeyDown={handleKeyDown}
					tabIndex={keyBoardControl ? 0 : -1}
				>
					<S.Track
						style={{
							transition: customTransition,
							transitionDuration: `${transitionDuration}ms`,
						}}
					>
						{items.map((item, index) => (
							<S.ItemWrapper
								className={itemClassNames}
								style={isAutoWidth ? undefined : { flex: `0 0 ${slideBasis}` }}
								key={`carousel-item-${index}`}
							>
								{item}
							</S.ItemWrapper>
						))}
					</S.Track>
				</S.Viewport>

				{showDots && scrollSnaps.length > 1 ? (
					<S.Dots className="jusfy-carousel-dots">
						{scrollSnaps.map((_, index) => (
							<S.DotItem key={`carousel-dot-${index}`}>
								<S.DotButton
									type="button"
									onClick={() => emblaApi?.scrollTo(index)}
									className={index === selectedIndex ? 'is-active' : undefined}
									aria-label={`Ir para slide ${index + 1}`}
								/>
							</S.DotItem>
						))}
					</S.Dots>
				) : null}
			</S.CarouselContainer>
		</S.Wrapper>
	);
});

Carousel.displayName = 'Carousel';

export default Carousel;
