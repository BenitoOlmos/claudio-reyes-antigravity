import React from 'react';

const Nav = () => {
  return (
    <div className="nav">
      <div className="container nav-inner">
        <div className="brand" aria-label="Marca">
          <strong>Claudio Reyes</strong>
          <span>Equilibrar · PRACSIS · IPA</span>
        </div>

        <nav className="nav-links" aria-label="Navegación principal">
          <a href="#inicio">Inicio</a>
          <a href="#ecosistema">Ecosistema</a>
          <a href="#clinica">Clínica</a>
          <a href="#pracsis">PRACSIS</a>
          <a href="#ingenieria">Ingeniería</a>
          <a href="#podcast">Podcast</a>
          <a href="#contacto">Contacto</a>
        </nav>

        <div className="nav-cta">
          <a className="btn btn-ghost" href="#pracsis">Diagnóstico para equipos</a>
          <a
            className="btn btn-primary"
            href="https://wa.me/56930179724?text=Hola%20Claudio%2C%20vengo%20desde%20claudioreyes.info%20y%20quiero%20conversar%20sobre%20una%20posible%20intervenci%C3%B3n%20%28Cl%C3%ADnica%2FPRACSIS%2FIPA%29.%20%C2%BFPodemos%20coordinar%20una%20llamada%20breve%3F"
            target="_blank"
            rel="noreferrer"
          >WhatsApp</a>
        </div>
      </div>
    </div>
  );
};

export default Nav;
