import React from 'react';

const Podcast = () => {
    return (
        <section id="podcast">
            <div className="container">
                <h2 className="section-title">Podcast</h2>
                <p className="section-sub">Conversaciones sobre mente, conciencia, trauma y transformación personal.</p>

                <div className="split">
                    <div className="panel">
                        <img src="/assets/img/podcast.png" alt="Fotografía Podcast" />
                        <div className="content">
                            <strong style={{ color: 'var(--ink)' }}>Podcast</strong><br />
                            Comprensión simple, aplicada, con ejemplos.
                        </div>
                    </div>

                    <div className="callout" style={{ marginTop: 0 }}>
                        <h3>Escúchalo</h3>
                        <p>Disponible en Spotify.</p>
                        <div className="row">
                            <a className="btn btn-primary" href="https://open.spotify.com/show/5qVcMLQ7yffuS7VA3jA6Sh?si=a862d0ca629a4bc5" target="_blank" rel="noreferrer">Escuchar</a>
                            <a className="btn" href="https://clinicaequilibrar.cl/#/test-rfai" target="_blank" rel="noreferrer">Test RFAI</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Podcast;
