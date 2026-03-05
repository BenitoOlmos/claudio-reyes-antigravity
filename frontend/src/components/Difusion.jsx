import React from 'react';

const Difusion = () => {
    return (
        <section id="difusion">
            <div className="container">
                <h2 className="section-title">Difusión científica</h2>
                <p className="section-sub">Conferencias, charlas y formación para traducir evidencia y experiencia a práctica concreta.</p>
                <div className="split">
                    <div className="panel">
                        <img src="/assets/img/difusion.png" alt="Difusión científica" />
                        <div className="content"><strong style={{ color: 'var(--ink)' }}>Formación y divulgación</strong></div>
                    </div>
                    <div className="callout" style={{ marginTop: 0 }}>
                        <h3>Invitaciones y contenidos</h3>
                        <p>Aquí podemos sumar “próximas charlas”, “temas” y “medios”.</p>
                        <div className="row">
                            <a className="btn btn-primary" href="#contacto">Invitar</a>
                            <a className="btn" href="#podcast">Podcast</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Difusion;
