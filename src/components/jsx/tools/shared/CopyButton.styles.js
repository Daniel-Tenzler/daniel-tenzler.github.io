import styled from '@emotion/styled';
import { BaseSmallButton } from 'src/components/jsx/ui/Button.styles';

export const Button = styled(BaseSmallButton)`
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
