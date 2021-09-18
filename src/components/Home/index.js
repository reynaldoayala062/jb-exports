import React from 'react'
import { ButtonLink } from ''
import {HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper} from ''

const Home = () => {
    return (
        <HeroContainer>
           <HeroBg>
               <VideoBg autoPlay={true} loop={true} controls={false} playsInline muted src> </VideoBg>
           </HeroBg>
           <HeroContent>
               <HeroH1></HeroH1>
               <HeroP></HeroP>
               <HeroBtnWrapper>
                   <ButtonLink>

                   </ButtonLink>
               </HeroBtnWrapper>
           </HeroContent>
            
        </HeroContainer>
       
    )
}

export default Home
