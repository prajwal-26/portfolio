import React from 'react';
import './SocialIcons.css';
import { FaGithub, FaLinkedin, FaXTwitter } from 'react-icons/fa6';

function SocialIcons() {
  return (
    <div className="social-icons">
      <a href="https://github.com/prajwal-26" target="_blank" rel="noreferrer">
        <FaGithub />
      </a>
      <a href="https://www.linkedin.com/in/prajwal2608/" target="_blank" rel="noreferrer">
        <FaLinkedin />
      </a>
      <a href="https://x.com/_prajwalpatil" target="_blank" rel="noreferrer">
        <FaXTwitter />
      </a>
    </div>
  );
}

export default SocialIcons;
