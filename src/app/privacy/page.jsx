import styles from '../Legal.module.css';

export default function PrivacyPage() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Privacy Policy</h1>
        <p className={styles.lastUpdated}>Last Updated: April 2026</p>
      </header>

      <main className={styles.content}>
        <section className={styles.section}>
          <h2>1. Data Collection</h2>
          <p>
            DropHunt is a Web3-native platform. We do not require users to create traditional accounts or provide personal identification. If you choose to subscribe to our newsletter, we only collect your email address for communication purposes.
          </p>
          <p>
            We do not collect names, phone numbers, physical addresses, or any other personally identifiable information unless explicitly provided by you for a specific service.
          </p>
        </section>

        <section className={styles.section}>
          <h2>2. Wallet Connections</h2>
          <p>
            Connecting your Web3 wallet (e.g., MetaMask) to DropHunt only allows us to read publicly available blockchain data. We cannot access your private keys, seed phrases, or initiate transactions on your behalf.
          </p>
          <p>
            When you connect your wallet:
          </p>
          <ul>
            <li>We may read your wallet address to display your saved airdrops</li>
            <li>We only interact with read-only functions on the blockchain</li>
            <li>We never have access to your private keys or seed phrase</li>
            <li>We cannot move, transfer, or spend your tokens without your explicit signature</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>3. Analytics and Cookies</h2>
          <p>
            We use basic, privacy-respecting analytics to understand website traffic and improve user experience. We do not sell user data to third-party advertisers.
          </p>
          <p>
            Our analytics may collect:
          </p>
          <ul>
            <li>Pages visited and time spent on the platform</li>
            <li>General geographic location (country-level only)</li>
            <li>Browser type and device information</li>
            <li>Referral sources (how you found our website)</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>4. Data Storage and Security</h2>
          <p>
            Any data we collect is stored securely and retained only for as long as necessary. We implement industry-standard security measures to protect against unauthorized access, alteration, disclosure, or destruction of data.
          </p>
          <p>
            Your email address (if subscribed to our newsletter) will never be shared with third parties for marketing purposes.
          </p>
        </section>

        <section className={styles.section}>
          <h2>5. Your Rights</h2>
          <p>
            Depending on your jurisdiction, you may have the right to:
          </p>
          <ul>
            <li>Request access to any personal data we hold about you</li>
            <li>Request correction of inaccurate personal data</li>
            <li>Request deletion of your personal data</li>
            <li>Opt out of marketing communications at any time</li>
          </ul>
          <p>
            To exercise any of these rights, please contact us through our official channels.
          </p>
        </section>

        <section className={styles.section}>
          <h2>6. Third-Party Services</h2>
          <p>
            Our platform may integrate with third-party services such as blockchain explorers, wallet providers, and analytics tools. These services have their own privacy policies, and we encourage you to review them before using such services.
          </p>
        </section>

        <section className={styles.section}>
          <h2>7. Updates to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time to reflect changes in our practices or for legal, operational, or regulatory reasons. We will always provide clear notice of any material changes.
          </p>
        </section>
      </main>

      <footer className={styles.footer}>
        <p className={styles.footerText}>
          If you have questions about this Privacy Policy, please contact us.
        </p>
      </footer>
    </div>
  );
}