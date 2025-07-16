import React, { useState, useEffect } from 'react'
import allPhotos from "../Json/allphotos"
import { useSearchParams, useLocation } from 'react-router-dom'


export const Photos = () => {
    const [photovisible, setphotovisible] = useState(false)
    const [ogPhoto, setogPhoto] = useState("")
    const viewPhoto = (ogurl) => {
        setogPhoto(ogurl)
        setphotovisible(true)
    }
    const location = useLocation();


    const [searchParams] = useSearchParams()
    const type = searchParams.get('type')

    // Map descriptions to each type
    const descriptions = {
        candid: `Capturing emotions as they unfold – that’s the essence of candid photography. From stolen glances to heartfelt laughter, we specialize in seizing those unposed, raw, and genuine moments that often go unnoticed. Our approach ensures your story is told in its most natural and beautiful form, turning moments into memories you’ll cherish forever.`,
        prewedding: `Your love story deserves a prelude just as beautiful. Our pre-wedding shoots focus on showcasing your chemistry, interests, and journey as a couple. Whether you envision a romantic outdoor setting, a quirky concept, or something cinematic, we’ll craft a shoot that reflects your unique bond. Let’s turn your ideas into frames that speak volumes before the wedding bells ring.`,
    }


    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        });


    }, [location]);

    return (
            <>
            <div className='photo-type'>
                <h1>{type?.toUpperCase()}</h1>
                <p>{descriptions[type?.toLowerCase()]}</p>
            </div>
        <div className='section'>
            <div className='container photo-container'>

                <div className='image-box'>
                    {allPhotos
                        .filter((photo) => !type || photo.category === type.toLowerCase()) // Optional filtering based on type
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
            </div>
        </div>
        </>
    )
}
