import React from 'react';
import { FaStar, FaUtensils, FaMapMarkerAlt } from 'react-icons/fa';
import styles from './RestaurantCard.module.css';

const RestaurantCard = ({ restaurantData }) => {
  return (
    <div className={styles.card}>
      {/* Front of the Card */}
      <div className={styles.cardContent}>
        <div className={styles.cardHeader}>
          <h2 className={styles.restaurantName}>{restaurantData.name}</h2>
          <div className={styles.rating}>
            {[...Array(5)].map((_, index) => (
              <FaStar
                key={index}
                className={`${styles.star} ${index < restaurantData.rating ? styles.starActive : ''}`}
              />
            ))}
          </div>
        </div>
        <p className={styles.address}>
          <FaMapMarkerAlt className={styles.icon} />
          {restaurantData.address}, {restaurantData['address line 2']}
        </p>
        <p className={styles.postcode}>
          {restaurantData.outcode} {restaurantData.postcode}
        </p>
      </div>

      {/* Back of the Card */}
      <div className={styles.cardBack}>
        <div className={styles.foodType}>
          <FaUtensils className={styles.icon} />
          {restaurantData.type_of_food}
        </div>
        <a
          href={restaurantData.URL}
          className={styles.menuLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit Menu
        </a>
      </div>
    </div>
  );
};

export default RestaurantCard;
