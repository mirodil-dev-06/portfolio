import React, { useState } from 'react';
import '../nav/Nav.css';
import { Container } from '../../utils/Utils';
import logo from '../../images/logo.jpg';
import { FaTelegram, FaInstagram, FaLinkedin, FaPhone, FaGithub } from 'react-icons/fa';
import { Link } from 'react-scroll';
import SideBar from '../sideBar/SideBar';

const Nav = () => {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSideBarOpen(!isSideBarOpen);
  };

  return (
    <div className='nav'>
      <Container>
        <div className="nav__content">
          <div className="nav__logo">
            <img src={logo} alt="logo" />
          </div>
          <ul className="nav__item">
            <li className='nav__item-icon'><a href="http://t.me/mirodil_0623" target='_blank'><FaTelegram /></a></li>
            <li className='nav__item-icon'><a href="https://www.instagram.com/mirodil_life/" target='_blank'><FaInstagram /></a></li>
            <li className='nav__item-icon'><a href="https://www.linkedin.com/in/mirodil-mavlonov-34180128b/" target='_blank'><FaLinkedin /></a></li>
            <li className='nav__item-icon'><a href="tel:934211623" target='_blank'><FaPhone /></a></li>
            <li className='nav__item-icon'><a href="https://github.com/mirodil-dev-06" target='_blank'><FaGithub /></a></li>
          </ul>
          <ul className='nav__item'>
            <li className="nav__item-menu">
              <Link to="hero">Home</Link>
            </li>
            <li className="nav__item-menu">
              <Link to="about">About</Link>
            </li>
            <li className="nav__item-menu">
              <Link to="edu">Resume</Link>
            </li>
            <li className="nav__item-menu">
              <Link to="portfolio">Portfolio</Link>
            </li>
            <li className="nav__item-menu">
              <Link to="contact">Contact</Link>
            </li>
          </ul>
          <button className="nav__content-bars" onClick={toggleSidebar}>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </button>
        </div>
        {isSideBarOpen && <SideBar toggleSidebar={toggleSidebar} />}
      </Container>
    </div>
  );
};

export default Nav;