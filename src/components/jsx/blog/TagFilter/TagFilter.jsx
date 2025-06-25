import React from 'react';
import PropTypes from 'prop-types';
import { FilterContainer, TagButton } from './TagFilter.styles';

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
