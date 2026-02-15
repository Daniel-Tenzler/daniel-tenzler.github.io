import React from 'react';
import { FilterContainer, TagButton } from './TagFilter.styles';

export interface TagFilterProps {
	allTags: string[];
	selectedTags: string[];
	onTagSelect: (tags: string[]) => void;
}

const TagFilter = ({
	allTags,
	selectedTags,
	onTagSelect,
}: TagFilterProps) => {
	const handleTagClick = (tag: string) => {
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

export default TagFilter;
