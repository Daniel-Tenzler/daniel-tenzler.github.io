import styled from '@emotion/styled';

export const StyledMain = styled.div`
	width: 100%;
	max-width: var(--content-max-width);
	margin: 0 auto;
	padding: 0 var(--content-padding-x);

	@media (max-width: 640px) {
		padding: 0 20px;
	}
`;
