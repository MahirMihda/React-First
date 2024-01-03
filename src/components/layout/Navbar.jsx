import React from 'react'
import Container from '../Container'
import List from '../List'
import Button from '../Button'

const Navbar = () => {
  return (
    <nav className='fixed bg-colorNavbar w-full font-stylePoppins text-fontText font-semibold z-50'>
      <Container className={"max-w-navbarWidth"}>
        <List className="py-[50px] place-items-center">
          <li className='text-fontLogo'>Fashion</li>
          <li>
            <List className="space-x-[60px]">
              <li><a href="#">Men</a></li>
              <li><a href="#">Woman</a></li>
              <li><a href="#">Kids</a></li>
              <li><a href="#">Collection</a></li>
              <li><a href="#">Trends</a></li>
           </List>
          </li>
          <li>
            <List className="space-x-[10px]">
              <li>
                <Button text="Sign Up" className="!px-[10px] !py-[10px] bg-colorHeader text-black hover:bg-colorButtonHover"/>
              </li>
              <li>
                <Button text="Login" className="!px-[10px] !py-[10px] bg-colorHeader text-black hover:bg-colorButtonHover"/>
              </li>
            </List>
          </li>
        </List>
      </Container>
    </nav>
  )
}

export default Navbar