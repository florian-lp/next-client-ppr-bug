import Link from 'next/link';
import styles from './page.module.css';
import { Suspense } from 'react';
import Data from './data';

export default function Home() {
  return <main className={styles.main}>
    <Suspense fallback={<div>Loading</div>}>
      <Data />
    </Suspense>

    Home

    <Link href="/other">Other</Link>
  </main>;
}
