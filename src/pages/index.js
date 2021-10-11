import React, {useState} from 'react';
import Home from '../components/Home';
import NavBar from '../components/NavBar';
import InfoSection from '../components/InfoSection';
import { homeObjOne, homeObjTwo, homeObjThree } from '../components/InfoSection/data';
import Footer from '../components/Footer'
import Services from '../components/Services';
import SideBar from '../components/Sidebar';

const HomePage = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    }

    return (
        <>
            <SideBar isOpen={isOpen} toggle={toggle} />
            <NavBar toggle={toggle} />
            <Home/>
            <InfoSection {...homeObjOne} /> 
            <InfoSection {...homeObjTwo} /> 
            <Services />
            <InfoSection {...homeObjThree} /> 
            <Footer />
        </>
            
    )
}

export default HomePage
