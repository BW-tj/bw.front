import React from 'react'

const UnfoldMore = ({ 
  size=24
}) => ( 
  <svg viewBox='0 0 24 24' style={{width: size+'px', height: size+'px'}} fill='currentColor'>   
    <path 
      fill='currentColor'
      fillRule='evenodd' clipRule='evenodd' 
      d='M11.9999 5.83L15.1699 9L16.5799 7.59L11.9999 3L7.40991 7.59L8.82991 9L11.9999 5.83ZM11.9999 18.17L8.82991 15L7.41991 16.41L11.9999 21L16.5899 16.41L15.1699 15L11.9999 18.17Z'
    />
  </svg>
)

export default UnfoldMore