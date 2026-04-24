"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { airdropsData } from '../data/airdrops';
import styles from '../styles/AirdropGrid.module.css';

const ITEMS_PER_PAGE = 12;
const MOBILE_ITEMS_PER_PAGE = 6;
const MOBILE_BREAKPOINT = 768;
const HOME_DESKTOP_COUNT = 8;
const HOME_MOBILE_COUNT = 4;

export default function AirdropGrid({ activeCategory = 'All', searchQuery = '', showViewAll = false }) {
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth <= MOBILE_BREAKPOINT;
      setIsMobile(mobile);
      if (showViewAll) {
        setVisibleCount(mobile ? HOME_MOBILE_COUNT : HOME_DESKTOP_COUNT);
      } else {
        setVisibleCount(mobile ? MOBILE_ITEMS_PER_PAGE : ITEMS_PER_PAGE);
      }
    };
    checkMobile();
  }, [showViewAll]);

  const filteredAirdrops = airdropsData.filter(drop => {
    const matchesCategory = activeCategory === 'All' || drop.category === activeCategory;
    const matchesSearch = drop.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          drop.ticker.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const displayedAirdrops = filteredAirdrops.slice(0, visibleCount);
  const loadMoreAmount = isMobile ? MOBILE_ITEMS_PER_PAGE : ITEMS_PER_PAGE;

  const handleLoadMore = () => {
    setVisibleCount(prev => prev + loadMoreAmount);
  };

  useEffect(() => {
    if (showViewAll) {
      setVisibleCount(isMobile ? HOME_MOBILE_COUNT : HOME_DESKTOP_COUNT);
    } else {
      setVisibleCount(isMobile ? MOBILE_ITEMS_PER_PAGE : ITEMS_PER_PAGE);
    }
  }, [activeCategory, searchQuery, isMobile, showViewAll]);

  return (
    <section className={styles.airdropSection}>
      <div className={styles.gridContainer}>
        {displayedAirdrops.map((airdrop, index) => (
          <motion.div
            key={airdrop.id}
            className={styles.airdropCard}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
          >
            <div className={styles.cardHeader}>
              <div className={styles.logoWrapper} style={{ background: `linear-gradient(135deg, ${airdrop.color} 0%, ${airdrop.color}99 100%)` }}>
                <span className={styles.logo}>{airdrop.name.charAt(0)}</span>
              </div>
              <div className={styles.nameWrapper}>
                <h3 className={styles.name}>{airdrop.name}</h3>
                <span className={styles.ticker}>{airdrop.ticker}</span>
              </div>
              <div className={styles.value}>{airdrop.value}</div>
            </div>
            
            <div className={styles.cardDivider}></div>
            
            <div className={styles.cardFooter}>
              <span className={`${styles.statusBadge} ${styles[airdrop.status.toLowerCase()]}`}>
                {airdrop.status}
              </span>
              <Link href={'/airdrops/' + airdrop.id} className={styles.viewGuideBtn}>
                View Guide →
              </Link>
            </div>
          </motion.div>
        ))}
      </div>

      {showViewAll ? (
        <div className={styles.loadMoreContainer}>
          <Link href="/airdrops" className={styles.loadMoreBtn}>
            View All Airdrops
          </Link>
        </div>
      ) : visibleCount < filteredAirdrops.length && (
        <div className={styles.loadMoreContainer}>
          <button className={styles.loadMoreBtn} onClick={handleLoadMore}>
            View More
          </button>
        </div>
      )}
    </section>
  );
}