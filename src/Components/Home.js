import React from 'react'
import Slider from './Slider'
import { Photos } from './Photos'
import { Welcome } from './Welcome'
import { Boxes } from './Boxes'
import { Services } from './Services'
import { Contact } from './Contact'

export const Home = () => {
    return (
        <>
            <Slider />
            <Welcome/>
            <Boxes/>
            {/* <Photos /> */}
            <Services/>
            <Contact/>
        </>
    )
}
