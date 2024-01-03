import React from 'react'
import Container from '../Container'
import List from '../List'
import Heading from '../Heading'
import Para from '../Para'
import Image from '../Image'
import bannerimg from "../../assets/bannerModel.jpeg"
import Button from '../Button'

const Banner = () => {
  return (
    <div className='w-full bg-colorHeader'>
        <Container>
            <List className="pb-[140px] pt-[240px]">
                <li className='flex flex-col items-start w-[50%]'>
                    <Heading text="Find The Best Fashion Style For You"/>
                    <Para className="pt-[38px] pb-[76px]" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu, odio pellentesque mattis pulvinar felis. At arcu ornare rhoncus, elementum non viverra. "></Para>
                    <Button text="SHOP NOW"/>
                </li>
                <li>
                   <Image src={bannerimg} className='w-[500px] rounded-bl-[200px]'/>
                </li>
            </List>
        </Container>
    </div>
  )
}

export default Banner