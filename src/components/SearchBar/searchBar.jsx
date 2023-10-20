const SearchBar = ({ handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="searchInput"
        autoComplete="off"
        autoFocus
        placeholder="Search films by keyword"
      />
      <button type="submit">Search</button>
    </form>
  );
};
export default SearchBar;
