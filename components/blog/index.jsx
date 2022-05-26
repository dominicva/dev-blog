import Link from 'next/link';
import Date from '../date';
import { h2, list, postPreview, postDate } from './styles.js';

const Blog = ({ allPostsData }) => {
  return (
    <section style={{ marginBottom: '4rem', paddingBottom: '2rem' }}>
      <h2 style={h2}>Blog</h2>
      <ul style={list}>
        {allPostsData.map(({ id, date, title }) => (
          <li key={id} style={postPreview}>
            <Link href={`/posts/${id}`}>
              <a>{title}</a>
            </Link>

            <small style={postDate}>
              <Date dateString={date} />
            </small>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Blog;
