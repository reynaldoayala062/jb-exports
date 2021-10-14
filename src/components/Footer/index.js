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
                        <WebsiteRights href="https://www.google.com/search?q=jb+exports&rlz=1C5CHFA_enUS895US895&oq=jb+exports&aqs=chrome..69i57j0i512l2j69i61l2j69i60.4967j0j7&sourceid=chrome&ie=UTF-8" target="_blank" > ©{new Date().getFullYear()} JB Export All Rights Reserved</WebsiteRights>
                        <WebsiteRights href="https://www.reyayalaportfolio.com/" target="_blank" > Created by Rey Talks Tech</WebsiteRights>
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