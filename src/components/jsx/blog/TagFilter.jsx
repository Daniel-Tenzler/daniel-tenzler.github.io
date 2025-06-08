import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const FilterContainer = styled.div`
  margin-bottom: 2rem;
`;

const TagList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const TagButton = styled.button`
  padding: 0.5rem 1rem;
  border-radius: 9999px;
  font-size: 0.875rem;
  transition: all 0.2s;
  background-color: ${props => props.active ? 'var(--accent)' : 'transparent'};
  color: ${props => props.active ? 'white' : 'var(--accent)'};
  border: 1px solid var(--accent);
  cursor: pointer;

  &:hover {
    background-color: ${props => props.active ? 'var(--accent)' : 'var(--accent-light)'};
    color: white;
  }
`;

const TagFilter = ({ allTags, selectedTags, onTagSelect }) => {
  const handleTagClick = (tag) => {
    if (selectedTags.includes(tag)) {
      onTagSelect(selectedTags.filter(t => t !== tag));
    } else {
      onTagSelect([...selectedTags, tag]);
    }
  };

  return (
    <FilterContainer>
      <TagList>
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
      </TagList>
    </FilterContainer>
  );
};

TagFilter.propTypes = {
  allTags: PropTypes.arrayOf(PropTypes.string).isRequired,
  selectedTags: PropTypes.arrayOf(PropTypes.string).isRequired,
  onTagSelect: PropTypes.func.isRequired
};

export default TagFilter; 