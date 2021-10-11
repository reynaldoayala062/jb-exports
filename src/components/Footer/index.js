import React from 'react' 
import {FaFacebook,FaInstagram, FaYoutube, FaTwitter, FaLinkedin, FaGithub, FaArrowUp } from 'react-icons/fa'
import {animateScroll as scroll} from 'react-scroll'
import { FooterContainer, FooterWrap, FooterLinksContainer, FooterLinksWrapper, FooterLinkItems, FooterLinkTitle, FooterLink, SocialMedia, SocialMediaWrap, SocialLogo, WebsiteRights, SocialIcons, SocialIconLink, UpButton} from './FooterElements'
import {BsFillArrowUpSquareFill} from 'react-icons/bs'

const Footer = () => {

    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return (
        <FooterContainer>
            <FooterWrap>
                <SocialMedia>
                    <SocialMediaWrap>
                        <WebsiteRights> ©{new Date().getFullYear()} JB Export All Rights Reserved</WebsiteRights>
                        <WebsiteRights> Created by Rey Talks Tech</WebsiteRights>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
            <SocialLogo to='/' onClick={toggleHome}> 
            <BsFillArrowUpSquareFill color="red" size="1.5em"/>
                        </SocialLogo>
        </FooterContainer>
    )
}

export default Footer