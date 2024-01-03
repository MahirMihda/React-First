import React from 'react'
import Image from './Image'
import Para from './Para'
import List from './List'

const FooterCard = ({src, name, oldPrice, newPrice, className}) => {
  return (
    <div className={className}>
        <Image src={src} className="h-[420px] w-[360px] rounded-t-[20px]"></Image>
        <div className='bg-white w-[360px] px-[15px]'>
            <Para text={name}/>
            <List>
                <Para text={newPrice}/><Para text={oldPrice} className="text-gray-400"/>
            </List>
        </div>
    </div>
  )
}

export default FooterCard