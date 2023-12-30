import React from 'react';
import './Pagination.css'; 

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const handlePageClick = (page) => {
    onPageChange(page);
  };

  return (
    <ul className="pagination">
      {Array.from({ length: totalPages }, (_, index) => (
        <li key={index + 1}>
          <button
            className={currentPage === index + 1 ? 'active' : ''}
            onClick={() => handlePageClick(index + 1)}
          >
            {index + 1}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default Pagination;
