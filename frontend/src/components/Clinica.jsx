import React from 'react';

const Clinica = () => {
    return (
        <section id="clinica">
            <div className="container">
                <h2 className="section-title">Clínica Equilibrar</h2>
                <p className="section-sub">
                    Psicoterapia y salud mental con foco práctico: crisis, ansiedad, trauma, estancamiento y reconstrucción de sentido.
                </p>

                <div className="grid-3">
                    <div className="card">
                        <div className="media">
                            <img src="/assets/img/clinica.png" alt="Fotografía 3 — Psicoterapia" />
                        </div>
                        <div className="body">
                            <h3>Psicoterapia</h3>
                            <p>Comprensión profunda + herramientas para regular el sistema nervioso y recuperar dirección.</p>
                            <a className="link" href="https://clinicaequilibrar.cl" target="_blank" rel="noreferrer">Ir a Clínica Equilibrar <span>→</span></a>
                        </div>
                    </div>

                    <div className="card">
                        <div className="media icon">
                            <img src="/assets/img/rfai.png" alt="Icono RFAI" />
                        </div>
                        <div className="body">
                            <h3>RFAI (método)</h3>
                            <p>El método vive principalmente en Equilibrar: test, perfiles e intervención cuando corresponde.</p>
                            <a className="link" href="https://clinicaequilibrar.cl/#/test-rfai" target="_blank" rel="noreferrer">Hacer el test <span>→</span></a>
                        </div>
                    </div>

                    <div className="card">
                        <div className="media">
                            <img src="/assets/img/difusion.png" alt="Fotografía DC — Difusión científica" />
                        </div>
                        <div className="body">
                            <h3>Difusión científica</h3>
                            <p>Charlas y formación aplicadas: mente, trauma, sistemas complejos y bienestar humano.</p>
                            <a className="link" href="#difusion">Ver difusión <span>→</span></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Clinica;
