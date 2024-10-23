"use client"
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false); // State to manage hamburger menu

    const toggleMenu = () => {
        setIsOpen(!isOpen); // Toggle menu open/close
    };

    return (
        <header>
            <nav className="navbar container">
                <div className="logo">
                    <Link href="/" className="logo-txt">Bake<span>vy.</span></Link>
                </div>
                <div className={`navlist ${isOpen ? 'active' : ''}`}>
                    {['Home', 'About', 'Menu', 'Restaurant', 'Contact'].map((item, index) => (
                        <li key={index}>
                            <Link 
                                href={item === 'Home' ? '/' : item === 'About' ? '/about' : item === 'Menu' ? '/menu' : item === 'Restaurant' ? '/restaurant' : '/contact'} 
                                className={`navlinks ${item === 'Home' ? 'active' : ''}`}
                            >
                                {item}
                            </Link>
                        </li>
                    ))}
                </div>
                <div className="hamburger" onClick={toggleMenu}>
                    <FontAwesomeIcon icon={faBars} size="lg" className="menu-icon" /> {/* Menu icon */}
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
