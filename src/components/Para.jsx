import React from 'react'

const Para = ({className, text}) => {
  return (
    <div className={`font-stylePoppins text-fontText font-medium ${className}`}>{text}</div>
  )
}

export default Para