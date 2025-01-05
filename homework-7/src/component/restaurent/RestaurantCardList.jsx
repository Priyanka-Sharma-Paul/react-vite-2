import React, { useState } from 'react';
import RestaurantCard from './RestaurantCard';
import restaurants from "../../data/restaurants.js";
import styles from './RestaurantCardList.module.css';

const RestaurantCardList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [minRating, setMinRating] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    setCurrentPage(1);
  };

  const handleRatingChange = (event) => {
    setMinRating(Number(event.target.value));
    setCurrentPage(1);
  };

  const itemsPerPage = 24;
  const filteredRestaurants = restaurants.filter(
    (restaurant) =>
      restaurant.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      restaurant.rating >= minRating
  );

  const totalPages = Math.ceil(filteredRestaurants.length / itemsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const maxVisiblePages = 5;
  let startPage = Math.max(currentPage - Math.floor(maxVisiblePages / 2), 1);
  const endPage = Math.min(startPage + maxVisiblePages - 1, totalPages);

  if (endPage - startPage + 1 < maxVisiblePages) {
    startPage = Math.max(endPage - maxVisiblePages + 1, 1);
  }

  const visiblePageRange = Array.from({ length: endPage - startPage + 1 }).map(
    (_, index) => startPage + index
  );

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const visibleRestaurants = filteredRestaurants.slice(startIndex, endIndex);

  return (
    <div className={styles.container}>
      <div className={styles.searchFilterContainer}>
        <div>
          <input
            type="text"
            placeholder="Search restaurants..."
            value={searchTerm}
            onChange={handleSearchChange}
            className={styles.inputField}
          />
        </div>
        <div>
          <label htmlFor="minRating">Minimum Rating:</label>
          <input
            type="number"
            id="minRating"
            min={0}
            max={5}
            step={1}
            value={minRating}
            onChange={handleRatingChange}
            className={styles.inputField}
          />
        </div>
      </div>
      <div className={styles.gridContainer}>
        {visibleRestaurants.map((restaurant, index) => (
          <div key={index}>
            <RestaurantCard restaurantData={restaurant} />
          </div>
        ))}
      </div>
      <div className={styles.pagination}>
        <a
          href="#"
          className={`${styles.pageItem} ${
            currentPage === 1 ? styles.disabled : ''
          }`}
          onClick={(e) => {
            e.preventDefault();
            if (currentPage > 1) {
              handlePageChange(currentPage - 1);
            }
          }}
        >
          &lt;
        </a>
        {visiblePageRange.map((page) => (
          <a
            href="#"
            key={page}
            className={`${styles.pageItem} ${
              currentPage === page ? styles.active : ''
            }`}
            onClick={(e) => {
              e.preventDefault();
              handlePageChange(page);
            }}
          >
            {page}
          </a>
        ))}
        <a
          href="#"
          className={`${styles.pageItem} ${
            currentPage === totalPages ? styles.disabled : ''
          }`}
          onClick={(e) => {
            e.preventDefault();
            if (currentPage < totalPages) {
              handlePageChange(currentPage + 1);
            }
          }}
        >
          &gt;
        </a>
      </div>
    </div>
  );
};

export default RestaurantCardList;
