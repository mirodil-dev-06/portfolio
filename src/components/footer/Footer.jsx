import React from 'react'
import { Container } from '../../utils/Utils'
import '../footer/Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
        <Container>
            <div className="footer__content">
                <p className='footer__content-text'>Copyright © 2024 All rights reserved | Develop by <a href="#" target='_blank'>Mirodil Mavlonov</a></p>
            </div>
        </Container>
    </div>
  )
}

export default Footer