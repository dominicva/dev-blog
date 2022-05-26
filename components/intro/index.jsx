import { FaGithubSquare, FaTwitterSquare } from 'react-icons/fa';
import { MdLocationPin } from 'react-icons/md';
import { BsCodeSlash } from 'react-icons/bs';
import Image from 'next/image';
import {
  avatar,
  h1,
  social,
  container,
  socialIcon,
  location,
  locationIcon,
  linksSection,
  codeIcon,
} from './styles';

const firstName = 'Dom';
const lastName = 'van Almsick';
const fullName = `${firstName} ${lastName}`;
const imageTitle = 'cosmic microwave background';

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
        <div style={linksSection}>
          <a
            href="https://www.google.com/maps/place/Quintana+Roo/"
            target="_blank"
            style={location}
          >
            <MdLocationPin size={30} style={locationIcon} />
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
              <span style={{ marginLeft: '0.25rem' }}>Mexico</span>
            </div>
          </a>

          <div id="social" style={social}>
            <a
              href="https://calendly.com/dominicvana/pair-programming"
              target="_blank"
            >
              <BsCodeSlash size="31.5px" style={codeIcon} />
            </a>
            <a href="https://www.twitter.com/dominicva" target="_blank">
              <FaTwitterSquare size={36} style={socialIcon} />
            </a>
            <a href="https://www.github.com/dominicva" target="_blank">
              <FaGithubSquare size={36} style={socialIcon} />
            </a>
          </div>
        </div>
        <p>I enjoy teaching, learning, and writing JavaScript.</p>
        <p>
          Other things I care about mostly relate to{' '}
          <a href="https://www.effectivealtruism.org/" target="_blank">
            effective altruism
          </a>{' '}
          and the long-term future.
        </p>
        <p>
          I am not certain what I will share here. Expect miscellaneous
          resources, ideas, and projects that inspire me.
        </p>
        <p>
          For now, by clicking the left-most icon above you can schedule a pair
          programming session with me. Booking takes about 5 seconds. If you are
          interested, don't be shy!
        </p>
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
