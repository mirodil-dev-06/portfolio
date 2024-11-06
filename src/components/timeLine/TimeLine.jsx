import React from 'react'
import { Container } from '../../utils/Utils'
import Education from '../education/Education'
import Experince from '../experince/Experince'
import '../timeLine/TimeLine.css'

const TimeLine = () => {
    return (
        <Container>
            <section className='timeline' id='edu'>
                <h1 className='timeline__title'><span>My</span> Resume</h1>
                <div className="timeline__row">
                    <div className="timeline__column">
                        <h2 class="timeline__column-text">Education</h2>
                        <Education></Education>
                    </div>
                    <div className="timeline__column">
                        <h2 class="timeline__column-text">Experince</h2>
                        <Experince></Experince>

                    </div>
                </div>
            </section>
        </Container>
    )
}

export default TimeLine