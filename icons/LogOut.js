import React from 'react'

const LogOut = ({ 
  size=24
}) => ( 
  <svg viewBox='0 0 24 24' style={{width: size+'px', height: size+'px'}} fill='currentColor'>   
    <path 
      fill='currentColor'
      d='M9 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H9'
    />
    <path 
      fill='currentColor'
      d='M16 17L21 12L16 7'
    />
    <path 
      fill='currentColor'
      d='M21 12H9'
    />
  </svg>
)

export default LogOut