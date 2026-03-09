import React from 'react';
import { Link } from 'react-router-dom';

const Topbar = () => {
    return (
        <header className="site-header">
            <div className="container site-header__inner">
                <Link to="/" className="brand">
                    <img className="brand__logo" src="/assets/img/Logo CRV.png" alt="Logo Claudio Reyes" />
                    <div className="brand__text">
                        <span className="brand__name">Claudio Reyes</span>
                        <span className="brand__meta">Psicología clínica y organizacional · Bienestar · Sistemas humanos</span>
                    </div>
                </Link>

                <div className="nav-wrap">
                    <nav className="nav">
                        <Link to="/#modelo">Modelo</Link>
                        <Link to="/#clinica">Clínica</Link>
                        <Link to="/#pracsis">Organizaciones</Link>
                        <Link to="/#podcast">Podcast</Link>
                        <Link to="/blog">Blog</Link>
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
