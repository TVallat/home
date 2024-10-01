import './Header.scss';
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';


const Header = () => {

    const location = useLocation();

    useEffect(() => {
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.classList.remove('active');
        });

        switch (location.pathname) {
            case '/':
                navLinks[0].classList.add('active');
                break;
            case '/about':
                navLinks[1].classList.add('active');
                break;
            case '/portfolio':
                navLinks[2].classList.add('active');
                break;
            case '/services':
                navLinks[3].classList.add('active');
                break;
            case '/resume':
                navLinks[4].classList.add('active');
                break;
            case '/contact':
                navLinks[5].classList.add('active');
                break;
            default: break;
        }
    }, [location]);

    return (
        <header>
            <div className="infos-container">
                <p>//</p>
                <div className="infos">
                    <p>thomas</p>
                    <p className="purple-text">web_dev</p>
                </div>
            </div>
            <nav>
                <Link className="nav-link" to="/">_accueil</Link>
                <Link className="nav-link" to="/about">_a_propos</Link>
                <Link className="nav-link" to="/portfolio">_portfolio</Link>
                <Link className="nav-link" to="/services">_services</Link>
                <Link className="nav-link" to="/resume">_experience</Link>
                <Link className="nav-link" to="/contact">_contact</Link>
            </nav>
        </header>
    );
}

export default Header;