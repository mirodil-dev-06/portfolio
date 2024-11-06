import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 50) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {isVisible && (
        <button
          style={{
            position: 'fixed',
            bottom: '20px',
            right: '20px',
            padding: '15px',
            backgroundColor: '#1c1b29',
            color: '#0cb653',
            fontSize: '20px',
            border: '2px solid #0cb653',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
          onClick={scrollToTop}
        >
          <FaArrowUp/>
        </button>
      )}
    </>
  );
};

export default ScrollToTopButton;