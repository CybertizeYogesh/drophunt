"use client";

import Link from 'next/link';
import styles from './Leaderboard.module.css';
import { airdropsData } from '../../data/airdrops';

function parseValue(valueStr) {
  if (valueStr === 'TBA') return 0;
  const cleaned = valueStr.replace('$', '').replace('+', '').replace(',', '');
  return parseInt(cleaned, 10) || 0;
}

const sortedData = [...airdropsData]
  .sort((a, b) => parseValue(b.value) - parseValue(a.value))
  .slice(0, 15);

function getRankDisplay(rank) {
  if (rank === 1) return '🥇';
  if (rank === 2) return '🥈';
  if (rank === 3) return '🥉';
  return rank;
}

function getRankClass(rank) {
  if (rank <= 3) return styles.topRank;
  return '';
}

export default function Leaderboard() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Top Airdrops Leaderboard</h1>
        <p className={styles.subtitle}>Ranked by estimated value and community trust</p>
      </div>

      <div className={styles.tableWrapper}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Rank</th>
              <th>Project</th>
              <th>Network</th>
              <th>Est. Value</th>
            </tr>
          </thead>
          <tbody>
            {sortedData.map((project, index) => (
              <tr key={project.id}>
                <td className={`${styles.rank} ${getRankClass(index + 1)}`}>
                  {getRankDisplay(index + 1)}
                </td>
                <td>
                  <Link href={`/airdrops/${project.id}`} className={styles.projectCell}>
                    <div className={styles.icon}>{project.name.charAt(0)}</div>
                    <span className={styles.projectName}>{project.name} <span className={styles.ticker}>({project.ticker})</span></span>
                  </Link>
                </td>
                <td className={styles.network}>{project.network}</td>
                <td className={styles.value}>{project.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}