import Link from 'next/link';

import styles from './Navbar.module.css';

export default function Navbar() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <ul className={styles.links}>
          <li>
            <Link href="/work">
              <a>work</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a>about me</a>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <a>contact</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
