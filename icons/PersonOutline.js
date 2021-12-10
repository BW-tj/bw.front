import React from 'react'

const PersonOutline = ({ 
  size=24
}) => ( 
  <svg viewBox='0 0 24 24' style={{width: size+'px', height: size+'px'}} fill='currentColor'>   
    <path 
      fill='currentColor'
      d='M12 4.88332C13.3533 4.88332 14.45 5.97999 14.45 7.33332C14.45 8.68666 13.3533 9.78332 12 9.78332C10.6466 9.78332 9.54996 8.68666 9.54996 7.33332C9.54996 5.97999 10.6466 4.88332 12 4.88332ZM12 15.3833C15.465 15.3833 19.1166 17.0867 19.1166 17.8333V19.1167H4.88329V17.8333C4.88329 17.0867 8.53496 15.3833 12 15.3833ZM12 2.66666C9.42163 2.66666 7.33329 4.75499 7.33329 7.33332C7.33329 9.91166 9.42163 12 12 12C14.5783 12 16.6666 9.91166 16.6666 7.33332C16.6666 4.75499 14.5783 2.66666 12 2.66666ZM12 13.1667C8.88496 13.1667 2.66663 14.73 2.66663 17.8333V21.3333H21.3333V17.8333C21.3333 14.73 15.115 13.1667 12 13.1667Z'
    />
  </svg>
)

export default PersonOutline