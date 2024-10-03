import "./Footer.scss";
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';



const Footer = () => {

    const location = useLocation();

    useEffect(() => {
        const navLinks = document.querySelectorAll('.foot-nav-link');
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
        <footer>
            <nav>
                <Link className="foot-nav-link" to="/">_accueil</Link>
                <Link className="foot-nav-link" to="/about">_a_propos</Link>
                <Link className="foot-nav-link" to="/portfolio">_portfolio</Link>
                <Link className="foot-nav-link" to="/services">_services</Link>
                <Link className="foot-nav-link" to="/resume">_experience</Link>
                <Link className="foot-nav-link" to="/contact">_contact</Link>
            </nav>
            <div className="infos-container">

            </div>
        </footer>
    );
}

export default Footer;