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
            display: flex;
            flex-direction: column;
            max-width: 560px;
            margin: auto;
            gap: 32px;
            padding: 32px 24px;
          }

          @media (min-width: 560px) {
            #wrapper {
              margin-top: 40px;
            }
          }

          @media (min-width: 768px) {
            #wrapper {
              margin-top: 80px;
            }
          }
        `}
      </style>
    </>
  );
};

export default Layout;
