import React from 'react'
import List from './List'
import Heading from './Heading'
import Para from './Para'

const Statistics = ({className}) => {
  return (
    <List className={`bg-colorHeader rounded-[20px] px-[70px] w-[800px] h-[280px] place-items-center ${className}`}>
        <li>
            <Heading text="2010"/>
            <Para text="Founded"/>
        </li>
        <li className='h-[140px] w-px top-1/2 bg-black'></li>
        <li>
            <Heading text="5000+"/>
            <Para text="Product Sold"/>
        </li>
        <li className='h-[140px] w-px top-1/2 bg-black'></li>
        <li>
            <Heading text="4500+"/>
            <Para text="Best Reviews"/>
        </li>
    </List>
  )
}

export default Statistics