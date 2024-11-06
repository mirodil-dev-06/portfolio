import React, { useState } from 'react';
import { Container } from '../../utils/Utils';
import '../sideBar/SideBar.css';
import { Link } from 'react-scroll';
import {
  FaTelegram,
  FaInstagram,
  FaLinkedin,
  FaPhone,
  FaGithub,
  FaTimes
} from 'react-icons/fa';

const SideBar = ({ toggleSidebar }) => {

  const closeSidebar = () => {
    toggleSidebar(false);
  };

  return (
    <div className='sidebar'>
      <Container>
        <FaTimes className='sidebar__close' onClick={closeSidebar} />

        <div className="sidebar__content">
          <ul className='sidebar__content-menu'>
            <li className="sidebar__content-menu__link">
              <Link to="hero" smooth={true} duration={500} onClick={closeSidebar}>
                Home
              </Link>
            </li>
            <li className="sidebar__content-menu__link">
              <Link to="about" smooth={true} duration={500} onClick={closeSidebar}>
                About
              </Link>
            </li>
            <li className="sidebar__content-menu__link">
              <Link to="edu" smooth={true} duration={500} onClick={closeSidebar}>
                Resume
              </Link>
            </li>
            <li className="sidebar__content-menu__link">
              <Link to="portfolio" smooth={true} duration={500} onClick={closeSidebar}>
                Portfoilo
              </Link>
            </li>
            <li className="sidebar__content-menu__link">
              <Link to="contact" smooth={true} duration={500} onClick={closeSidebar}>
                Contact
              </Link>
            </li>
          </ul>
          <ul className="sidebar__content-icon">
            <li className='sidebar__content-icon__item'>
              <a href="http://t.me/mirodil_0623" target='_blank'>
                <FaTelegram />
              </a>
            </li>
            <li className='sidebar__content-icon__item'>
              <a href="https://www.instagram.com/mirodil_life/" target='_blank'>
                <FaInstagram />
              </a>
            </li>
            <li className='sidebar__content-icon__item'>
              <a href="https://www.linkedin.com/in/mirodil-mavlonov-34180128b/" target='_blank'>
                <FaLinkedin />
              </a>
            </li>
            <li className='sidebar__content-icon__item'>
              <a href="tel:934211623" target='_blank'>
                <FaPhone />
              </a>
            </li>
            <li className='sidebar__content-icon__item'>
              <a href="https://github.com/mirodil-dev-06" target='_blank'>
                <FaGithub />
              </a>
            </li>
          </ul>
        </div>
      </Container>
    </div>
  );
};

export default SideBar;