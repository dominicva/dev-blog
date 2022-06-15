import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import Intro from '../components/intro';

export default function Home({}) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <Intro />
    </Layout>
  );
}
