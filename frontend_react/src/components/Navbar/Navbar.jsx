import React, { useState, useEffect } from 'react';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';

import { client, urlFor } from '../../client';
import './Navbar.scss';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [navbar, setNavbar] = useState([]);

  useEffect(() => {
    const query = '*[_type == "navbar"]';
    client.fetch(query).then((data) => {
      setNavbar(data);
    });
  }, []);
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
      {navbar.map((navbar) => (
        <a href="">
           <img src={urlFor(navbar.logoUrl)} alt={navbar.title} />
        </a>
        
      ))}
      </div>
      <ul className="app__navbar-links">
        {['home', 'about', 'work', 'skills', 'testimonial', 'contact'].map((item) => (
          <li className="app__flex p-text" key={`link-${item}`}>
            <div />
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>

      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setToggle(true)} />

        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: 'easeOut' }}
          >
            <HiX onClick={() => setToggle(false)} />
            <ul>
              {['home', 'about', 'work', 'skills', 'contact'].map((item) => (
                <li key={item}>
                  <a href={`#${item}`} onClick={() => setToggle(false)}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
