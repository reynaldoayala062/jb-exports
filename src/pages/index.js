import React, {useState} from 'react';
import Home from '../components/Home';
import NavBar from '../components/NavBar';
import InfoSection from '../components/InfoSection';
import { homeObjOne, homeObjTwo, homeObjThree } from '../components/InfoSection/data';
import Footer from '../components/Footer'

const HomePage = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    }

    return (
        <>
            <NavBar/>
            <Home/>
            <InfoSection {...homeObjOne} /> 
            <InfoSection {...homeObjTwo} /> 
            <InfoSection {...homeObjThree} /> 
            <Footer />
        </>
            
    )
}

export default HomePage
