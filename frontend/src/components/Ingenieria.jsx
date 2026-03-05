import React from 'react';

const Ingenieria = () => {
    return (
        <section id="ingenieria">
            <div className="container">
                <h2 className="section-title">IPA Ingeniería — procesos que bajan presión real</h2>
                <p className="section-sub">Diseño de flujos para recuperar eficiencia sin deshumanizar: menos reprocesos, más claridad, mejor coordinación.</p>

                <div className="split">
                    <div className="panel">
                        <img src="/assets/img/ipa.png" alt="Fotografía 5 — IPA" />
                        <div className="content"><strong style={{ color: 'var(--ink)' }}>IPA Ingeniería</strong></div>
                    </div>

                    <div>
                        <ul className="bullets">
                            <li><span className="dot"></span><span>Mapeo de procesos y puntos de fricción.</span></li>
                            <li><span className="dot"></span><span>Definición de responsabilidades y flujos de coordinación.</span></li>
                            <li><span className="dot"></span><span>Herramientas simples para sostener continuidad operativa.</span></li>
                            <li><span className="dot"></span><span>Intervenciones compatibles con bienestar (menos ruido, más claridad).</span></li>
                        </ul>

                        <div className="callout">
                            <h3>Conocer IPA</h3>
                            <p>Si el problema se manifiesta como “caos de trabajo”, aquí suele estar la llave.</p>
                            <div className="row">
                                <a className="btn btn-primary" href="https://www.ipaingenieria.cl" target="_blank" rel="noreferrer">Ir a IPA</a>
                                <a className="btn" href="#contacto">Conversar</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Ingenieria;
