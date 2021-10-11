import React from 'react' 
import {animateScroll as scroll} from 'react-scroll'
import { FooterContainer, FooterWrap, SocialMedia, SocialMediaWrap, SocialLogo, WebsiteRights} from './FooterElements'
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
                <BsFillArrowUpSquareFill color="red" size="2em"/>
            </SocialLogo>
        </FooterContainer>
    )
}

export default Footer