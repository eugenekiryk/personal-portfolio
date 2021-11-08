import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';
import Layout from '../components/Layout/Layout';
import Button from '../components/UI/Button/Button';

import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>home | Eugene Kiryk</title>
      </Head>
      <section className={styles.container}>
        <div className={styles.intro}>
          <h1 className={styles.hello}>
            hi there, <br /> my name is{' '}
            <span className={styles.name}>
              <Link href="/about">
                <a>Eugene</a>
              </Link>
            </span>
            <br />
            I am a <span className={styles.occupation}>front-end developer</span>
          </h1>
          <h2 className={styles.welcome}>welcome to my portfolio!</h2>
          <div className={styles.buttons}>
            <Link href="/work">
              <a>
                <Button>my projects</Button>
              </a>
            </Link>
            <Link href="/contact">
              <a>
                <Button>contact me</Button>
              </a>
            </Link>
          </div>
        </div>
        <div className={styles.image}>
          <Image src="/images/hero.svg" alt="coder" width={538} height={464} />
        </div>
      </section>
    </Layout>
  );
}
