import React from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";

export const SearchBar = ({ setSearch }) => {
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };
  return (
    <div className="search-bar">
      <FaMagnifyingGlass className="icon" />
      <input
        type="text"
        placeholder="Search by name"
        onChange={(e) => handleSearch(e)}
      />
    </div>
  );
};
