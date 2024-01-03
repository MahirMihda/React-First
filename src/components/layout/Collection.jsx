import React from 'react'
import Container from '../Container'
import Heading from '../Heading'
import List from '../List'
import CollectionCard from '../CollectionCard'
import img1 from '../../assets/sweater.jpeg'
import img2 from '../../assets/jeans.jpeg'
import img3 from '../../assets/shoe.jpeg'
import img4 from '../../assets/emmaStone.jpeg'
import Statistics from '../Statistics'
import Image from '../Image'
import Para from '../Para'

const Collection = () => {
  return (
    <div className=''>
        <Container className="pt-[220px] pb-[340px] relative">
            <Statistics className="absolute bottom-[140px] right-0"></Statistics>
            <Heading text='NEW COLLECTION' className="text-center"/>
            <List className="">
                <CollectionCard src={img1} text="Sweater"/>
                <CollectionCard src={img2} text="Jeans"/>
                <CollectionCard src={img3} text="Baskets"/>
            </List>
            <List className="pt-[240px]">
                <Image src={img4} className="h-[600px] w-[660px] rounded-tl-[150px] z-40"/>
                <div className='pl-[124px] pr-[60px]'>
                    <Heading text="Best Fashion Since 2010"/>
                    <Para text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu, odio pellentesque mattis pulvinar felis. At arcu ornare rhoncus, elementum non viverra. "/>
                </div>
            </List>
        </Container>
    </div>
  )
}

export default Collection