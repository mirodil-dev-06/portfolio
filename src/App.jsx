import React, { useState, useEffect } from 'react'
import '../src/App.css'
import About from './components/about/About'
import Blog from './components/blog/Blog'
import Contact1 from './components/contact1/Contact1'
import Footer from './components/footer/Footer'
import Hero from './components/hero/Hero'
import Loader from './components/loader/Loader'
import Nav from './components/nav/Nav'
import Portfolio from './components/portfolio/Portfolio'
import ScrollProgressBar from './components/scrollProgressBar/scrollProgressBar'
import ScrollToTopButton from './components/scrollToTopButton/ScrollToTopButton'
import TimeLine from './components/timeLine/TimeLine'

const App = () => {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);


  return (
    <div>
     {isLoading && <Loader />}
        <div>
          <ScrollProgressBar></ScrollProgressBar>
          <Nav></Nav>
          <Hero></Hero>
          <About></About>
          <TimeLine></TimeLine>
          <Portfolio></Portfolio>
          <Contact1></Contact1>
          <Blog></Blog>
          <ScrollToTopButton></ScrollToTopButton>
          <Footer></Footer>
        </div>
    </div>
  )
}

export default App