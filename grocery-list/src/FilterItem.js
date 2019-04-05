import React, { useRef } from 'react';

const FilterItem = ({ filter, id, checked, onFilterSelect, selectedFilter }) => {
  // filter is something like: {name: 'All', value: 'all'}
  // we are desctructuring the filter object here
  const filterRef = useRef();

  const { name, value } = filter;

  const handleSelect = (event) => {
    onFilterSelect(filterRef.current.value);
  };

  return (
    <li>
      <input ref={filterRef} onChange={ handleSelect } type="radio" name="category" value={ value } id={ id } checked={value === selectedFilter} />
      <label htmlFor={ id }>{ name }</label>
    </li>
  );
};

export default FilterItem;
