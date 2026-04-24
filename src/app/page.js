"use client";

import { useState } from 'react';
import Hero from '../components/Hero';
import SocialProof from '../components/SocialProof';
import FilterBar from '../components/FilterBar';
import AirdropGrid from '../components/AirdropGrid';
import FAQ from '../components/FAQ';
import Newsletter from '../components/Newsletter';
import styles from '../styles/Home.module.css';

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  return (
    <main className={styles.main}>
      <Hero />


      <div className={styles.contentContainer}>
        <FilterBar
          onSearch={setSearchQuery}
          searchQuery={searchQuery}
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
        />
        <AirdropGrid activeCategory={activeCategory} searchQuery={searchQuery} showViewAll />
      </div>


      <SocialProof />

      <FAQ />

      <Newsletter />
    </main>
  );
}