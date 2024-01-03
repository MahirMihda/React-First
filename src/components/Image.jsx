import React from 'react'

const Image = ({className,src}) => {
  return (
    <img src={src} alt="Image Loading" className={`object-fill ${className}`}/>
  )
}

export default Image