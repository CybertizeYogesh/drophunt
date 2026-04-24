import styles from '../Legal.module.css';

export default function TermsPage() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Terms of Service</h1>
        <p className={styles.lastUpdated}>Last Updated: April 2026</p>
      </header>

      <main className={styles.content}>
        <section className={styles.section}>
          <h2>1. Not Financial Advice (NFA)</h2>
          <p>
            DropHunt is strictly an educational directory and aggregator. Nothing on this website constitutes financial, investment, or trading advice. Airdrop farming carries inherent risks, including the loss of gas fees and exposure to smart contract vulnerabilities.
          </p>
          <p>
            Users should understand that cryptocurrency markets are highly volatile and that past performance does not guarantee future results. Always consult with a qualified financial advisor before making investment decisions.
          </p>
        </section>

        <section className={styles.section}>
          <h2>2. Use at Your Own Risk</h2>
          <p>
            Users are solely responsible for their own security. DropHunt does not endorse or guarantee the safety of any third-party protocols, bridges, or testnets listed on the platform. Always do your own research (DYOR) and never risk funds you cannot afford to lose.
          </p>
          <p>
            By using this platform, you acknowledge that:
          </p>
          <ul>
            <li>You understand the risks associated with Web3 interactions</li>
            <li>You will never share your seed phrase or private keys with anyone</li>
            <li>You accept full responsibility for any funds lost through platform use</li>
            <li>You will verify all contract addresses before interacting with them</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>3. External Links</h2>
          <p>
            Our service contains links to external websites and decentralized applications (dApps). We have no control over the content or security of these external sites and accept no liability for any loss or damage incurred from their use.
          </p>
          <p>
            Users are advised to exercise caution when clicking on any external links and to ensure they are visiting legitimate, official websites before connecting their wallets or providing any information.
          </p>
        </section>

        <section className={styles.section}>
          <h2>4. User Responsibilities</h2>
          <p>
            By accessing and using DropHunt, you agree to:
          </p>
          <ul>
            <li>Not use the platform for any illegal purposes</li>
            <li>Not attempt to hack, exploit, or disrupt the platform</li>
            <li>Report any security vulnerabilities responsibly</li>
            <li>Comply with all applicable laws and regulations</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>5. Disclaimer of Warranties</h2>
          <p>
            DropHunt is provided "as is" without warranties of any kind, either express or implied. We do not guarantee that the platform will be uninterrupted, secure, or error-free. The information provided on this platform is for educational purposes only.
          </p>
        </section>

        <section className={styles.section}>
          <h2>6. Limitation of Liability</h2>
          <p>
            To the fullest extent permitted by law, DropHunt and its operators shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use the platform.
          </p>
        </section>
      </main>

      <footer className={styles.footer}>
        <p className={styles.footerText}>
          If you have questions about these Terms, please contact us.
        </p>
      </footer>
    </div>
  );
}