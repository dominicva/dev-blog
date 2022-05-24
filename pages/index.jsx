import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';

function Header({ title }) {
  return (
    <header>
      <Image src="/images/profile.png" alt="Dominic" width={150} height={150} />

      <h1>{title ? title : 'Default title'}</h1>
    </header>
  );
}

function HomePage() {
  return (
    <>
      <Head>
        <title>dominicva</title>
      </Head>
      <Header title="My blog" />
      Check out my first blog{' '}
      <Link href="/posts/first-post">
        <a>post</a>
      </Link>
    </>
  );
}

export default HomePage;
