import { FaCode, FaTwitter, FaGithub } from 'react-icons/fa';
import { MdLocationPin } from 'react-icons/md';
import Image from 'next/image';
import {
  avatar,
  h1,
  container,
  icon,
  socialIcon,
  location,
  bio,
  bioP,
} from './styles';

const firstName = 'Dom';
const lastName = 'van Almsick';
const fullName = `${firstName} ${lastName}`;
const imageTitle = 'cosmic microwave background';
const currentLocation = 'Mexico';

const Intro = () => {
  return (
    <section>
      <div>
        <header style={container}>
          <Image
            priority
            src="/images/cmb.png"
            alt={imageTitle}
            width={248}
            height={248}
            style={avatar}
          />
          <h1 style={h1}>{fullName}</h1>
        </header>
        <div style={container}>
          <a
            href="https://www.google.com/maps/place/Quintana+Roo/"
            target="_blank"
            style={location}
          >
            <MdLocationPin size={30} style={icon} />
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
            >
              <FaCode size={32} style={socialIcon} />
            </a>
            <a href="https://www.twitter.com/dominicva" target="_blank">
              <FaTwitter size={32} style={socialIcon} />
            </a>
            <a href="https://www.github.com/dominicva" target="_blank">
              <FaGithub size={32} style={{ ...socialIcon, marginRight: 0 }} />
            </a>
          </div>
        </div>
        <div id="bio" style={bio}>
          <p style={bioP}>
            I am a full-stack <b>JavaScript enthusiast and teacher</b>. Click
            the first icon above to schedule a (free) pair programming session.
          </p>
          <p style={bioP}>
            Other things I care about mostly relate to{' '}
            <a href="https://www.effectivealtruism.org/" target="_blank">
              <b>effective altruism</b>
            </a>{' '}
            and the long-term future.
          </p>
        </div>
      </div>
      <div style={{ ...container, padding: '1rem' }}></div>
    </section>
  );
};

export default Intro;

// <!-- Calendly badge widget begin -->
// <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet">
// <script src="https://assets.calendly.com/assets/external/widget.js" type="text/javascript" async></script>
// <script type="text/javascript">window.onload = function() { Calendly.initBadgeWidget({ url: 'https://calendly.com/dominicvana', text: 'Schedule time with me', color: '#0069ff', textColor: '#ffffff', branding: true }); }</script>
// <!-- Calendly badge widget end --></link>
