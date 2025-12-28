import '../css/NavBar.css'
import icon from '../assets/Ghost.png'
import { useState, useEffect } from 'react';

function NavBar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav className={`navBar ${scrolled ? 'scrolled' : ''}`}>
            <div className='navBar-container'>
                <img src={icon} className='icon' alt="Ghost Icon" />
                <div className='navBar-items-list'>
                    <ul>
                        <li className='navBar-item' onClick={() => scrollToSection('home')}>
                            Home
                        </li>
                        <li className='navBar-item' onClick={() => scrollToSection('about')}>
                            About
                        </li>
                        <li className='navBar-item' onClick={() => scrollToSection('projects')}>
                            Projects
                        </li>
                        <li className='navBar-item' onClick={() => scrollToSection('contact')}>
                            Contact
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavBar