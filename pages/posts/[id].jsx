import { getAllPostIds, getPostData } from '../../lib/posts';
import Layout from '../../components/layout';

export default function Post({ postData }) {
  const { title, id, date } = postData;

  return (
    <Layout>
      {title}
      <br />
      {id}
      <br />
      {date}
    </Layout>
  );
}

export async function getStaticProps({ params }) {
  const postData = getPostData(params.id);

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
