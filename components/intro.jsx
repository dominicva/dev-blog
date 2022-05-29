import { FaCode, FaTwitter, FaGithub } from 'react-icons/fa';
import { MdLocationPin } from 'react-icons/md';
import Image from 'next/image';
import Nav from './nav';

const firstName = 'Dom';
const lastName = 'van Almsick';
const fullName = `${firstName} ${lastName}`;
const imageTitle = 'cosmic microwave background';
const currentLocation = 'Mexico';

const Intro = () => {
  return (
    <section>
      <header id="intro" className="container">
        <h1>{fullName}</h1>

        <a
          id="link-location"
          href="https://www.google.com/maps/place/Quintana+Roo/"
          target="_blank"
        >
          <MdLocationPin size={30} />
          <span style={{ paddingRight: '0.5rem' }}>Currently:</span>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Image
              src="/svgs/mexican-flag.svg"
              alt="Meixcan flag"
              width={22}
              height={16}
              style={{
                borderRadius: '2px',
              }}
            />
            <span style={{ marginLeft: '0.25rem' }}>{currentLocation}</span>
          </div>
        </a>

        <div id="social">
          <a
            href="https://calendly.com/dominicvana/pair-programming"
            target="_blank"
            className="social-icon"
          >
            <FaCode size={32} />
          </a>
          <a
            href="https://www.twitter.com/dominicva"
            target="_blank"
            className="social-icon"
          >
            <FaTwitter size={32} />
          </a>
          <a
            href="https://www.github.com/dominicva"
            target="_blank"
            className="social-icon"
          >
            <FaGithub size={32} />
          </a>
        </div>
      </header>
      <div id="bio">
        <p>
          I am a full-stack <b>JavaScript enthusiast and teacher</b>. Click the
          first icon above to schedule a (free) pair programming session 🤓.
        </p>
        <p>
          Other things I care about mostly relate to{' '}
          <a
            className="text-link"
            href="https://www.effectivealtruism.org/"
            target="_blank"
          >
            <b>effective altruism</b>
          </a>{' '}
          and the long-term future.
        </p>
      </div>
      <style jsx>{`
        .container {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        #link-location {
          display: flex;
          align-items: center;
        }

        #social {
          display: flex;
          width: 100%;
          justify-content: center;
        }

        .social-icon {
          margin-right: 1rem;
        }

        .social-icon:last-of-type {
          margin-right: 0;
        }

        #bio p {
          margin-bottom: 0.5rem;
        }

        @media (min-width: 768px) {
          #info {
            margin: 0;
          }

          #intro {
            align-items: flex-start;
          }

          #info-links {
            align-items: flex-start;
          }

          #social {
            justify-content: flex-start;
          }
        }
      `}</style>
    </section>
  );
};

export default Intro;