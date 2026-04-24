"use client";

import { useState, useEffect } from 'react';

export function useWallet() {
  const [walletAddress, setWalletAddress] = useState(null);

  useEffect(() => {
    const saved = localStorage.getItem('drophunt_wallet');
    if (saved) setWalletAddress(saved);
  }, []);

  const connect = (address) => {
    setWalletAddress(address);
    localStorage.setItem('drophunt_wallet', address);
  };

  const disconnect = () => {
    setWalletAddress(null);
    localStorage.removeItem('drophunt_wallet');
  };

  return { walletAddress, connect, disconnect };
}