import React from 'react'
import Icon1 from '../../Images/crocs logo.png'
import Icon2 from '../../Images/Coleman-Logo.jpeg'
import Icon3 from '../../Images/musclepharm logo.jpeg'
import Icon4 from '../../Images/Apple Logo.png'
import Icon5 from '../../Images/BSN logo.png'
import Icon6 from '../../Images/Optimum-Nutrition-Logo.jpeg'
import { ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2, ServicesP } from './ServicesElements'


const Services = () => {
    return (
        <ServicesContainer id="skills">
            <ServicesH1>Brands</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={Icon1}/>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon2}/>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon3}/>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon4}/>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon5}/>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon6}/>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer >
    )
}

export default Services
