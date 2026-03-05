import React from 'react';

const Nav = () => {
  return (
    <div className="nav">
      <div className="container nav-inner">
        <div className="brand">
          <strong>Claudio Reyes</strong>
          <span>Equilibrar · PRACSIS · IPA</span>
        </div>

        <nav className="nav-links" aria-label="Navegación principal">
          <a href="#inicio">Inicio</a>
          <a href="#ecosistema">Ecosistema</a>
          <a href="#clinica">Clínica</a>
          <a href="#pracsis">PRACSIS</a>
          <a href="#ingenieria">Ingeniería</a>
          <a href="#contacto">Contacto</a>
        </nav>

        <div className="nav-cta">
          <a className="btn btn-ghost" href="#pracsis">Diagnóstico para equipos</a>
          <a className="btn btn-primary" href="#contacto">Hablar ahora</a>
        </div>
      </div>
    </div>
  );
};

export default Nav;
