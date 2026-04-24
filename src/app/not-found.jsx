import Link from 'next/link';
import styles from './NotFound.module.css';

export default function NotFound() {
  return (
    <div className={styles.container}>
      <div className={`${styles.decoration} ${styles.decorationTop}`} />
      <div className={`${styles.decoration} ${styles.decorationBottom}`} />

      <div className={styles.content}>
        <h1 className={styles.errorCode}>404</h1>
        <h2 className={styles.title}>Lost in the Metaverse</h2>
        <p className={styles.description}>
          The block you are looking for has been dropped, or the airdrop has already ended. Let&apos;s get you back to safety.
        </p>
        <Link href="/" className={styles.homeBtn}>
          Return to Basecamp
        </Link>
      </div>
    </div>
  );
}