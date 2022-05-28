import { FaCode, FaTwitter, FaGithub } from 'react-icons/fa';
import { MdLocationPin } from 'react-icons/md';
import Image from 'next/image';

const firstName = 'Dom';
const lastName = 'van Almsick';
const fullName = `${firstName} ${lastName}`;
const imageTitle = 'cosmic microwave background';
const currentLocation = 'Mexico';

const Intro = () => {
  return (
    <section>
      <div>
        <header id="intro" className="container">
          <Image
            priority
            src="/images/cmb.png"
            alt={imageTitle}
            width={248}
            height={248}
          />
          <div id="info">
            <h1>{fullName}</h1>

            <div id="info-links" className="container">
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
                  <span style={{ marginLeft: '0.25rem' }}>
                    {currentLocation}
                  </span>
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
            </div>
          </div>
        </header>
        <div id="bio">
          <p>
            I am a full-stack <b>JavaScript enthusiast and teacher</b>. Click
            the first icon above to schedule a (free) pair programming session
            🤓.
          </p>
          <p>
            Other things I care about mostly relate to{' '}
            <a href="https://www.effectivealtruism.org/" target="_blank">
              <b>effective altruism</b>
            </a>{' '}
            and the long-term future.
          </p>
        </div>
        <style jsx>{`
          h1 {
            margin-top: 1rem;
            margin-bottom: 1rem;
          }

          .container {
            display: flex;
            flex-direction: column;
            align-items: center;
          }

          #intro {
            margin-bottom: 1.5rem;
          }

          #link-location {
            display: flex;
            align-items: center;
            margin-bottom: 1.5rem;
          }

          #social {
            display: flex;
            width: 100%;
            justify-content: center;
          }

          .social-icon {
            padding: 0 4px;
            margin-right: 1rem;
          }

          .social-icon:last-of-type {
            margin-right: 0;
          }

          #bio {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            margin-bottom: 3rem;
          }

          #bio p {
            margin-bottom: 0.5rem;
          }

          @media (min-width: 768px) {
            #intro {
              flex-direction: row-reverse;
              justify-content: flex-end;
              margin-top: 2rem;
              margin-bottom: 2rem;
            }

            #info {
              margin-right: 2rem;
            }

            #info-links {
              align-items: flex-start;
            }

            #social {
              justify-content: flex-start;
            }
          }
        `}</style>
      </div>
    </section>
  );
};

export default Intro;
