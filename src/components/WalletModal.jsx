"use client";

import { useState } from 'react';
import styles from '../styles/WalletModal.module.css';

export default function WalletModal({ isOpen, onClose, onConnect }) {
  const [connecting, setConnecting] = useState(false);
  const [selectedWallet, setSelectedWallet] = useState(null);

  const handleConnect = async (walletName) => {
    setSelectedWallet(walletName);
    setConnecting(true);
    
    // Simulate connection delay
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Generate a mock address
    const mockAddress = '0x' + Math.random().toString(16).slice(2, 10) + '...';
    
    setConnecting(false);
    onConnect(mockAddress);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <div className={styles.header}>
          <h2 className={styles.title}>Connect Wallet</h2>
          <button className={styles.closeBtn} onClick={onClose}>✕</button>
        </div>
        
        {connecting ? (
          <div className={styles.connectingState}>
            <div className={styles.spinner}></div>
            <p>Connecting to {selectedWallet}...</p>
          </div>
        ) : (
          <div className={styles.walletList}>
            <button className={styles.walletOption} onClick={() => handleConnect('MetaMask')}>
              <span>MetaMask</span>
              <span className={styles.popularBadge}>Popular</span>
            </button>
            <button className={styles.walletOption} onClick={() => handleConnect('Phantom')}>
              <span>Phantom</span>
            </button>
            <button className={styles.walletOption} onClick={() => handleConnect('WalletConnect')}>
              <span>WalletConnect</span>
            </button>
            <button className={styles.walletOption} onClick={() => handleConnect('Coinbase Wallet')}>
              <span>Coinbase Wallet</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}