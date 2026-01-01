import '../css/NavBar.css'
import icon from '../assets/Ghost.png'
import { useState, useEffect } from 'react';

import { useNavigate, useLocation } from 'react-router-dom';

function NavBar() {
    const [scrolled, setScrolled] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

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

    useEffect(() => {
        if (location.pathname === '/' && location.state && location.state.targetId) {
            const element = document.getElementById(location.state.targetId);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
                // Clear state to avoid scrolling on refresh? 
                // Actually, replace state to clear it is better but might be overkill.
                // navigate(location.pathname, { replace: true, state: {} });
            }
        }
    }, [location]);

    const scrollToSection = (id) => {
        if (location.pathname !== '/') {
            navigate('/', { state: { targetId: id } });
        } else {
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
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