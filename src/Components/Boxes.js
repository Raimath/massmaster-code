// import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';


export const Boxes = () => {
  
    return (
        <>
            <div className='section boxes-section'>
                <div className='container boxes-container flex'>
                
                    <Link className='box-link flex' to="/photos?type=candid">
                    <motion.div className='collections-box flex'
                                initial={{ opacity: 0, scale: 0.5 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{

                                    opacity: { duration: 0.1 },
                                    ease: 'easeInOut'
                                }} >
                        <div className='box-content'>
                            Candid
                        </div>
                        <div className='box-img'>
                            <img src='https://res.cloudinary.com/ddkfbtxsp/image/upload/v1749124667/DSC01782_ioqwa2_nqenl1_c_crop_ar_1_1_odxlbw.jpg' alt='Candid bg'/>
                        </div>
                        </motion.div>
                    </Link>
                    <Link className='box-link flex' to="/photos?type=prewedding">
                    <motion.div className='collections-box flex'
                                initial={{ opacity: 0, scale: 0.5 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{

                                    opacity: { duration: 0.1 },
                                    ease: 'easeInOut'
                                }} >
                        <div className='box-content'>
                            Pre-Wedding
                        </div>
                        <div className='box-img'>
                            <img src='https://res.cloudinary.com/ddkfbtxsp/image/upload/v1749124286/DSC04898_mhphzr_vhkar5_c_fill_ar_1_1_yw9r9r.webp'alt='prewedding bg'/>
                        </div>
                        </motion.div>
                    </Link>
                    <Link className='box-link flex' to="/ads">
                    <motion.div className='collections-box flex'
                                initial={{ opacity: 0, scale: 0.5 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{

                                    opacity: { duration: 0.1 },
                                    ease: 'easeInOut'
                                }} >
                        <div className='box-content'>
                            Ads
                        </div>
                        <div className='box-img'>
                            <img src='https://res.cloudinary.com/ddkfbtxsp/image/upload/v1749124282/2_a4rxay_xlkbcn_c_fill_ar_1_1_nae2gn.webp' alt='wedding bg'/>
                        </div>
                        </motion.div>
                    </Link>
                    <Link className='box-link flex' to="/films">
                    <motion.div className='collections-box flex'
                                initial={{ opacity: 0, scale: 0.5 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{

                                    opacity: { duration: 0.1 },
                                    ease: 'easeInOut'
                                }} >
                        <div className='box-content'>
                            Films
                        </div>
                        <div className='box-img'>
                            <img src='https://res.cloudinary.com/ddkfbtxsp/image/upload/v1749124280/DSC01506_unw3nj_pcmwiq_c_fill_ar_1_1_g_auto_oyuu7q.webp' alt='traditional bg'/>
                        </div>
                        </motion.div>
                    </Link>

                </div>

            </div>
        </>
    )
}
