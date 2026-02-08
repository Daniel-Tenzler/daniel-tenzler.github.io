import styled from '@emotion/styled';

export const ControlsContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1em;
	padding: 1em;
	background-color: var(--gray-383838);
	border-radius: 8px;
	border: 1px solid var(--gray-474747);

	@media (max-width: 768px) {
		gap: 0.8em;
		padding: 0.8em;
	}
`;

export const OptionsContainer = styled.div`
	display: flex;
	gap: 1.5em;
	align-items: center;
	flex-wrap: wrap;

	@media (max-width: 480px) {
		flex-direction: column;
		align-items: flex-start;
		gap: 0.8em;
	}
`;

export const OptionLabel = styled.label`
	display: flex;
	align-items: center;
	gap: 0.5em;
	font-size: 13px;
	color: var(--color-text-primary);
	font-weight: 500;

	@media (max-width: 768px) {
		font-size: 12px;
	}
`;

export const Select = styled.select`
	background-color: var(--gray-292929);
	color: var(--color-text-emphasis);
	padding: 0.4em 0.6em;
	border: 1px solid var(--gray-474747);
	border-radius: 4px;
	font-size: 13px;
	cursor: pointer;
	outline: none;
	transition: border-color 0.2s ease;

	&:focus {
		border-color: var(--color-border-light);
	}

	&:focus-visible {
		outline: 2px solid var(--gray-222939);
		outline-offset: 2px;
	}

	@media (max-width: 768px) {
		font-size: 12px;
	}
`;

export const Checkbox = styled.input`
	width: 16px;
	height: 16px;
	cursor: pointer;
	accent-color: var(--color-border-light);

	&:focus-visible {
		outline: 2px solid var(--gray-222939);
		outline-offset: 2px;
	}
`;

export const ButtonsContainer = styled.div`
	display: flex;
	gap: 0.5em;
	flex-wrap: wrap;
`;

export const StatsContainer = styled.div`
	display: flex;
	gap: 1.5em;
	padding: 0.6em 1em;
	background-color: var(--gray-292929);
	border-radius: 6px;
	border: 1px solid var(--gray-474747);

	@media (max-width: 480px) {
		gap: 1em;
		padding: 0.5em 0.8em;
	}
`;

export const StatItem = styled.div`
	display: flex;
	align-items: center;
	gap: 0.5em;
`;

export const StatLabel = styled.span`
	font-size: 12px;
	color: var(--color-text-primary);
	font-weight: 500;

	@media (max-width: 768px) {
		font-size: 11px;
	}
`;

export const StatValue = styled.span`
	font-size: 14px;
	color: var(--color-text-emphasis);
	font-weight: 600;
	font-family: 'Courier New', 'Monaco', 'Consolas', monospace;

	@media (max-width: 768px) {
		font-size: 13px;
	}
`;
