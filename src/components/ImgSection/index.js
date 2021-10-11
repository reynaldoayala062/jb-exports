import { React, useState } from 'react'
import {HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, Img} from './ImgElements'


const Home = () => {

    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }

    return (
        <HeroContainer id="home">
           <HeroBg>
               <Img src = {require('../../Images/pexels-kelly-lacy-6572431.jpg').default} alt=''/>
           </HeroBg>
           <HeroContent>
               <HeroH1>Anywhere anytime</HeroH1>
               <HeroP>Serving around the world</HeroP>
               <HeroBtnWrapper>
               </HeroBtnWrapper>
           </HeroContent>
            
        </HeroContainer>
       
    )
}

export default Home