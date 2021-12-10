import React from 'react'

const ArrowForward = ({ 
  size=24
}) => ( 
  <svg 
    xmlns='http://www.w3.org/2000/svg' 
    viewBox='0 0 24 24' 
    style={{width: size+'px', height: size+'px'}} 
    fill='currentColor'
  >   
    <path 
      fill='currentColor'
      d='M12 4L10.59 5.41L16.17 11H4V13H16.17L10.59 18.59L12 20L20 12L12 4Z'
    />
  </svg>
)

export default ArrowForward