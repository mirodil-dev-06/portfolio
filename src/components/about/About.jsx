import React from 'react';
import { Container, DefaultButton } from '../../utils/Utils';
import '../about/About.css';
import my_image from '../../images/my__image.jpg';
import { FaHtml5, FaCss3Alt, FaSass, FaBootstrap, FaReact, FaGitSquare } from 'react-icons/fa';
import { SiRedux, SiJavascript, SiTailwindcss, SiChakraui } from 'react-icons/si';
import cvFile from '../../../public/reume.pdf';

const skills = [
  { id: 1, icon: FaHtml5 },
  { id: 2, icon: FaCss3Alt },
  { id: 3, icon: FaSass },
  { id: 4, icon: FaBootstrap },
  { id: 5, icon: FaReact },
  { id: 6, icon: FaGitSquare },
  { id: 7, icon: SiRedux },
  { id: 8, icon: SiJavascript },
  { id: 9, icon: SiTailwindcss },
  { id: 10, icon: SiChakraui },
];

const About = () => {
  return (
    <div className='about' id='about'>
      <Container>
        <div className="about__content">
          <h1 className="about__content-title">about <span>me</span></h1>
          <p className="about__content-subtitle">
            I'm a passionate frontend developer with a keen eye for creating engaging and responsive user interfaces. Proficient in HTML, CSS, JavaScript, and React js, I thrive on turning design concepts into interactive and visually appealing web experiences. Constantly evolving with the latest web technologies, I aim to deliver seamless and intuitive interfaces that enhance user satisfaction. Let's build user-centric and dynamic websites together!
          </p>
          <div className="about__content-box">
            <div className="about__content-box-left">
              <img src={my_image} alt="Man" />
              <h5><span>Full Name:</span> Mirodil Mavlonov</h5>
              <h5><span>Age:</span> 18 Years</h5>
              <h5><span>Phone:</span> +998 93 421 16 23</h5>
              <h5><span>Address:</span> Kashkadarya / Uzbekistan</h5>
              <h5><span>Expertise:</span> Frontend developer</h5>
              <h5><span>Email:</span> mirodil.mavlonov.2023@gmail.com</h5>
              <a href={cvFile} download="Resume">
                <DefaultButton text='Download CV' />
              </a>
            </div>
            <div className="about__content-box-right">
              <h1>Skills</h1>
              <ul>
                {skills.map(({ id, icon: Icon }) => (
                  <li key={id}>
                    <Icon size={30} />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default About;
