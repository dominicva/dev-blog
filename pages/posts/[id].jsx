import { getAllPostIds, getPostData } from '../../lib/posts';
import Layout from '../../components/layout';
import Head from 'next/head';

export default function Post({ postData }) {
  const { title, id, date, contentHtml } = postData;

  return (
    <Layout>
      <Head>
        <title>{title}</title>
      </Head>
      {title}
      <br />
      {id}
      <br />
      {date}
      <br />
      <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
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
