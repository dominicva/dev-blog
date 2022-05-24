import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';

const name = 'Dom van Almsick';
export const siteTitle = 'dominicva';

const Layout = ({ children, home }) => {
  return (
    <div className={styles.container}>
      <Head>
        <meta
          name="description"
          content="A space for Dom to share ideas and projects."
        />
        <meta name="og:title" content={siteTitle} />
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <Image
              priority
              src="/images/profile.png"
              alt={name}
              className={utilStyles.borderCircle}
              height={144}
              width={144}
            />
            <h1 className={utilStyles.heading2XL}>{name}</h1>
          </>
        ) : (
          <>
            <Link href="/">
              <a>
                <Image
                  priority
                  src="/images/profile.png"
                  alt={name}
                  className={utilStyles.borderCircle}
                  height={108}
                  width={108}
                />
              </a>
            </Link>
            <h2 className={utilStyles.headingLg}>
              <Link href="/">
                <a className={utilStyles.colorInherit}>{name}</a>
              </Link>
            </h2>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Layout;
