import { calendly, twitter, github, cv, target } from './constants';

import { FaTwitter, FaGithub } from 'react-icons/fa';
import { AiOutlineCode } from 'react-icons/ai';

const Nav = () => {
  return (
    <div className="nav-container">
      <nav>
        <ul className="nav-links">
          <li>
            <a href={calendly} target={target} className="social-icon">
              <AiOutlineCode size={21} />
            </a>
          </li>
          <li>
            <a href={twitter} target={target} className="social-icon">
              <FaTwitter size={20} />
            </a>
          </li>
          <li>
            <a href={github} target={target} className="social-icon">
              <FaGithub size={20} />
            </a>
          </li>
          <li>
            <a href={cv} target={target}>
              cv
            </a>
          </li>
        </ul>
      </nav>
      <style jsx>{`
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
        }

        .nav-links li {
          margin-right: 24px;
        }

        .nav-links a {
          display: flex;
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
