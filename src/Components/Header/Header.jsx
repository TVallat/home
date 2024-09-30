import './Header.scss';
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';


const Header = () => {
    return (
        <header>
            <p>Header</p>
            <nav>
                <Link classname="nav-link" to="/">Accueil</Link>
                <Link classname="nav-link" to="/Booki">Booki</Link>
                <Link classname="nav-link" to="/Grimoire">Grimoire</Link>
                <Link classname="nav-link" to="/Kasa">Kasa</Link>
                <Link classname="nav-link" to="/Carducci">Nina Carducci</Link>
                <Link classname="nav-link" to="/Bluel">Sophie Bluel</Link>
            </nav>
        </header>
    );
}

export default Header;