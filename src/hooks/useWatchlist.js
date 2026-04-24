"use client";

import { useState, useEffect } from 'react';

export function useWatchlist() {
  const [watchlist, setWatchlist] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem('drophunt_watchlist');
    if (saved) {
      setWatchlist(JSON.parse(saved));
    }
  }, []);

  const toggleWatchlist = (id) => {
    const updated = watchlist.includes(id)
      ? watchlist.filter(itemId => itemId !== id)
      : [...watchlist, id];
    setWatchlist(updated);
    localStorage.setItem('drophunt_watchlist', JSON.stringify(updated));
  };

  const isInWatchlist = (id) => watchlist.includes(id);

  return { watchlist, toggleWatchlist, isInWatchlist };
}