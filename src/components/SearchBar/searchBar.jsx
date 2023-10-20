import React from 'react';
import css from './searchBar.module.css';

const SearchBar = ({ handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit} className={css['searchbar']}>
      <div className={css['form']}>
        <input
          type="text"
          name="searchInput"
          autoComplete="off"
          autoFocus
          placeholder="Search films by keyword"
          className={css['input']}
        />
        <button type="submit" className={css['button']}>
          Search
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
