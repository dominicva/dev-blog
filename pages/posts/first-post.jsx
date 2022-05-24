import Link from 'next/link';
import Head from 'next/head';
import Layout from '../../components/layout';

const FirstPost = () => {
  return (
    <Layout>
      <Head>
        <title>First post</title>
      </Head>
      <h1>First post</h1>
      <Link href="/">
        <a>Back to home page</a>
      </Link>
    </Layout>
  );
};
export default FirstPost;
