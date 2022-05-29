import Image from 'next/image';
import Link from 'next/link';
import { FaCode, FaTwitter, FaGithub } from 'react-icons/fa';
const Nav = () => {
  return (
    <div className="nav-container">
      <nav>
        <Link href="/">
          <a id="logo">
            <Image
              src="/images/logo.svg"
              alt="logo"
              width={48}
              height={48}
              style={{ borderRadius: '50%' }}
            />
          </a>
        </Link>
        <ul className="nav-links">
          <li>
            <a
              href="https://calendly.com/dominicvana/pair-programming"
              target="_blank"
              className="social-icon"
            >
              <FaCode size={32} />
            </a>
          </li>
          <li>
            <a
              href="https://www.twitter.com/dominicva"
              target="_blank"
              className="social-icon"
            >
              <FaTwitter size={32} />
            </a>
          </li>
          <li>
            <a
              href="https://www.github.com/dominicva"
              target="_blank"
              className="social-icon"
            >
              <FaGithub size={32} />
            </a>
          </li>
        </ul>
      </nav>
      <style jsx>{`
        nav {
          display: grid;
          grid-template-columns: 1fr 1fr;
        }

        a,
        li {
          line-height: initial;
        }

        .nav-links {
          list-style-type: none;
          display: flex;
          align-items: center;
          justify-self: flex-end;
        }

        .nav-links li {
          margin-right: 1rem;
        }

        .nav-links li:last-of-type {
          margin-right: 0rem;
        }
      `}</style>
    </div>
  );
};

export default Nav;
