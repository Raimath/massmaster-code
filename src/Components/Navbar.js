import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark,faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState(false);


  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <div className="navbar">
      <div className="logo">MassMaster</div>

      <div className="responsive-icons" onClick={toggleMenu}>
        <FontAwesomeIcon
          icon={menuOpen ? faXmark : faBars}
          size="xl"
          className="menu-icon"
        />
      </div>

      <ul className={`nav-list ${menuOpen ? 'open' : ''}`}>
        <li><Link to="/home" onClick={() => setMenuOpen(false)}>Home</Link></li>
        <li className="photos-menu" onClick={() => setSubmenuOpen(!submenuOpen)}>
          Photos <FontAwesomeIcon icon={faAngleDown} />
          <ul className={`submenu ${submenuOpen ? 'open' : ''}`}>
            <li><Link to="/photos?type=candid" onClick={() => setMenuOpen(false)}>Candid</Link></li>
            <li><Link to="/photos?type=wedding" onClick={() => setMenuOpen(false)}>Wedding</Link></li>
            <li><Link to="/photos?type=prewedding" onClick={() => setMenuOpen(false)}>Prewedding</Link></li>
            <li><Link to="/photos?type=traditional" onClick={() => setMenuOpen(false)}>Traditional</Link></li>
            <li><Link to="/photos?type=commercial" onClick={() => setMenuOpen(false)}>Commercial</Link></li>
          </ul>
        </li>
        <li className="photos-menu" onClick={() => setSubmenuOpen(!submenuOpen)}>
          Videos <FontAwesomeIcon icon={faAngleDown} />
          <ul className={`submenu ${submenuOpen ? 'open' : ''}`}>
            <li><Link to="/videos?type=candid" onClick={() => setMenuOpen(false)}>Candid</Link></li>
            <li><Link to="/videos?type=wedding" onClick={() => setMenuOpen(false)}>Wedding</Link></li>
            <li><Link to="/videos?type=prewedding" onClick={() => setMenuOpen(false)}>Prewedding</Link></li>
            <li><Link to="/videos?type=traditional" onClick={() => setMenuOpen(false)}>Traditional</Link></li>
            <li><Link to="/videos?type=commercial" onClick={() => setMenuOpen(false)}>Commercial</Link></li>
          </ul>
        </li>        <li><Link to="/services" onClick={() => setMenuOpen(false)}>Services</Link></li>
        <li><Link to="/about" onClick={() => setMenuOpen(false)}>About Us</Link></li>
        <li><Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>
      </ul>
    </div>
  );
};
