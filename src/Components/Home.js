import React, { useEffect } from 'react'
import Slider from './Slider'
import { Welcome } from './Welcome'
import { Boxes } from './Boxes'
import { Services } from './Services'
import { Contact } from './Contact'
import { Favorite } from './Favorite'
import { useLocation } from 'react-router-dom'

export const Home = () => {
    const location = useLocation();
    useEffect(() => {
        window.scrollTo({
            top: 1000,
            left: 0,
            behavior: "smooth"
        });
    }, [location]);
    return (
        <>
            <Slider />
            <Welcome />
            <Boxes />
            <Favorite />
            {/* <Photos /> */}
            <Services />
            <Contact />
        </>
    )
}
