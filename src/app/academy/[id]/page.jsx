import Link from 'next/link';
import { academyModules } from '../../../data/academy';
import styles from './Lesson.module.css';

export default async function LessonPage({ params }) {
  const resolvedParams = await params;
  const lesson = academyModules.find(m => m.id === resolvedParams.id);

  if (!lesson) {
    return (
      <div className={styles.container}>
        <Link href="/academy" className={styles.backLink}>
          ← Back to Academy
        </Link>
        <div className={styles.notFound}>
          <h1>Lesson Not Found</h1>
          <p>The lesson you&apos;re looking for doesn&apos;t exist.</p>
          <Link href="/academy" className={styles.homeLink}>
            Return to Academy
          </Link>
        </div>
      </div>
    );
  }

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Beginner': return '#22c55e';
      case 'Intermediate': return '#f59e0b';
      case 'Advanced': return '#a855f7';
      default: return '#8b95a5';
    }
  };

  const renderContent = (content) => {
    if (!content) return null;

    return content.map((item, index) => {
      switch (item.type) {
        case 'heading':
          return <h2 key={index} className={styles.articleHeading}>{item.text}</h2>;
        case 'paragraph':
          return <p key={index} className={styles.articleParagraph}>{item.text}</p>;
        case 'callout':
          return (
            <div 
              key={index} 
              className={`${styles.callout} ${item.variant === 'warning' ? styles.calloutWarning : styles.calloutInfo}`}
            >
              <span className={styles.calloutIcon}>
                {item.variant === 'warning' ? '⚠️' : '💡'}
              </span>
              <p className={styles.calloutText}>{item.text}</p>
            </div>
          );
        default:
          return null;
      }
    });
  };

  return (
    <div className={styles.container}>
      <Link href="/academy" className={styles.backLink}>
        ← Back to Academy
      </Link>

      <header className={styles.header}>
        <div className={styles.headerBadge} style={{ color: getDifficultyColor(lesson.difficulty) }}>
          {lesson.difficulty} • {lesson.category}
        </div>
        <h1 className={styles.headerTitle}>{lesson.title}</h1>
        <p className={styles.headerMeta}>{lesson.readTime}</p>
      </header>

      <article className={styles.article}>
        {lesson.content ? renderContent(lesson.content) : (
          <div className={styles.placeholder}>
            <p>Lesson content coming soon...</p>
          </div>
        )}
      </article>

      <footer className={styles.footer}>
        <Link href="/academy" className={styles.nextLink}>
          ← Back to all lessons
        </Link>
      </footer>
    </div>
  );
}