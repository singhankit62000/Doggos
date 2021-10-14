import React from 'react';
import { Link } from 'react-router-dom';
import "./styles.css";

function Header() 
{
    return (
        <header className="header">
            <h2 className="logo">Doggos<i class="fas fa-paw"></i></h2>
            <nav className="navbar">
                <ul className="navlinks">
                    <li><Link to="/random"><i class="fas fa-random"></i></Link></li>
                    <li><Link to="/"><i class="fas fa-home"></i></Link></li>
                </ul>
            </nav>            
        </header>
    );
}

export default Header;