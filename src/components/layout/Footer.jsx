import React from 'react'
import FooterCard from '../FooterCard'
import img1 from '../../assets/blackWhiteModel.jpeg'
import img2 from '../../assets/skateboard.jpeg'
import List from '../List'
import Heading from '../Heading'
import Para from '../Para'
import Button from '../Button'
import Container from '../Container'

const Footer = () => {
  return (
    <div className='bg-colorFooter pt-[60px] pb-[190px]'>
        <Container>
        <List>
            <li>
                    <Heading text="Find The Best Fashion Style For You"/>
                    <Para className="pt-[38px] pb-[76px]" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu, odio pellentesque mattis pulvinar felis. At arcu ornare rhoncus, elementum non viverra. "></Para>
                    <Button text="Learn More"/>
            </li>
            <li>
              <FooterCard src={img1} name="Sweater Shirt" oldPrice="$45.99" newPrice="$35.99" className="px-[30px]"/>
            </li>
            <li>
               <FooterCard src={img2} name="Pant Fashion" oldPrice="$55" newPrice="$44.99"/>
            </li>
        </List>
        </Container>
    </div>
  )
}
{/* <FooterCard src={img1} name="Sweater Shirt" oldPrice="$45.99" newPrice="$35.99"/> */}
export default Footer