import React from 'react';

const Hero = () => {
    return (
        <main id="inicio" className="hero">
            <div className="container">
                <span className="pill">Ecosistema para incidir en personas, equipos y sistemas</span>

                <div className="hero-grid">
                    <div className="hero-copy">
                        <h1>Incidir en lo humano requiere mirar el sistema completo.</h1>
                        <h2>Psicólogo · Investigador en problemas complejos · Fundador de 3 empresas</h2>
                        <p>
                            Trabajo desde tres frentes conectados: <strong>clínica (Equilibrar)</strong>, <strong>consultoría para equipos en crisis (PRACSIS)</strong> e
                            <strong>ingeniería de procesos (IPA)</strong>. La idea es simple: sostener a las personas, ordenar el trabajo y reducir el costo humano
                            de la alta exigencia.
                        </p>

                        <div className="microproof">
                            <strong style={{ color: 'var(--ink)', fontWeight: 700 }}>Robustez real</strong>
                            <div>Integración de salud mental, contención en crisis y mejora de flujos de trabajo.</div>
                        </div>

                        <div style={{ marginTop: '14px', display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                            <span className="pill">Equilibrar</span>
                            <span className="pill">PRACSIS</span>
                            <span className="pill">IPA Ingeniería</span>
                        </div>
                    </div>

                    <div className="hero-media" aria-label="Fotografía principal">
                        <img src="/assets/img/hero.png" alt="Fotografía web 1" />
                        <div className="overlay"></div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Hero;
