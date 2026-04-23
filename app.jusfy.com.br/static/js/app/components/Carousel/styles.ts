import styled from 'styled-components';

export const Wrapper = styled.section`
	width: 100%;
`;

export const Header = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-bottom: 14px;
`;

export const HeaderActions = styled.div`
	display: flex;
	align-items: center;
	gap: 16px;
`;

export const Title = styled.div`
	color: #131313;
	font-size: 20px;
	font-weight: 600;
	line-height: 1.4;
`;

export const NavigationPlaceholder = styled.div`
	width: 80px;
	height: 1px;
`;

export const CarouselContainer = styled.div`
	position: relative;

	.jusfy-carousel-item {
		padding-bottom: 2px;
	}

	.jusfy-carousel-item--auto-width {
		width: auto;
		flex: 0 0 auto;
	}

	.jusfy-carousel-item--auto-width > div {
		width: auto;
	}
`;

export const Viewport = styled.div`
		overflow: hidden;
		width: 100%;
	`;

export const Track = styled.div`
	display: flex;
	align-items: stretch;
	gap: 16px;
	will-change: transform;
`;

export const Dots = styled.ul`
	position: static;
	margin-top: 14px;
	list-style: none;
	padding: 0;
	display: flex;
	justify-content: center;
	gap: 8px;
`;

export const DotItem = styled.li``;

export const DotButton = styled.button`
	width: 8px;
	height: 8px;
	border: none;
	border-radius: 50%;
	background: #ceced2;
	opacity: 1;
	padding: 0;
	cursor: pointer;

	&.is-active {
		background: #01ab7d;
	}
`;

export const EmptyStateContainer = styled.div`
	width: 100%;
`;

export const ItemWrapper = styled.div`
	min-width: 0;
`;

export const Navigation = styled.div`
	display: flex;
	align-items: center;
	gap: 8px;
	z-index: 2;

	${CarouselContainer} > & {
		position: absolute;
		top: -42px;
		right: 0;
	}
`;

export const ArrowButton = styled.button`
	width: 32px;
	height: 32px;
	border-radius: 4px;
	border: 1px solid #ceced2;
	background: transparent;
	color: #5e5e60;
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 26px;
	line-height: 1;
	cursor: pointer;

	&:hover:not(:disabled) {
		background: #f5f5f7;
		border-color: #ced0d8;
	}

	&:active:not(:disabled) {
		background: #e9e9eb;
		border-color: #c1c4d0;
	}

	&:disabled {
		opacity: 0.45;
		cursor: not-allowed;
	}
`;
