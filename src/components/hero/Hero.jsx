import React from 'react'
import '../hero/Hero.css'
import { Container, DefaultButton } from '../../utils/Utils'
import my_image from '../../images/my__image.jpg'
import { Link } from 'react-scroll';


const Hero = () => {
  return (
    <div class='hero' id='hero'>
      <Container>
        <div className="hero__content">
          <img src={my_image} alt="man__image" className='hero__content-img' />
          <h2 className='hero___content-title'>Hi, I'm Mirodil &#128075;</h2>
          <h1 className='hero___content-subtitle'> <span>building</span>  modern websetis <br /> and web apilications</h1>
          <Link to="contact"> <DefaultButton text='Connect with me'></DefaultButton></Link>
        </div>
      </Container>
    </div>
  )
}

export default Hero