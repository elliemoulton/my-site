import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Resume from '../files/EllieMoultonResume.pdf'

//font awesome icons
import { library } from '@fortawesome/fontawesome-svg-core';
import {
    faBars,
    faBarsStaggered,
    faXmark,
} from '@fortawesome/free-solid-svg-icons';
library.add(faBars, faBarsStaggered, faXmark);

function Navbar() {
    const [navbarOpen, setNavbarOpen] = useState(false);
    const evenBars = (
        <FontAwesomeIcon icon='fa-solid fa-bars' className='navbar-icon' />
    );
    const staggeredBars = (
        <FontAwesomeIcon
            icon='fa-solid fa-bars-staggered'
            className='navbar-icon'
        />
    );
    const xMark = (
        <FontAwesomeIcon icon='fa-solid fa-xmark' className='navbar-icon' />
    );
    const [barsIcon, setBarsIcon] = useState(evenBars);

    const handleMouseEnter = () => {
        setBarsIcon(staggeredBars);
    };

    const handleMouseLeave = () => {
        setBarsIcon(evenBars);
    };

    const handleToggle = () => {
        setNavbarOpen((prev) => !prev);
    };

    const closeMenu = () => {
        setNavbarOpen(false);
    };

    return (
        <div>
            <nav className='navBar'>
                <button
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    onClick={handleToggle}
                    className='navbar-button'
                >
                    {navbarOpen ? xMark : barsIcon}
                </button>
                <ul
                    className={`menuNav ${navbarOpen ? ' showMenu' : ''}`}
                    onClick={() => closeMenu()}
                >
                    <li className='navbar-link'>
                        <Link to='/'>Home</Link>
                    </li>
                    <li className='navbar-link'>
                        <Link to='/about-me'>About Me</Link>
                    </li>
                    <li className='navbar-link'>
                        <Link to='/portfolio'>Portfolio</Link>
                    </li>
                    <li className='navbar-link'>
                        <a href={Resume} target='_blank'>
                            Resume
                        </a>
                    </li>
                    <li className='navbar-link'>
                        <Link to='/contact-me'>Contact Me</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;
