import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Topbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    // Close menu when route changes
    useEffect(() => {
        setIsMenuOpen(false);
    }, [location]);

    // Prevent scrolling when menu is open on mobile
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isMenuOpen]);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="site-header">
            <div className={`container site-header__inner ${isMenuOpen ? 'menu-open' : ''}`}>
                <Link to="/" className="brand">
                    <img className="brand__logo" src="/assets/img/Logo CRV.png" alt="Logo Claudio Reyes" />
                    <div className="brand__text">
                        <span className="brand__name">Claudio Reyes</span>
                        <span className="brand__meta">Psicología clínica y organizacional · Transdisciplina · Sistemas humanos</span>
                    </div>
                </Link>

                <button 
                    className="mobile-menu-btn" 
                    onClick={toggleMenu}
                    aria-label={isMenuOpen ? "Desplegar menú" : "Cerrar menú"}
                >
                    <span className="hamburger-line"></span>
                    <span className="hamburger-line"></span>
                    <span className="hamburger-line"></span>
                </button>

                <div className={`nav-wrap ${isMenuOpen ? 'active' : ''}`}>
                    <nav className="nav">
                        <Link to="/#modelo" onClick={() => setIsMenuOpen(false)}>Modelo</Link>
                        <Link to="/#clinica" onClick={() => setIsMenuOpen(false)}>Clínica</Link>
                        <Link to="/#pracsis" onClick={() => setIsMenuOpen(false)}>Organizaciones</Link>
                        <Link to="/#podcast" onClick={() => setIsMenuOpen(false)}>Podcast</Link>
                        <Link to="/blog" onClick={() => setIsMenuOpen(false)}>Blog</Link>
                    </nav>

                    <a
                        className="nav-cta btn btn-primary"
                        style={{ minHeight: '42px', padding: '0 16px', borderRadius: '999px', fontSize: '0.88rem' }}
                        href="https://wa.me/56930179724?text=Hola%20Claudio%2C%20quisiera%20ponerme%20en%20contacto."
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Contactar por WhatsApp
                    </a>
                </div>
            </div>
        </header>
    );
};

export default Topbar;
