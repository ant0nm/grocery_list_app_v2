import React from 'react';
import FilterItem from './FilterItem';

const Filters = ({ filters, onFilterSelect, selectedFilter }) => {
  // filters is an array of filters
  // filter is something like: {name: 'All', value: 'all'}
  const filterElements = filters.map((filter, i) => <FilterItem key={i} id={i} filter={ filter } selectedFilter={ selectedFilter } onFilterSelect={ onFilterSelect }/>);

  return (
    <section id="filterCategories">
      <ul className="filters">
        { filterElements }
      </ul>
      <form id="newCat" className="cat-new">
        <input type="text" name="item" id="itemName" className="form-component inpt" placeholder="New Category"/>
      </form>
    </section>
  );
};

export default Filters;
