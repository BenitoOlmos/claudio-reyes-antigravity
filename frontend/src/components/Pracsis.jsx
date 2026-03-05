import React from 'react';

const Pracsis = () => {
    return (
        <section id="pracsis">
            <div className="container">
                <h2 className="section-title">PRACSIS — consultoría para equipos que atraviesan crisis</h2>
                <p className="section-sub">
                    Intervenimos para recuperar coordinación, seguridad psicológica y capacidad de respuesta en contextos de alta exigencia.
                </p>

                <div className="split">
                    <div className="panel">
                        <img src="/assets/img/pracsis.png" alt="Fotografía 4 — PRACSIS" />
                        <div className="content">
                            <strong style={{ color: 'var(--ink)' }}>PRACSIS</strong><br />
                            Crisis, liderazgo, contención y prevención del desgaste.
                        </div>
                    </div>

                    <div>
                        <ul className="bullets">
                            <li><span className="dot"></span><span><strong>Crisis y post-crisis:</strong> contención, reparación y estabilización.</span></li>
                            <li><span className="dot"></span><span><strong>Alta exigencia:</strong> prevención del desgaste y supervivencia crónica.</span></li>
                            <li><span className="dot"></span><span><strong>Conflictos:</strong> mediación, acuerdos y reconstrucción de coordinación.</span></li>
                            <li><span className="dot"></span><span><strong>Jefaturas:</strong> herramientas para conversaciones difíciles.</span></li>
                        </ul>

                        <div className="callout">
                            <h3>Entrada recomendada</h3>
                            <p>Una conversación breve para entender el contexto y proponer un plan de intervención realista.</p>
                            <div className="row">
                                <a className="btn btn-primary" href="https://wa.me/56930179724?text=Hola%20Claudio%2C%20vengo%20desde%20claudioreyes.info%20y%20quiero%20solicitar%20un%20diagn%C3%B3stico%20para%20mi%20equipo.%20%C2%BFCu%C3%A1l%20es%20el%20siguiente%20paso%3F" target="_blank" rel="noreferrer">Pedir diagnóstico</a>
                                <a className="btn" href="#ingenieria">Ver IPA</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Pracsis;
