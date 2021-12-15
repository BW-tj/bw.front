import React from 'react'

const LocalHospital = ({ 
  size=24
}) => ( 
  <svg viewBox='0 0 24 24' style={{width: size+'px', height: size+'px'}} fill='currentColor'>   
    <path 
      fill='currentColor'
      d='M19 3H5C3.9 3 3.01 3.9 3.01 5L3 19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM18 14H14V18H10V14H6V10H10V6H14V10H18V14Z'
    />
  </svg>
)

export default LocalHospital