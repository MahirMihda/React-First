import React from 'react'
import Image from './Image'
import Para from './Para'
const CollectionCard = ({className,src,text}) => {
  return (
    <div className={`w-[350px] h-[400px] ${className} relative`}>
        <Image className="rounded-[20px]" src={src}/>
        <Para text={text} className="absolute left-[50%] translate-x-[-50%] bg-white top-[300px] px-[108px] py-[10px] rounded-[20px]"/>
    </div>
  )
}

export default CollectionCard