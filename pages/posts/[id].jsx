import Head from 'next/head';
import { getAllPostIds, getPostData } from '../../lib/posts';
import Layout from '../../components/layout';
import Date from '../../components/date';

export default function Post({ postData }) {
  const { title, date, contentHtml } = postData;

  return (
    <Layout>
      <Head>
        <title>{title}</title>
      </Head>
      <article>
        <h1>{title}</h1>
        <div>
          <Date dateString={date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
      </article>
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
