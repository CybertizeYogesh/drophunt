"use client";

import { useState } from 'react';
import styles from '../styles/FAQ.module.css';

const faqData = [
  {
    question: "Is DropHunt completely free to use?",
    answer: "Yes! DropHunt is a 100% free aggregator. We simply curate the best opportunities in Web3 so you don't have to spend hours searching."
  },
  {
    question: "Do I need a crypto wallet?",
    answer: "Yes, you'll need a Web3 wallet like MetaMask to claim most airdrops. Some projects also allow email registration, but wallet connection is required for token distribution."
  },
  {
    question: "Why do some airdrops require tasks?",
    answer: "Projects want active community members, not bots. Tasks like following their Twitter, joining Discord, or making testnet transactions help prove you're a real user."
  },
  {
    question: "How do I submit my own project?",
    answer: "Click the 'Submit' link in our top navigation bar, fill out the details about your project, and our team will review it for addition to the directory."
  },
  {
    question: "Are these airdrops guaranteed?",
    answer: "No. While we curate projects with strong potential, airdrops are never guaranteed. Always do your own research before participating in any blockchain project."
  }
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleQuestion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Frequently Asked Questions</h2>
      
      <div className={styles.faqList}>
        {faqData.map((item, index) => (
          <div 
            key={index} 
            className={`${styles.faqItem} ${activeIndex === index ? styles.active : ''}`}
          >
            <button 
              className={styles.question}
              onClick={() => toggleQuestion(index)}
            >
              <span>{item.question}</span>
              <span className={styles.icon}>{activeIndex === index ? '−' : '+'}</span>
            </button>
            <div className={styles.answer}>
              <p>{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}