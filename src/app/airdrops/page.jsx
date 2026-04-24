"use client";

import { useState } from 'react';
import FilterBar from '../../components/FilterBar';
import AirdropGrid from '../../components/AirdropGrid';
import styles from '../../styles/Explore.module.css';

export default function AirdropsPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <main className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Explore Airdrops</h1>
        <p className={styles.subtitle}>Browse, filter, and discover the best crypto opportunities.</p>
      </div>

      <FilterBar 
        onSearch={setSearchQuery}
        searchQuery={searchQuery}
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />
      
      <AirdropGrid activeCategory={activeCategory} searchQuery={searchQuery} />
    </main>
  );
}