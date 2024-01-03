import React from 'react'

const Heading = ({className, text}) => {
  return (
    <div className={`font-styleFrank text-fontHeading font-semibold ${className}`}>{text}</div>
  )
}

export default Heading