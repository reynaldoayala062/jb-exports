import React from 'react' 
import {FaFacebook,FaInstagram, FaYoutube, FaTwitter, FaLinkedin, FaGithub, FaArrowUp } from 'react-icons/fa'
import {animateScroll as scroll} from 'react-scroll'
import { FooterContainer, FooterWrap, FooterLinksContainer, FooterLinksWrapper, FooterLinkItems, FooterLinkTitle, FooterLink, SocialMedia, SocialMediaWrap, SocialLogo, WebsiteRights, SocialIcons, SocialIconLink, UpButton} from './FooterElements'

const Footer = () => {

    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return (
        <FooterContainer>
            <FooterWrap>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='/' onClick={toggleHome}> <UpButton> Go to the top</UpButton>
                        </SocialLogo>
                        <WebsiteRights> ©{new Date().getFullYear()} JB Export All Rights Reserved</WebsiteRights>
                        <WebsiteRights> Created by Rey Talks Tech</WebsiteRights>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
            
        </FooterContainer>
    )
}

export default Footer