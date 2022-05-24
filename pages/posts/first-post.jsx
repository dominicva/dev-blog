import Link from 'next/link';
const FirstPost = () => {
  return (
    <div>
      <h1>First post</h1>
      <Link href="/">
        <a>Back to home page</a>
      </Link>
    </div>
  );
};
export default FirstPost;
