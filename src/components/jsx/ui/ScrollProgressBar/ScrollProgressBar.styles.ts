import styled from '@emotion/styled';

export const ProgressBar = styled.div`
	position: relative;
	left: 0;
	width: 100%;
	height: 4px;
	background-color: var(--color-border-light);
	z-index: 1000;
`;

interface ProgressFillProps {
	$progress: string;
}

export const ProgressFill = styled.div<ProgressFillProps>`
	height: 100%;
	width: ${(props) => props.$progress};
	background: linear-gradient(
		90deg,
		var(--color-accent-brand-dark) 0%,
		var(--color-accent-brand) 50%,
		var(--color-accent-brand-dark) 100%
	);
	transition: width 0.1s ease-out;
	box-shadow: 0 0 10px var(--blue-2337ff-66);
`;
