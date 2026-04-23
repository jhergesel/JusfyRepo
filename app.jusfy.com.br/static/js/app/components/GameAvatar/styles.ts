import styled from 'styled-components';

type WrapperProps = {
	$size: number;
};

type CircleProps = {
	$strokeWidth: number;
};

type TrackCircleProps = CircleProps & {
	$trackColor: string;
};

type ProgressCircleProps = CircleProps & {
	$progressColor: string;
};

type MintSurfaceProps = {
	$size: number;
};

export const Wrapper = styled.div<WrapperProps>`
	position: relative;
	width: ${({ $size }) => `${$size}px`};
	height: ${({ $size }) => `${$size}px`};
	display: inline-flex;
	align-items: center;
	justify-content: center;
	font-family: "Noto Sans", sans-serif;
`;

export const RingSvg = styled.svg`
	position: absolute;
	inset: 0;
	transform: rotate(-90deg);
`;

export const TrackCircle = styled.circle<TrackCircleProps>`
	fill: none;
	stroke: ${({ $trackColor }) => $trackColor};
	stroke-width: ${({ $strokeWidth }) => $strokeWidth};
`;

export const ProgressCircle = styled.circle<ProgressCircleProps>`
	fill: none;
	stroke: ${({ $progressColor }) => $progressColor};
	stroke-width: ${({ $strokeWidth }) => $strokeWidth};
	transition: stroke-dashoffset 0.45s ease;
`;

export const AvatarImage = styled.img`
	object-fit: contain;
`;

export const MintSurface = styled.div<MintSurfaceProps>`
	width: ${({ $size }) => `${$size}px`};
	height: ${({ $size }) => `${$size}px`};
	flex-shrink: 0;
	display: inline-flex;
	align-items: center;
	justify-content: center;
	border-radius: 50%;
	background: #e6f7f2;
	transition: background 0.3s ease;

	&:hover {
		background: #ddeee9;
	}
`;

export const SidebarInner = styled.div<WrapperProps>`
	position: relative;
	width: ${({ $size }) => `${$size}px`};
	height: ${({ $size }) => `${$size}px`};
	flex-shrink: 0;
	display: inline-flex;
	align-items: center;
	justify-content: center;
	font-family: "Noto Sans", sans-serif;
	overflow: hidden;
	border-radius: 50%;
`;

export const SidebarRingSvg = styled.svg`
	position: absolute;
	inset: 0;
	width: 100%;
	height: 100%;
	display: block;
	z-index: 2;
	transform: rotate(-90deg);
	transform-origin: 50% 50%;
	pointer-events: none;
`;

export const SidebarTrackCircle = styled.circle<TrackCircleProps>`
	fill: none;
	stroke: ${({ $trackColor }) => $trackColor};
	stroke-width: ${({ $strokeWidth }) => $strokeWidth};
`;

export const SidebarProgressCircle = styled.circle<ProgressCircleProps>`
	fill: none;
	stroke: ${({ $progressColor }) => $progressColor};
	stroke-width: ${({ $strokeWidth }) => $strokeWidth};
	transition: stroke-dashoffset 0.65s ease;
`;

export const SidebarAvatarImage = styled.img<{ $innerSize?: number }>`
	position: absolute;
	z-index: 1;
	object-position: center center;
	border-radius: 50%;
	display: block;

	${({ $innerSize }) =>
		$innerSize != null
			? `
		width: ${$innerSize}px;
		height: ${$innerSize}px;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		object-fit: cover;
	`
			: `
		inset: 0;
		width: 100%;
		height: 100%;
		object-fit: contain;
	`}
`;
