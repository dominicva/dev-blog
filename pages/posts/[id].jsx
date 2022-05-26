import Head from 'next/head';
import { getAllPostIds, getPostData } from '../../lib/posts';
import Layout from '../../components/layout';
import PostComponent from '../../components/post';

export default function Post({ postData }) {
  const { title, date, contentHtml } = postData;

  return (
    <Layout>
      <Head>
        <title>{title}</title>
      </Head>
      <PostComponent title={title} date={date} contentHtml={contentHtml} />
    </Layout>
  );
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);

  return {
    props: {
      postData,
    },
  };
}

export async function getStaticPaths() {
  const paths = getAllPostIds();

  return {
    paths,
    fallback: false,
  };
}
