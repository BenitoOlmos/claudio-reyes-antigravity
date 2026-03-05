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
                        <div className="content"><strong style={{ color: 'var(--ink)' }}>Podcast</strong></div>
                    </div>

                    <div className="callout" style={{ marginTop: 0 }}>
                        <h3>Escúchalo</h3>
                        <p>Aquí el desarrollador pega Spotify/YouTube y destacamos 3 episodios clave.</p>
                        <div className="row">
                            <a className="btn btn-primary" href="#" onClick={(e) => { e.preventDefault(); alert('Pega aquí tu link de Spotify/YouTube'); }}>Escuchar</a>
                            <a className="btn" href="https://clinicaequilibrar.cl/#/test-rfai" target="_blank" rel="noreferrer">Test RFAI</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Podcast;
