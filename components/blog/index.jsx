import Link from 'next/link';
import Date from '../date';
import { h2, list, postPreview, postDate } from './styles.js';

const Blog = ({ allPostsData }) => {
  return (
    <section
      style={{
        display: 'grid',
        gridTemplateColumns: 'minmax(min-content, 6rem) 1fr',
        gap: '1rem',
      }}
    >
      <h2 style={h2}>Blog</h2>
      <ul style={list}>
        {allPostsData.map(({ id, date, title }) => (
          <li key={id} style={postPreview}>
            <Link href={`/posts/${id}`}>
              <a className="text-link">{title}</a>
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
