import { FaGithubSquare, FaTwitterSquare } from 'react-icons/fa';
import { MdLocationPin } from 'react-icons/md';
import { BsCodeSlash } from 'react-icons/bs';
import Image from 'next/image';
import { header, avatar, h1, social, container, icon } from './styles';
import { primary, secondary } from '../colors/';

const Intro = ({ name }) => {
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
          <h1 style={h1}>Dom van Almsick</h1>
        </header>
        <p>I enjoy teaching, learning, and writing JavaScript.</p>
        <p>
          Outside coding, the things I care about mostly relate to effective
          altruism and the long-term future. How might we engineer our way
          towards utopia? We will have to define it along the way, of couse.
        </p>
        <p>
          I am not yet certain what I will share here. Expect miscellaneous
          resources, ideas, and projects.
        </p>
        <p>
          In the meantime, check out my GitHub / Twitter, or book a pair
          programming session with me from the links below.
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
