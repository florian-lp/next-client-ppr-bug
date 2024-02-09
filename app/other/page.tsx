import Link from 'next/link';
import styles from './page.module.css';
import Data from '../data';
import { Suspense } from 'react';

export default function Page() {

    return <main className={styles.main}>
        <Suspense fallback={<div>Loading</div>}>
            <Data />
        </Suspense>
        Other
        <Link href="/">Home</Link>
    </main>;
}