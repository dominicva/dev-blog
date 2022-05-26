import Image from 'next/image';
import Date from '../date';
import { fullName } from '../constants';
import { metaData, author, dateStyle } from './style';

const Post = ({ title, date, contentHtml }) => {
  return (
    <article>
      <header>
        <h1>{title}</h1>
        <div style={metaData}>
          <Image
            src={`/images/profile.png`}
            width={48}
            height={48}
            alt={`${title} profile`}
            style={{ borderRadius: '50%' }}
          />
          <div style={author}>
            <span>{fullName}</span>
            <span style={dateStyle}>
              <Date dateString={date} />
            </span>
          </div>
        </div>
      </header>

      <section dangerouslySetInnerHTML={{ __html: contentHtml }} />
    </article>
  );
};

export default Post;
