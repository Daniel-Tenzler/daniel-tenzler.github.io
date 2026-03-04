import styled from '@emotion/styled';
import { BaseSmallButton } from 'src/components/jsx/ui/Button.styles';

interface ButtonProps {
	$copied?: boolean;
}

export const Button = styled(BaseSmallButton)<ButtonProps>`
	${(props) =>
		props.$copied &&
		`
			background-color: #16a34a;
			border-color: #16a34a;
			color: white;

			&:hover {
				background-color: #15803d;
				border-color: #15803d;
			}
	`}
`;
