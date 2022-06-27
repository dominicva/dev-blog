import Head from 'next/head';
import Layout from '../components/layout';
import Intro from '../components/intro';
import { siteTitle } from '../components/constants';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <Intro />
    </Layout>
  );
}
