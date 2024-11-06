import React from 'react';
import "../utils/Utils.css";

// ------ Container ------
const Container = ({children}) => {
    return (
      <div className='container'>
        {children}
      </div>
    )
  }

// ------ DefaultButton -------
const DefaultButton = ({text}) => {
  return (
    <button className='default__btn'>
      {text}
    </button>
  )
}

export { DefaultButton, Container }