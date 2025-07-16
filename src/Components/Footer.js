import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube, faSquareFacebook, faXTwitter, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons';

export const Footer = () => {
    return (
        <>

                <hr>
                </hr>
            <div className='section footer-section'>
                <div className='container footer-container flex'>
                    <div className='footer-elements flex'>
                        <div className='socials '>
                            <div className='footer-heading'>Links</div>
                            <ul>
                                <li className='link flex'>
                                    <div className='icon'><FontAwesomeIcon icon={faInstagram} size="2xl" /></div>
                                    <Link to="https://www.instagram.com/massmasterweddings" target="_blank" rel="noopener noreferrer">massmasterweddings</Link>
                                </li>

                                <li className='link flex'>
                                    <div className='icon'><FontAwesomeIcon icon={faYoutube} size="xl" /></div>
                                    <Link to="https://www.youtube.com/@MassMasterWeddings" target="_blank" rel="noopener noreferrer">MassMaster Weddings</Link>
                                </li>

                                <li className='link flex'>
                                    <div className='icon'><FontAwesomeIcon icon={faSquareFacebook} size="2xl" /></div>
                                    <Link to="https://www.facebook.com/MassMaster07/" target="_blank" rel="noopener noreferrer">Mass Masster </Link>
                                </li>

                                <li className='link flex'>
                                    <div className='icon'><FontAwesomeIcon icon={faXTwitter} size="2xl" /></div>
                                    <Link to="https://x.com/__mass_master_" target="_blank" rel="noopener noreferrer">Mr.Shanth</Link>
                                </li>

                                <li className='link flex'>
                                    <div className='icon'><FontAwesomeIcon icon={faLinkedin} size="2xl" /></div>
                                    <Link to="https://www.linkedin.com/in/raimath-ali/" target="_blank" rel="noopener noreferrer">massmasterweddings</Link>
                                </li>
                            </ul>
                        </div>
                        <div className='navigation'>
                            <div className='footer-heading'>Navigation</div>
                            <ul className='footer-navlink flex'>
                                <li><Link to="/home" >Home</Link></li>
                                <li><Link to="/photos?type=candid" >Photos</Link></li>
                                <li><Link to="/videos" >Videos</Link></li>
                                <li><Link to="/services" >Services</Link></li>
                                <li><Link to="/about" >About Us</Link></li>
                                <li><Link to="/contact" >Contact</Link></li>
                            </ul>
                        </div>
                        <div className='query flex'>
                            <div className='footer-heading'>Have a Query</div>
                            <ul className='query-ul'>

                                <li className='link flex'>
                                    <div className='icon'><FontAwesomeIcon icon={faPhone} size="xl" /></div>
                                    <Link to="tel:+919353880091" target="_blank" rel="noopener noreferrer">+91 9353880091</Link>
                                </li>
                                <li className='link flex'>
                                    <div className='icon'><FontAwesomeIcon icon={faEnvelope} size="xl" /></div>
                                    <Link to="mailto:raimath420@gmail.com" target="_blank" rel="noopener noreferrer">massmasterweddings@gmail.com</Link>
                                </li>
                                <li className='link flex'>
                                    <div className='icon'><FontAwesomeIcon icon={faLocationDot} size="xl" /></div>
                                    <Link to="https://maps.app.goo.gl/DRyk3KhtDUf9YJ1C8" target="_blank" rel="noopener noreferrer">Islampur Gangavathi 523235</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='copyright flex'>
                        <p> copyright  &copy; all rights reserved  by MassMaster </p>
                        <p> this website is developed by <Link to="https://www.instagram.com/raimath420" target="_blank" rel="noopener noreferrer">Raimath420</Link></p>
                    </div>
                </div>
            </div>
        </>
    )
}
