import React from 'react'
import '../timeLine/TimeLine.css'
import { Container } from '../../utils/Utils'

const Experince = () => {
    const education = [
        {
            company: 'Weather',
            position: 'Frontend & Design',
            duration: '04/2024 - 04/2024',
            description: 'In this project I perfected my knowledge of HTML, CSS, JavaScript',
            link: 'https://reactobhavoo.netlify.app',

        },
        {
            company: 'Boostrap Project',
            position: 'Frontend',
            duration: '07/2023 - 08/2023',
            description: 'I learned Boostrap, one of the popular CSS frameworks, while building this website. In this project, I learned to adapt websites for mobile devices',
            link: 'https://bootstraployiha.netlify.app',

        },
        {
            company: 'HairCut Web Site',
            position: 'Frontend',
            duration: '11/2024 - 12/2024',
            description: 'While learning react js I built this project and additionally learned Readux and i18next',
            link: 'https://haircutuz.netlify.app',
        }
    ];
    return (
        <>
            <Container>
                {/* <h2 class="title">Education<span class="animate" style="--i:1;"></span></h2> */}
                <div className="timeline__box">
                    {education.map((edu, index) => (
                        <div key={index} className="timeline__content">
                            <div className="timeline__item">
                                <a href={edu.link} target='_blank' className='timeline__item-title'>{edu.company}</a>
                                <h3 className='timeline__item-subtitle'>{edu.position}</h3>
                                <p className='timeline__item-year'>{edu.duration}</p>
                                <p className='timeline__item-desc'>{edu.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </>
    )
}

export default Experince