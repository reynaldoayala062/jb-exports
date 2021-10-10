import React, { useState, useEffect } from 'react'
import {FaBars} from 'react-icons/fa'
import {animateScroll as scroll} from 'react-scroll'
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink, Img, NavBtnCall } from './NavBarElements'


const Navbar = ({ toggle }) => {
   const [scrollNav, setScrollNav] = useState(false);

   const changeNav = () => {
       if(window.scrollY >= 80) {
           setScrollNav(true)
       } else {
           setScrollNav(false)
       }
   };

   useEffect(() => {
       window.addEventListener('scroll', changeNav)
   }, [])

   const toggleHome = () => {
       scroll.scrollToTop();
   }


   return (
   <>
       <Nav scrollNav={scrollNav}>
           <NavbarContainer>
               <NavLogo to='/' onClick={toggleHome}>
                   <Img src={require("../../Images/815215ac5e464208a140f80163598c77.png").default} alt=""/>
               </NavLogo>
               <MobileIcon onClick={toggle}>
                   <FaBars />
               </MobileIcon>
               <NavMenu>
                   <NavItem>
                       <NavLinks to='about' smooth={true} duration={500} spy={true} exact='true' offset={-80}> About </NavLinks>
                   </NavItem>
                   <NavItem>
                       <NavLinks to="brands" smooth={true} duration={500} spy={true} exact='true' offset={-80}> Brands </NavLinks>
                   </NavItem>
                   <NavItem>
                       <NavLinks to="partners" smooth={true} duration={500} spy={true} exact='true' offset={-80}> Parnters </NavLinks>
                   </NavItem>
               </NavMenu>
           </NavbarContainer>
       </Nav>
   </>
   )
}

export default Navbar;

