import React, {useState} from 'react'
import Home from '../components/Home'

const HomePage = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    }

    return (
        <>
            <Home/>
        </>
            
    )
}

export default HomePage
