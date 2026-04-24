"use client";

import styles from '../styles/FilterBar.module.css';

const categories = ['All', 'DeFi', 'NFT', 'Gaming', 'Layer 2'];

export default function FilterBar({ onSearch, searchQuery, activeCategory, setActiveCategory }) {
  const handleCategoryClick = (category) => {
    setActiveCategory(category);
    if (onSearch) {
      onSearch('');
    }
  };

  const handleSearchChange = (e) => {
    if (onSearch) {
      onSearch(e.target.value);
    }
  };

  return (
    <div className={styles.filterBar}>
      <div className={styles.searchContainer}>
        <input
          type="text"
          className={styles.searchInput}
          placeholder="Search airdrops..."
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </div>

      <div className={styles.filterButtons}>
        {categories.map((category) => (
          <button
            key={category}
            className={`${styles.filterBtn} ${activeCategory === category ? styles.active : ''}`}
            onClick={() => handleCategoryClick(category)}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
}