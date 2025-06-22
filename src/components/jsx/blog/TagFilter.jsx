import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { COLORS, getRgbaColor } from '../../../consts/Colors';

const FilterContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 0.5rem;
	margin-bottom: 2rem;
`;

const TagButton = styled.button`
	padding: 0.5rem 1rem;
	border: 1px solid ${getRgbaColor(COLORS.black)};
	border-radius: 9999px;
	background: ${(props) => (props.active ? COLORS.accentDark : COLORS.black)};
	color: ${(props) => (props.active ? COLORS.white : COLORS.white)};
	font-size: 0.875rem;
	cursor: pointer;
	transition: all 0.2s ease;

	&:hover {
		background: ${(props) =>
			props.active ? COLORS.accentDark : getRgbaColor(COLORS.semiSurfacePrimary)};
		border-color: ${(props) =>
			props.active ? COLORS.accentDark : getRgbaColor(COLORS.semiSurfacePrimary)};
	}

	&:focus {
		outline: none;
		box-shadow: 0 0 0 2px ${getRgbaColor(COLORS.black, 0.2)};
	}
`;

const TagFilter = ({ allTags, selectedTags, onTagSelect }) => {
	const handleTagClick = (tag) => {
		if (selectedTags.includes(tag)) {
			onTagSelect(selectedTags.filter((t) => t !== tag));
		} else {
			onTagSelect([...selectedTags, tag]);
		}
	};

	return (
		<FilterContainer>
			{allTags.map((tag) => (
				<TagButton
					key={tag}
					active={selectedTags.includes(tag)}
					onClick={() => handleTagClick(tag)}
					aria-pressed={selectedTags.includes(tag)}
				>
					{tag}
				</TagButton>
			))}
		</FilterContainer>
	);
};

TagFilter.propTypes = {
	allTags: PropTypes.arrayOf(PropTypes.string).isRequired,
	selectedTags: PropTypes.arrayOf(PropTypes.string).isRequired,
	onTagSelect: PropTypes.func.isRequired,
};

export default TagFilter;
