import React from 'react';
import { FaGithub, FaLinkedin, FaGooglePlay } from 'react-icons/fa';

type IconsProps = {
  textEnter: () => void;
  textLeave: () => void;
  linkedinEnter: () => void;
};

const Icons: React.FC<IconsProps> = ({ textEnter, textLeave, linkedinEnter }) => {
  return (
    <>
      <div className="text-white absolute top-0 right-0 mt-4 mr-4">
        <a
          onMouseEnter={textEnter}
          onMouseLeave={textLeave}
          href="https://github.com/kaannbass"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub size={45} />
        </a>
      </div>

      <div className="text-white absolute top-0 right-20 mt-4 mr-4">
        <a
          onMouseEnter={linkedinEnter}
          onMouseLeave={textLeave}
          href="https://www.linkedin.com/in/kaannbass"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin size={45} />
        </a>
      </div>

      <div className="text-white absolute top-0 right-40 mt-4 mr-4">
        <a
          onMouseEnter={textEnter}
          onMouseLeave={textLeave}
          href="https://play.google.com/store/apps/dev?id=8223178721443144128"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGooglePlay size={45} />
        </a>
      </div>
    </>
  );
};

export default Icons;
