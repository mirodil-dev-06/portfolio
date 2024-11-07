import React, { useState, useEffect } from 'react';
import '../src/App.css';
import About from './components/about/About';
import Blog from './components/blog/Blog';
import Contact1 from './components/contact1/Contact1';
import Footer from './components/footer/Footer';
import Hero from './components/hero/Hero';
import Loader from './components/loader/Loader';
import Nav from './components/nav/Nav';
import Portfolio from './components/portfolio/Portfolio';
import ScrollProgressBar from './components/scrollProgressBar/ScrollProgressBar';
import ScrollToTopButton from './components/scrollToTopButton/ScrollToTopButton';
import TimeLine from './components/timeLine/TimeLine';

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
      {!isLoading && (
        <div>
          <ScrollProgressBar />
          <Nav />
          <Hero />
          <About />
          <TimeLine />
          <Portfolio />
          <Contact1 />
          <Blog />
          <ScrollToTopButton />
          <Footer />
        </div>
      )}
    </div>
  );
};

export default App;
