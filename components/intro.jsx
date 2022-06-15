import { MdLocationPin } from 'react-icons/md';

const firstName = 'Dom';
const lastName = 'van Almsick';
const fullName = `${firstName} ${lastName}`;
const currentLocation = 'Mexico';

const Intro = () => {
  return (
    <div className="intro-container">
      <h1>{fullName}</h1>

      <div id="bio">
        <p>I am a JavaScript enthusiast and teacher.</p>
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
        <div>
          <a
            href="https://www.google.com/maps/place/Quintana+Roo/"
            target="_blank noopener noreferrer"
            className="text-link"
            style={{ display: 'inline-flex', gap: '4px' }}
          >
            <MdLocationPin size={22} />
            <span style={{ marginTop: '1px' }}>
              Currently in {currentLocation}
            </span>
          </a>
        </div>
      </div>
      <style jsx>{`
        .intro-container {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }
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
          margin-bottom: 48px;
          margin-top: 0;
        }
      `}</style>
    </div>
  );
};

export default Intro;
