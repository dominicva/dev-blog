import Link from 'next/link';

function Header({ title }) {
  return <h1>{title ? title : 'Default title'}</h1>;
}

function HomePage() {
  return (
    <div>
      <Header title="My blog" />
      Check out my first blog{' '}
      <Link href="/posts/first-post">
        <a>post</a>
      </Link>
    </div>
  );
}

export default HomePage;
