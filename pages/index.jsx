import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

function Header({ title }) {
  return (
    <header>
      <Image src="/images/profile.png" alt="Dominic" width={150} height={150} />

      <h1>{title ? title : 'Default title'}</h1>
    </header>
  );
}

function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        {/* <Header title="My blog" /> */}
        <p>Hi, I'm Dom</p>
        <p>I like JS</p>
        Check out my first blog{' '}
        <Link href="/posts/first-post">
          <a>post</a>
        </Link>
      </section>
    </Layout>
  );
}

export default Home;
