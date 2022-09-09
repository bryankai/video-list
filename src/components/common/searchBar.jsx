import React from "react";

const SearchBar = ({ value, onSearch }) => {
  return (
    <input
      type="text"
      name="searchBar"
      id="searchBar"
      className="form-control my-3"
      placeholder="Search..."
      value={value}
      onChange={(e) => onSearch(e.target.value)}
    />
  );
};

export default SearchBar;
