import { FaGithubSquare, FaTwitterSquare } from 'react-icons/fa';
import { MdLocationPin } from 'react-icons/md';
import { BsCodeSlash } from 'react-icons/bs';
import Image from 'next/image';
import { header, avatar, h1, social, container, icon } from './styles';
import { primary, secondary } from '../colors/';

const name = 'Dom van Almsick';

const Intro = () => {
  return (
    <section>
      <div>
        <header style={header}>
          <Image
            priority
            src="/images/profile.png"
            alt={name}
            width={56}
            height={56}
            style={avatar}
          />
          <h1 style={h1}>{name}</h1>
        </header>
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
              <BsCodeSlash
                size="31.5px"
                style={{
                  ...icon,
                  padding: '3px',
                  borderRadius: '4px',
                  color: primary,
                  backgroundColor: secondary,
                }}
              />
            </a>
            <a href="https://www.twitter.com/dominicva" target="_blank">
              <FaTwitterSquare size={36} style={icon} />
            </a>
            <a href="https://www.github.com/dominicva" target="_blank">
              <FaGithubSquare size={36} style={icon} />
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
