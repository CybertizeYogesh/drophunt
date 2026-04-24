"use client";

import { useState } from 'react';
import styles from './Submit.module.css';

export default function SubmitAirdrop() {
  const [formData, setFormData] = useState({
    projectName: '',
    ticker: '',
    category: '',
    link: '',
    description: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className={styles.container}>
        <div className={styles.formCard}>
          <div className={styles.successMessage}>
            <h2>Submission Received!</h2>
            <p>Thank you for submitting <strong>{formData.projectName}</strong>. Our team will review and add it shortly.</p>
            <button 
              onClick={() => { setIsSubmitted(false); setFormData({ projectName: '', ticker: '', category: '', link: '', description: '' }); }} 
              className={styles.submitAnotherBtn}
            >
              Submit Another
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Submit an Airdrop</h1>
        <p className={styles.description}>Help the community discover new crypto opportunities by submitting a project.</p>
      </div>

      <div className={styles.formCard}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.inputGroup}>
            <label htmlFor="projectName">Project Name</label>
            <input 
              type="text" 
              id="projectName"
              name="projectName"
              placeholder="e.g. Nebula Network"
              value={formData.projectName}
              onChange={handleChange}
              required 
            />
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="ticker">Ticker Symbol</label>
            <input 
              type="text" 
              id="ticker"
              name="ticker"
              placeholder="e.g. NEB"
              value={formData.ticker}
              onChange={handleChange}
              required 
            />
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="category">Category</label>
            <select 
              id="category"
              name="category"
              value={formData.category}
              onChange={handleChange}
              required
            >
              <option value="">Select a category</option>
              <option value="DeFi">DeFi</option>
              <option value="NFT">NFT</option>
              <option value="Gaming">Gaming</option>
              <option value="Layer 2">Layer 2</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="link">Project Link</label>
            <input 
              type="url" 
              id="link"
              name="link"
              placeholder="https://project-website.com"
              value={formData.link}
              onChange={handleChange}
              required 
            />
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="description">Description</label>
            <textarea 
              id="description"
              name="description"
              placeholder="Brief description of the project and airdrop details..."
              value={formData.description}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <button type="submit" className={styles.submitBtn}>
            Submit Project
          </button>
        </form>
      </div>
    </div>
  );
}