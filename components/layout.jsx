import Head from 'next/head';
import Link from 'next/link';

export const siteTitle = 'dominicva';

const Layout = ({ children, home }) => {
  return (
    <div
      style={{
        padding: '1rem',
        maxWidth: '768px',
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
        <main>{children}</main>
        {!home && (
          <div>
            <Link href="/">
              <a>← Back to home</a>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Layout;
