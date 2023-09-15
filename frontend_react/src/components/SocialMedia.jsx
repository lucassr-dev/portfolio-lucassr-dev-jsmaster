import React from 'react';
import { BsLinkedin, BsInstagram, BsGithub } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';

const SocialMedia = () => (
  <div className="app__social">
    // eslint-disable-next-line
      <a href="https://www.linkedin.com/in/lucassrjob/">
      <div>
      <BsLinkedin />
      </div>
      </a>
      // eslint-disable-next-line
      <a href="">
        <div>
          <BsGithub />
        </div>
      </a>
      <a href="https://facebook.com/lucassr.job">
      <div>
      <FaFacebookF />
      </div>
      </a>
    
      <a href="https://www.instagram.com/lucassr.job">
      <div>
      <BsInstagram />
      </div>
      </a>
    
  </div>
);

export default SocialMedia;
