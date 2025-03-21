import styles from './page.module.css';
import { useTranslations } from 'next-intl';

export default function Home() {
  const t = useTranslations('HomePage');

  return (
    <>
      <main className={styles.main}>
        <div className={styles.message}>
          <h1>{t('title')}</h1>
        </div>
      </main>
    </>
  );
}
