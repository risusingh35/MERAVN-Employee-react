import React from 'react';
import './ItemsPerPageDropdown.css'; 

const ItemsPerPageDropdown = ({ itemsPerPage, onItemsPerPageChange }) => {
  const handleItemsPerPageChange = (e) => {
      const newItemsPerPage = parseInt(e.target.value, 10);
      onItemsPerPageChange(newItemsPerPage)
    };

  return (
    <div className="parent-container">
      <div className="dropdown-container">
        <label htmlFor="itemsPerPage" className="label">
          Items per page:
        </label>
        <select
          id="itemsPerPage"
          className="dropdown"
          value={itemsPerPage}
          onChange={handleItemsPerPageChange}
        >
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={20}>20</option>
          <option value={50}>50</option>
          <option value={100}>100</option>
        </select>
      </div>
    </div>
  );
};

export default ItemsPerPageDropdown;
