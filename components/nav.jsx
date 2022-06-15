import { FaCode, FaTwitter, FaGithub } from 'react-icons/fa';

const Nav = () => {
  return (
    <div className="nav-container">
      <nav>
        <ul className="nav-links">
          <li>
            <a
              href="https://calendly.com/dominicvana/pair-programming"
              target="_blank noopener noreferrer"
              className="social-icon"
            >
              <FaCode size={20} />
            </a>
          </li>
          <li>
            <a
              href="https://www.twitter.com/dominicva"
              target="_blank noopener noreferrer"
              className="social-icon"
            >
              <FaTwitter size={20} />
            </a>
          </li>
          <li>
            <a
              href="https://www.github.com/dominicva"
              target="_blank noopener noreferrer"
              className="social-icon"
            >
              <FaGithub size={20} />
            </a>
          </li>
        </ul>
      </nav>
      <style jsx>{`
        #logo {
          margin-left: -6px;
        }

        nav {
          display: flex;
          justify-content: space-between;
        }

        a,
        li {
          line-height: initial;
        }

        .nav-links {
          list-style-type: none;
          width: 100%;
          display: flex;
          align-items: center;
        }

        .nav-links li {
          margin-right: 24px;
        }

        .nav-links li:last-of-type {
          margin-right: 0rem;
        }

        @media (min-width: 560px) {
          .nav-links {
            margin-right: 32px;
          }
        }
        @media (min-width: 768px) {
          .nav-links {
            margin-right: 48px;
          }
        }
      `}</style>
    </div>
  );
};

export default Nav;
