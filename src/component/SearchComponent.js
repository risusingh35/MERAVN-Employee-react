import React, { useState, useEffect } from 'react';
import './SearchComponent.css'; 
function SearchComponent({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
      const timer = setTimeout(() => {
        onSearch(searchTerm);
      }, 500);
      return () => clearTimeout(timer); 
  }, [searchTerm, onSearch]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <form className="search-form">
      <input
        type="text"
        className="search-input"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleSearchChange}
      />
    </form>
  );
}

export default SearchComponent;
