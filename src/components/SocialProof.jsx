"use client";

import Marquee from './Marquee';
import Stats from './Stats';

const ECOSYSTEMS = [
  { name: 'Solana', logo: '/images/investors/solana.png' },
  { name: 'Base', logo: '/images/investors/base.png' },
  { name: 'Arbitrum', logo: '/images/investors/arbitrum.png' },
  { name: 'Optimism', logo: '/images/investors/optimism.png' },
  { name: 'zkSync', logo: '/images/investors/zksync.png' },
  { name: 'Linea', logo: '/images/investors/linea.png' },


  { name: 'Polygon', logo: '/images/investors/polygon.png' },
  { name: 'Avalanche', logo: '/images/investors/avalanche.png' }
];

const INVESTORS = [
  { name: 'a16z', logo: '/images/investors/a16z.jpg' },
  { name: 'ParaFi', logo: '/images/investors/parafi.png' },
  { name: 'Paradigm', logo: '/images/investors/paradigm.jpg' },
  { name: 'Electric Capital', logo: '/images/investors/electric.png' },
  { name: 'Lattice', logo: '/images/investors/lattice.png' },

  { name: 'Green Field', logo: '/images/investors/greenfield.jpg' },

];

export default function SocialProof() {
  return (
    <>
      <Marquee title="Supported Ecosystems" items={ECOSYSTEMS} />
      <Stats />
      <Marquee title="Backed By Leading Investors" items={INVESTORS} />
    </>
  );
}