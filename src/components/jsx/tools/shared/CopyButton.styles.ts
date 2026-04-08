import styled from '@emotion/styled';
import { BaseSmallButton } from 'src/components/jsx/ui/Button.styles';
import type { ButtonProps } from './CopyButton.types';

export const Button = styled(BaseSmallButton)<ButtonProps>`
	${(props) =>
		props.$copied &&
		`
			background-color: var(--color-status-success);
			border-color: var(--color-status-success);
			color: var(--gray-2d2d2d);

			&:hover {
				background-color: var(--color-status-success-dark);
				border-color: var(--color-status-success-dark);
			}
	`}
`;
