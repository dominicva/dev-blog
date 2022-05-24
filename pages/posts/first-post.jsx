import Link from 'next/link';
import Head from 'next/head';

const FirstPost = () => {
  return (
    <>
      <Head>
        <title>First post</title>
      </Head>
      <h1>First post</h1>
      <Link href="/">
        <a>Back to home page</a>
      </Link>
    </>
  );
};
export default FirstPost;
