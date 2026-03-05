import React from 'react';

const Ecosistema = () => {
    return (
        <section id="ecosistema">
            <div className="container">
                <h2 className="section-title">Un ecosistema, tres espacios de intervención</h2>
                <p className="section-sub">
                    Cada empresa tiene un foco propio, pero trabajan conectadas cuando el desafío lo requiere: sostener personas, cuidar equipos y ordenar sistemas de trabajo.
                </p>

                <div className="split">
                    <div className="panel">
                        <img src="/assets/img/modelo.png" alt="Fotografía web 2 — explicando el modelo" />
                        <div className="content">
                            <strong style={{ color: 'var(--ink)' }}>Explicando el modelo</strong><br />
                            Regular, ordenar, sostener. Con método.
                        </div>
                    </div>

                    <div>
                        <ul className="bullets">
                            <li><span className="dot"></span><span><strong>Personas:</strong> procesos clínicos y regulación emocional.</span></li>
                            <li><span className="dot"></span><span><strong>Equipos:</strong> contención, liderazgo y crisis.</span></li>
                            <li><span className="dot"></span><span><strong>Sistemas:</strong> procesos, coordinación y reducción de reprocesos.</span></li>
                        </ul>

                        <div className="callout">
                            <h3>Una puerta de entrada clara</h3>
                            <p>Si vienes por salud mental, Equilibrar. Si vienes por equipos, PRACSIS. Si vienes por caos operativo, IPA.</p>
                            <div className="row">
                                <a className="btn btn-primary" href="#clinica">Ver Clínica</a>
                                <a className="btn" href="#pracsis">Ver PRACSIS</a>
                                <a className="btn" href="#ingenieria">Ver IPA</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Ecosistema;
