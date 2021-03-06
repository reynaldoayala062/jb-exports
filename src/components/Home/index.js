import { React, useState } from 'react'
import {HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, Img} from './HomeElements'

const Home = () => {

    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }

    return (
        <HeroContainer id="home">
           <HeroBg>
               <VideoBg autoPlay={true} loop={true} controls={false} playsInline muted src='https://jb-exports.s3.us-east-2.amazonaws.com/pexels-polina-tankilevitch-5585939.mp4'> </VideoBg>
           </HeroBg>
           <HeroContent>
               <HeroH1>Jb Exports</HeroH1>
               <HeroP>Making online shopping easy</HeroP>
               <HeroBtnWrapper>
               </HeroBtnWrapper>
           </HeroContent>
            
        </HeroContainer>
       
    )
}

export default Home
