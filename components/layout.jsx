import Head from 'next/head';
import Link from 'next/link';
import { siteTitle } from './constants';
import Nav from './nav';

const Layout = ({ children, home }) => {
  return (
    <div
      style={{
        padding: '1rem 1rem 3rem 1rem',
        maxWidth: '1280px',
        margin: 'auto',
      }}
    >
      <Head>
        <meta
          name="description"
          content="A space for Dom to share resources, ideas, and projects."
        />
        <meta name="og:title" content={siteTitle} />
      </Head>
      <div>
        <Nav />
        <main>{children}</main>
        {!home && (
          <div>
            <Link href="/">
              <a>← Back to home</a>
            </Link>
          </div>
        )}
      </div>
      <style jsx>
        {`
          @media (min-width: 768px) {
            main {
              display: grid;
              grid-template-columns: minmax(min-content, 300px) 1fr;
              gap: 1.5rem;
            }
          }
        `}
      </style>
    </div>
  );
};

export default Layout;

/**
 *     display: grid;
    grid-template-columns: minmax(min-content, 300px) 1fr;
    gap: 1.5rem;
 */
