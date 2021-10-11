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
                        {/* <SocialIcons>
                            <SocialIconLink href="//www.facebook.com/profile.php?id=100004277175364" target="_blank" aria-label="Facebook">
                                <FaFacebook/>
                            </SocialIconLink>
                            <SocialIconLink href="//www.instagram.com/reytalkstech/" target="_blank" aria-label="Instagram">
                                <FaInstagram/>
                            </SocialIconLink>
                            <SocialIconLink href="//www.youtube.com/channel/UClF70456tB11P5BP5zxNfHw" target="_blank" aria-label="Youtube">
                                <FaYoutube/>
                            </SocialIconLink>
                            <SocialIconLink href="//www.linkedin.com/in/reynaldo-ayala-1b18b172/" target="_blank" aria-label="LinkedIn">
                                <FaLinkedin/>
                            </SocialIconLink>
                            <SocialIconLink href="//www.github.com/reynaldoayala062" target="_blank" aria-label="LinkedIn">
                                <FaGithub/>
                            </SocialIconLink>
                        </SocialIcons> */}
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
            
        </FooterContainer>
    )
}

export default Footer