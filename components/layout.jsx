import Head from 'next/head';
import Link from 'next/link';
import { siteTitle } from './constants';
import Nav from './nav';

const Layout = ({ children, home }) => {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="A space for Dom to share resources, ideas, and projects."
        />
        <meta name="og:title" content={siteTitle} />
      </Head>
      <div id="wrapper">
        <Nav />
        {children}
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
          #wrapper {
            display: grid;
            max-width: 968px;
            margin: auto;
            gap: 2rem;
            padding: 1rem;
          }

          @media (min-width: 768px) {
            #wrapper {
              grid-template-columns: minmax(min-content, 300px) minmax(
                  200px,
                  1fr
                );
              padding: 1.5rem 3rem;
            }
          }
        `}
      </style>
    </>
  );
};

export default Layout;

/**
 *     display: grid;
    grid-template-columns: minmax(min-content, 300px) 1fr;
    gap: 1.5rem;
 */
