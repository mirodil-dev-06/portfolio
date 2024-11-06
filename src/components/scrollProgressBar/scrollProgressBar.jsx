import React, { useEffect, useState } from 'react'
import '../scrollProgressBar/ScrollProgressBar.css'

const ScrollProgressBar = () => {
    const [scrollTop, setScrollTop] = useState(0);
    const onScroll = () =>{
        const winScroll = document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        setScrollTop(scrolled);
    }
    useEffect(() =>{
        window.addEventListener("scroll", onScroll)
        return () => window.removeEventListener("scroll", onScroll)
    },[])
  return (
    <div className='progressbar__item'>
        <div className="progressbar__item-style" style={{width: `${scrollTop}%`}}></div>
    </div>
  )
}

export default ScrollProgressBar