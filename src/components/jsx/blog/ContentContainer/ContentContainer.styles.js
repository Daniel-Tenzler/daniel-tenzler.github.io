import styled from '@emotion/styled';

export const StyledMain = styled.main `
	width: 70%;
	max-width: calc(100% - 2em);
	margin: auto;
	padding: 1em 1em;

	@media (max-width: 720px) {
		padding: 1em;
		width: 90%;
	}
`;