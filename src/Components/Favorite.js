import { useState } from 'react'
import favorite from '../Json/favorite'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {faAngleDown } from '@fortawesome/free-solid-svg-icons';


export const Favorite = () => {
    const [photovisible, setphotovisible] = useState(false)
    const [ogPhoto, setogPhoto] = useState("")
    const viewPhoto = (ogurl) => {
        setogPhoto(ogurl)
        setphotovisible(true)
    }


    return (
        <>
            <> </>

            <div className='section '>
                <div className='container favorite-container flex'>
                    <h3> Favorites ❤︎</h3>
                    <div className='image-box'>
                        {favorite
                            .map((photo) => (
                                <div className='img-content' key={photo.id}>
                                    <img
                                        src={photo.enhanced}
                                        alt={` ${photo.id}`}
                                        loading="lazy"
                                        onClick={() => viewPhoto(photo.url)}
                                    />
                                </div>
                            ))
                        }

                        {photovisible && (
                            <>
                                <div className='og-backdrop' onClick={() => setphotovisible(false)} />
                                <div className='og-photo'>
                                    <button className='close-btn' onClick={() => setphotovisible(false)}>×</button>
                                    <img src={ogPhoto} alt="Original" loading="lazy" />
                                </div>
                            </>
                        )}
                    </div>
                    <Link to="/photos?type=candid" className='show-more-btn'> Show More  <FontAwesomeIcon icon={faAngleDown} /></Link>
                </div>
            </div>
        </>
    )
}
