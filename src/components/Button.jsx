import React from 'react'

const Button = ({className, text}) => {
  return (
    <div className={`rounded-xl shadow-md px-[90px] py-[25px] text-white bg-black hover:text-black hover:bg-colorButtonHover font-stylePoppins text-fontText font-semibold duration-500 ${className}`}>
        <a href="#">{text}</a>
    </div>
  )
}

export default Button