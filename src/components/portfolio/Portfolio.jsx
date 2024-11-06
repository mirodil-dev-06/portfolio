import React from 'react';
import { Container } from '../../utils/Utils';
import '../portfolio/Portfolio.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import portfolio1 from '../../images/portfolio1.PNG'
import portfolio2 from '../../images/portfolio2.PNG'
import portfolio3 from '../../images/portfolio3.PNG'

const Portfolio = () => {
  const portfolio = [
    {
      title: "Nike Clone",
      desc: 'In this project I perfected my knowledge of HTML, CSS, JavaScript',
      skills: 'HTML, CSS, JavaScript',
      link: 'https://nikec1one.netlify.app',
      img: portfolio1
    },
    {
      title: "Boostrap Project",
      desc: 'I learned Boostrap, one of the popular CSS frameworks, while building this website.',
      skills: 'HTML, CSS, Boostrap',
      link: 'https://bootstraployiha.netlify.app',
      img: portfolio2
    },
    {
      title: "HairCut Web Site",
      desc: 'While learning react js I built this project and additionally learned Readux and i18next ',
      skills: 'React, i18Next, Redux CSS, ',
      link: 'https://haircutuz.netlify.app',
      img: portfolio3
    },
  ];

  return (
    <section className="portfolio" id='portfolio'>
      <Container>
        <h1 className="portfolio__title">
          <span>My</span> Portfolio
        </h1>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          {portfolio.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="portfolio__slide">
                <img src={item.img} alt={`Portfolio ${index}`} />
                <div className="portfolio__slide-item">
                  <a href={item.link} className='portfolio__item-title' target='_blank'>{item.title}</a>
                  <h3 className='portfolio__item-subtitle'>{item.desc}</h3>
                  <h4 className='portfolio__item-skills'>Technologies used: <b>{item.skills}</b></h4>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </section>
  )
}

export default Portfolio