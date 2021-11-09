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
        <title>Home | Eugene Kiryk</title>
      </Head>
      <section className={styles.container}>
        <div className={styles.intro}>
          <h1 className={styles.hello}>
            Hi there, <br /> my name is{' '}
            <span className={styles.name}>
              Eugene
            </span>
            <br />
            I am a <span className={styles.occupation}>front-end developer</span>
          </h1>
          <h2 className={styles.welcome}>Welcome to my portfolio!</h2>
          <div className={styles.buttons}>
            <Link href="/work">
              <a>
                <Button>My Projects</Button>
              </a>
            </Link>
            <Link href="/contact">
              <a>
                <Button>Contact Me</Button>
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
