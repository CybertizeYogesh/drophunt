"use client";

import { useState, useEffect } from 'react';
import { supabase } from '../../lib/supabase';
import styles from './Admin.module.css';

export default function AdminDashboard() {
  const [airdrops, setAirdrops] = useState([]);
  const [loading, setLoading] = useState(true);

  async function fetchAllAirdrops() {
    const { data, error } = await supabase
      .from('airdrops')
      .select('*')
      .order('id', { ascending: false });

    if (data) setAirdrops(data);
    if (error) console.error('Error fetching airdrops:', error);
    setLoading(false);
  }

  useEffect(() => {
    fetchAllAirdrops();
  }, []);

  async function approveAirdrop(id) {
    const { error } = await supabase
      .from('airdrops')
      .update({ status: 'Upcoming' })
      .eq('id', id);

    if (!error) {
      fetchAllAirdrops();
    }
  }

  const getStatusClass = (status) => {
    switch (status) {
      case 'Pending': return styles.statusPending;
      case 'Active': return styles.statusActive;
      case 'Upcoming': return styles.statusUpcoming;
      case 'Rejected': return styles.statusRejected;
      default: return '';
    }
  };

  if (loading) {
    return <div className={styles.container} style={{ textAlign: 'center', marginTop: '100px', color: '#a0aabf' }}>Loading...</div>;
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Admin <span>Dashboard</span></h1>
      <p className={styles.subtitle}>Review pending submissions</p>

      {airdrops.length === 0 ? (
        <div className={styles.emptyState}>No airdrops found</div>
      ) : (
        <div className={styles.list}>
          {airdrops.map((airdrop) => (
            <div key={airdrop.id} className={styles.listItem}>
              <div className={styles.itemInfo}>
                <div className={styles.icon}>{airdrop.name.charAt(0)}</div>
                <div className={styles.itemDetails}>
                  <span className={styles.itemName}>{airdrop.name}</span>
                  <span className={styles.itemTicker}>{airdrop.ticker} • {airdrop.value}</span>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <span className={`${styles.statusBadge} ${getStatusClass(airdrop.status)}`}>
                  {airdrop.status}
                </span>
                {airdrop.status === 'Pending' && (
                  <button
                    className={styles.approveBtn}
                    onClick={() => approveAirdrop(airdrop.id)}
                  >
                    Approve
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
