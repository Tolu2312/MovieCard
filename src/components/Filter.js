import React from 'react';

const Filter = ({ filterTitle, filterRating, handleTitleChange, handleRatingChange }) => {
  return (
    <div className="filter">
      <input
        type="text"
        placeholder="Filter by title"
        value={filterTitle}
        onChange={handleTitleChange}
      />
      <input
        type="number"
        placeholder="Filter by rating"
        value={filterRating}
        onChange={handleRatingChange}
      />
    </div>
  );
};

export default Filter;