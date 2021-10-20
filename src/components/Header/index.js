import React from "react";
import { Link } from 'react-router-dom';
import './style.css';

const Header = () => {
    return(
        <header className="top">
            <div className="content-top">
                <Link className="top-logo-box" to="/"> 
                    <img className="top-logo" src="assets/dente.png" alt="logo dentes saudáveis" title="logo dentes saudáveis" />
                    <p className="top-company-name">Dentes Saudáveis</p>
                </Link>

                <nav className="top-links">
                    <Link className="top-link" to="/">Home</Link>
                    <Link className="top-link" to="/Contato">Contato</Link>
                    <Link className="top-link" to="/Missao">Missão</Link>
                    <Link className="top-link" to="/Planos">Planos</Link>
                </nav>
            </div>
        </header>
    );
}

export default Header;