import React from "react"

const ShoppingCart = ({ 
  size=24
}) => ( 
  <svg viewBox="0 0 24 24" style={{width: size+"px", height: size+"px"}} fill="currentColor">   
    <path 
      fill="currentColor"
      fillRule="evenodd" clipRule="evenodd" 
      d="M5.01 20C5.01 18.9 5.9 18 7 18C8.1 18 9 18.9 9 20C9 21.1 8.1 22 7 22C5.9 22 5.01 21.1 5.01 20ZM1 4V2H4.27L5.21 4H20C20.55 4 21 4.45 21 5C21 5.17 20.96 5.34 20.88 5.48L17.3 11.97C16.96 12.59 16.3 13 15.55 13H8.1L7.2 14.63L7.17 14.75C7.17 14.89 7.28 15 7.42 15H19V17H7C5.9 17 5 16.1 5 15C5 14.65 5.09 14.32 5.25 14.04L6.6 11.59L3 4H1ZM15.01 20C15.01 18.9 15.9 18 17 18C18.1 18 19 18.9 19 20C19 21.1 18.1 22 17 22C15.9 22 15.01 21.1 15.01 20ZM8.5 11L6 5.63129H18.6208L15.55 11H8.5Z"
    />
  </svg>
)

export default ShoppingCart