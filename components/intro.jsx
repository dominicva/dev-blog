import { FaGithubSquare, FaTwitterSquare } from 'react-icons/fa';
import { MdLocationPin } from 'react-icons/md';
import Image from 'next/image';
/**
 * STYLES START
 */

const header = {
  display: 'flex',
  alignItems: 'center',
};

const h1 = {
  marginLeft: '0.75rem',
};

const avatar = {
  borderRadius: '50%',
  // marginRight: '1rem',
};

const container = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};

const social = {
  ...container,
  flexDirection: 'row',
  paddingLeft: 0,
};

const icon = {
  marginRight: '0.5rem',
};

/**
 * STYLES END
 */

const Intro = ({ name }) => {
  return (
    <section>
      <div>
        <header style={header}>
          <Image
            priority
            src="/images/profile.png"
            alt={name}
            width={48}
            height={48}
            style={avatar}
          />
          <h1 style={h1}>Dom van Almsick</h1>
        </header>
        <p>I enjoy teaching, learning, and writing JavaScript.</p>
        <p>
          I care about a few other things too. I plan to share more about them
          here.
        </p>
        <div
          style={{
            display: 'flex',
            alignItems: 'flex-start',
            flexDirection: 'column',
          }}
        >
          <a
            href="https://www.google.com/maps/place/Quintana+Roo/"
            target="_blank"
            style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: '1rem',
            }}
          >
            <MdLocationPin size={30} style={{ marginRight: '0.25rem' }} />
            Current location: Mexico
          </a>

          <div style={social}>
            <a href="https://www.twitter.com/dominicva" target="_blank">
              <FaTwitterSquare size={36} style={icon} />
            </a>
            <a href="https://www.github.com/dominicva" target="_blank">
              <FaGithubSquare size={36} style={icon} />
            </a>
          </div>
        </div>
      </div>
      <div style={{ ...container, padding: '1rem' }}></div>
    </section>
  );
};

export default Intro;
