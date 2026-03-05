import React from 'react';

const Pracsis = () => {
    return (
        <section id="pracsis">
            <div className="container">
                <h2 className="section-title">PRACSIS — consultoría para equipos en crisis</h2>
                <p className="section-sub">Intervenciones para recuperar coordinación, seguridad psicológica y capacidad de respuesta bajo alta exigencia.</p>

                <div className="split">
                    <div className="panel">
                        <img src="/assets/img/pracsis.png" alt="Fotografía 4 — PRACSIS" />
                        <div className="content"><strong style={{ color: 'var(--ink)' }}>PRACSIS</strong></div>
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
                            <p>Conversación breve para entender el contexto y proponer un plan de intervención realista.</p>
                            <div className="row">
                                <a className="btn btn-primary" href="#contacto">Pedir diagnóstico</a>
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
