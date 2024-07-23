import React from "react";
import "./SearchBar.css";

const SearchBar = ({ searchTerm, handleSearchChange }) => {
  return (
    <input
      type="text"
      placeholder="Search products..."
      value={searchTerm}
      onChange={handleSearchChange}
      className="search-bar"
    />
  );
};

export default SearchBar;
