import React, { useState } from 'react';
import { FaTimes, FaAlignJustify } from 'react-icons/fa';
import { BsGlobeAmericas } from "react-icons/bs";
import '../Styles/Header.css';

const Header = () => {
    const [mobileNavOpen, setMobileNavOpen] = useState(false);

    const toggleMobileNav = () => {
        setMobileNavOpen((prevState) => !prevState);
    };

    return (
        <header className="header-container">
            <div className='iconAmericas'><BsGlobeAmericas /></div>
            <div className="logo">We run</div>
            <nav className={`nav ${mobileNavOpen ? 'show-mobile-nav' : ''}`}>
                <a href="ProyectWeRun" className="nav-item">ProyectWeRun</a>
                <a href="NikePegasus40" className="nav-item">Nike Pegasus 40</a>
            </nav>
            <div className="mobile-icon" onClick={toggleMobileNav}>
                {mobileNavOpen ? <FaTimes /> : <FaAlignJustify />}
            </div>
        </header>
    );
};

export default Header;