import Image from 'next/image';
import Link from 'next/link';

const Nav = () => {
  return (
    <div className="nav-container">
      <nav>
        <Link href="/">
          <Image
            src="/images/logo.svg"
            alt="logo"
            width={48}
            height={48}
            style={{ borderRadius: '50%' }}
          />
        </Link>
        <ul className="nav-links">
          <Link href="/">
            <a>Home</a>
          </Link>
          <Link href="/about">
            <a>About</a>
          </Link>
          <Link href="/contact">
            <a>Contact</a>
          </Link>
        </ul>
      </nav>
      <style jsx>{`
        nav {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
      `}</style>
    </div>
  );
};

export default Nav;
