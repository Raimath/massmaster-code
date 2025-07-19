
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';


export const Contact = () => {
  return (
    <>
      <div className='section'>
        <div className='container contact-container flex'>
          <h3>Contact</h3>
          <p>For Booking!</p>
         
          <Link to="https://wa.me/917019750802" className='contacts' target="_blank" rel="noopener noreferrer">
            <div className='contact-element flex'>
              <div className='contact-logo'>
                <FontAwesomeIcon icon={faWhatsapp} size="2xl" />
              </div>
              <div className='contact-content'>
                <div className='contact-info-heading'>
                  Whatsapp
                </div>
                <div className='contact-info'>
                  +91 7019750802
                </div>
              </div>
            </div>
          </Link>

          <Link to="tel:+917019750802" className='contacts'>
            <div className='contact-element flex'>
              <div className='contact-logo'>
                <FontAwesomeIcon icon={faPhone} size="2xl" />
              </div>
              <div className='contact-content'>
                <div className='contact-info-heading'>
                  Phone
                </div>
                <div className='contact-info'>
                  +91 7019750802
                </div>
              </div>
            </div>
          </Link>

          <Link to="https://www.instagram.com/massmasterproductions" className='contacts' target="_blank" rel="noopener noreferrer">
            <div className='contact-element flex'>
              <div className='contact-logo'>
                <FontAwesomeIcon icon={faInstagram} size="2xl" />
              </div>
              <div className='contact-content'>
                <div className='contact-info-heading'>
                  Instagram
                </div>
                <div className='contact-info'>
                  @massmasterproductions
                </div>
              </div>
            </div>
          </Link>

          <Link to="mailto:massmasterweddings@gmail.com" className='contacts'>
            <div className='contact-element flex'>
              <div className='contact-logo'>
                <FontAwesomeIcon icon={faEnvelope} size="2xl" />
              </div>
              <div className='contact-content'>
                <div className='contact-info-heading'>
                  Email
                </div>
                <div className='contact-info'>
                  massmasterweddings@gmail.com
                </div>
              </div>
            </div>
          </Link>
        </div>
           <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3845.886744296589!2d76.52300547489021!3d15.436662885154934!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb7810053f94b13%3A0xdcadb762520140e6!2sMassMaster!5e0!3m2!1sen!2sin!4v1752652600131!5m2!1sen!2sin" width="100%" height="450" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </>
  )
}
