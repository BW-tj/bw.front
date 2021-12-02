import React from 'react'
import styled from 'styled-components'
import SvgTemplate from './SvgTemplate'

const Svg = styled(SvgTemplate)` 
  width: ${props => props.size}px; 
  height: ${props => props.size}px;
`

const Menu = ({ 
  size=24
}) => ( 
  <svg viewBox='0 0 24 24' size={size} fill='currentColor'>   
    <path 
      fill='currentColor'
      d="M3 17.5C3 17.7761 3.22386 18 3.5 18H20.5C20.7761 18 21 17.7761 21 17.5V16.5C21 16.2239 20.7761 16 20.5 16H3.5C3.22386 16 3 16.2239 3 16.5V17.5ZM3 12.5C3 12.7761 3.22386 13 3.5 13H20.5C20.7761 13 21 12.7761 21 12.5V11.5C21 11.2239 20.7761 11 20.5 11H3.5C3.22386 11 3 11.2239 3 11.5V12.5ZM3.5 6C3.22386 6 3 6.22386 3 6.5V7.5C3 7.77614 3.22386 8 3.5 8H20.5C20.7761 8 21 7.77614 21 7.5V6.5C21 6.22386 20.7761 6 20.5 6H3.5Z"
    />
  </svg>
)

export default Menu