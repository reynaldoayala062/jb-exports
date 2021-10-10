import React, {useState} from 'react'
import Home from '../components/Home'
import NavBar from '../components/NavBar';

const HomePage = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    }

    return (
        <>
            <NavBar/>
            <Home/>
        </>
            
    )
}

export default HomePage
