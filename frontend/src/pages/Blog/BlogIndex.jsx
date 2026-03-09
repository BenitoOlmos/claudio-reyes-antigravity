import React from 'react';
import { Link } from 'react-router-dom';

const BlogIndex = () => {
    return (
        <>
            <section className="hero" style={{ paddingTop: '50px' }}>
                <div className="container">
                    <div className="hero-grid">
                        <div>
                            <span className="eyebrow" style={{ color: '#8d6e63' }}>Blog · Psicología · Cambio profundo</span>
                            <h1 style={{ fontSize: 'clamp(2.4rem, 4.5vw, 4.5rem)', maxWidth: '12ch' }}>Ideas para comprender mejor cómo funciona la mente</h1>
                            <p className="lead" style={{ maxWidth: '58ch' }}>
                                Un espacio para explorar regulación emocional, trauma, consciencia, reprogramación mental y formas más profundas de transformación psicológica.
                            </p>

                            <div className="hero-actions" style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginTop: '18px' }}>
                                <a className="btn btn-primary" href="https://clinicaequilibrar.cl/#/test-rfai">Comenzar con el test RFAI</a>
                                <a className="btn btn-outline" href="#articulos">Ver artículos</a>
                            </div>
                        </div>

                        <article className="hero-card" style={{
                            background: 'var(--surface)', border: '1px solid var(--line)', borderRadius: 'var(--radius)',
                            overflow: 'hidden', boxShadow: 'var(--shadow)', minHeight: '420px', display: 'flex',
                            flexDirection: 'column', justifyContent: 'flex-end', position: 'relative'
                        }}>
                            <img src="/assets/img/clinica.png" style={{ width: '100%', height: '100%', minHeight: '420px', objectFit: 'cover' }} alt="Claudio Reyes destacado" />
                            <div className="hero-card-content" style={{
                                position: 'absolute', inset: 'auto 0 0 0', padding: '24px',
                                background: 'linear-gradient(to top, rgba(20, 20, 20, 0.68), rgba(20, 20, 20, 0))', color: '#fff'
                            }}>
                                <span style={{ display: 'inline-block', fontSize: '0.76rem', textTransform: 'uppercase', letterSpacing: '0.08em', opacity: 0.9, marginBottom: '8px' }}>Artículo destacado</span>
                                <h2 style={{ margin: '0 0 8px', fontSize: '1.4rem', lineHeight: 1.2 }}>
                                    <Link to="/blog/los-cinco-niveles-de-evolucion-de-la-mente" style={{ color: '#fff' }}>
                                        Los cinco niveles de evolución de la mente humana
                                    </Link>
                                </h2>
                                <p style={{ margin: 0, fontSize: '0.97rem', opacity: 0.92, color: '#fff' }}>
                                    Una forma clara de entender cómo pasamos de reaccionar automáticamente a vivir con mayor consciencia, regulación y libertad interior.
                                </p>
                            </div>
                        </article>
                    </div>
                </div>
            </section>

            <section className="search-section" style={{ padding: '6px 0 24px' }}>
                <div className="container">
                    <div className="search-box" style={{
                        background: 'var(--surface)', border: '1px solid var(--line)', borderRadius: '18px', boxShadow: 'var(--shadow)',
                        padding: '18px', display: 'grid', gridTemplateColumns: '1fr auto', gap: '12px', alignItems: 'center'
                    }}>
                        <input
                            type="search"
                            placeholder="Buscar artículos sobre ansiedad, trauma, regulación emocional, RFAI..."
                            aria-label="Buscar artículos del blog"
                            style={{ width: '100%', border: '1px solid var(--line)', background: '#fafaf8', color: 'var(--text)', borderRadius: '14px', padding: '16px 18px', fontSize: '1rem', outline: 'none' }}
                        />
                        <a className="btn btn-outline" href="#articulos">Buscar</a>
                    </div>
                </div>
            </section>

            <section className="section" style={{ padding: '26px 0' }}>
                <div className="container">
                    <div className="section-title-row" style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: '18px', marginBottom: '20px' }}>
                        <div>
                            <h2 className="section-title" style={{ fontSize: 'clamp(1.6rem, 2.5vw, 2.2rem)' }}>Explora por tema</h2>
                            <p className="section-subtitle" style={{ margin: 0, color: 'var(--muted)', maxWidth: '56ch', fontSize: '1rem' }}>
                                Categorías pensadas para conectar el blog con tu trabajo clínico, tu podcast y la lógica del test.
                            </p>
                        </div>
                    </div>

                    <div className="chips" style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
                        {['Regulación emocional', 'Trauma y patrones', 'RFAI', 'Mente y consciencia', 'Ansiedad', 'Cambio profundo'].map(tag => (
                            <a key={tag} className="chip" style={{
                                display: 'inline-flex', alignItems: 'center', justifyContent: 'center', minHeight: '42px', padding: '0 16px',
                                borderRadius: '999px', background: 'var(--surface)', border: '1px solid var(--line)', color: 'var(--text)',
                                fontSize: '0.95rem', fontWeight: 500, boxShadow: 'var(--shadow)', transition: '0.2s ease'
                            }} href="#articulos">{tag}</a>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section" id="articulos" style={{ padding: '26px 0' }}>
                <div className="container">
                    <div className="section-title-row" style={{ marginBottom: '20px' }}>
                        <div>
                            <h2 className="section-title" style={{ fontSize: 'clamp(1.6rem, 2.5vw, 2.2rem)' }}>Artículos destacados</h2>
                            <p className="section-subtitle" style={{ margin: 0, color: 'var(--muted)', maxWidth: '56ch', fontSize: '1rem' }}>
                                Una selección breve y potente para que la página se vea más limpia, más editorial y más enfocada.
                            </p>
                        </div>
                    </div>

                    <div className="posts-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '22px' }}>

                        <article className="post-card" style={{ background: 'var(--surface)', border: '1px solid var(--line)', borderRadius: 'var(--radius)', overflow: 'hidden', boxShadow: 'var(--shadow)' }}>
                            <div className="post-card-image" style={{ aspectRatio: '16/10', overflow: 'hidden', background: '#ecebe5' }}>
                                <img src="/assets/img/clinica.png" style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt="Artículo sobre evolución de la mente" />
                            </div>
                            <div className="post-card-content" style={{ padding: '22px' }}>
                                <span className="tag" style={{ display: 'inline-block', marginBottom: '12px', fontSize: '0.76rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#8d6e63', fontWeight: 700 }}>Psicología · Consciencia</span>
                                <h3 style={{ fontSize: '1.2rem', margin: '0 0 10px', lineHeight: 1.2, letterSpacing: '-0.02em' }}>
                                    <Link to="/blog/los-cinco-niveles-de-evolucion-de-la-mente" style={{ color: 'var(--primary)' }}>
                                        Los cinco niveles de evolución de la mente humana
                                    </Link>
                                </h3>
                                <p style={{ margin: '0 0 16px', color: 'var(--muted)', fontSize: '1rem' }}>
                                    Un mapa para comprender cómo una persona puede pasar desde la reactividad automática hacia una vida con mayor observación, reorganización interna y sentido.
                                </p>
                                <Link to="/blog/los-cinco-niveles-de-evolucion-de-la-mente" style={{ color: 'var(--primary)', fontWeight: 600 }}>Leer artículo</Link>
                            </div>
                        </article>

                        <article className="post-card" style={{ background: 'var(--surface)', border: '1px solid var(--line)', borderRadius: 'var(--radius)', overflow: 'hidden', boxShadow: 'var(--shadow)' }}>
                            <div className="post-card-image" style={{ aspectRatio: '16/10', overflow: 'hidden', background: '#ecebe5' }}>
                                <img src="/assets/img/modelo.png" style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt="Patrones emocionales repetitivos" />
                            </div>
                            <div className="post-card-content" style={{ padding: '22px' }}>
                                <span className="tag" style={{ display: 'inline-block', marginBottom: '12px', fontSize: '0.76rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#8d6e63', fontWeight: 700 }}>Regulación emocional</span>
                                <h3 style={{ fontSize: '1.2rem', margin: '0 0 10px', lineHeight: 1.2, letterSpacing: '-0.02em' }}>
                                    <Link to="/blog/por-que-repetimos-patrones-emocionales" style={{ color: 'var(--primary)' }}>
                                        Por qué repetimos patrones emocionales
                                    </Link>
                                </h3>
                                <p style={{ margin: '0 0 16px', color: 'var(--muted)', fontSize: '1rem' }}>
                                    Una mirada clínica y neuropsicológica sobre por qué ciertas reacciones, vínculos o malestares parecen volver una y otra vez.
                                </p>
                                <Link to="/blog/por-que-repetimos-patrones-emocionales" style={{ color: 'var(--primary)', fontWeight: 600 }}>Leer artículo</Link>
                            </div>
                        </article>

                        <article className="post-card" style={{ background: 'var(--surface)', border: '1px solid var(--line)', borderRadius: 'var(--radius)', overflow: 'hidden', boxShadow: 'var(--shadow)' }}>
                            <div className="post-card-image" style={{ aspectRatio: '16/10', overflow: 'hidden', background: '#ecebe5' }}>
                                <img src="/assets/img/pracsis.png" style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt="Comprender no siempre basta para cambiar" />
                            </div>
                            <div className="post-card-content" style={{ padding: '22px' }}>
                                <span className="tag" style={{ display: 'inline-block', marginBottom: '12px', fontSize: '0.76rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#8d6e63', fontWeight: 700 }}>Cambio profundo</span>
                                <h3 style={{ fontSize: '1.2rem', margin: '0 0 10px', lineHeight: 1.2, letterSpacing: '-0.02em' }}>
                                    <Link to="/blog/cuando-entender-no-basta" style={{ color: 'var(--primary)' }}>
                                        Cuando entender no basta para cambiar
                                    </Link>
                                </h3>
                                <p style={{ margin: '0 0 16px', color: 'var(--muted)', fontSize: '1rem' }}>
                                    Comprender el origen de un patrón puede ser valioso, pero muchas veces no alcanza si la respuesta automática sigue intacta.
                                </p>
                                <Link to="/blog/cuando-entender-no-basta" style={{ color: 'var(--primary)', fontWeight: 600 }}>Leer artículo</Link>
                            </div>
                        </article>

                    </div>
                </div>
            </section>

            {/* FINAL BLOG SECTION */}
            <section className="section" style={{ padding: '26px 0 80px' }}>
                <div className="container">
                    <div className="two-col" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
                        <div className="podcast-box" style={{ background: 'var(--surface)', border: '1px solid var(--line)', borderRadius: 'var(--radius)', boxShadow: 'var(--shadow)', padding: '26px' }}>
                            <span className="mini-label" style={{ display: 'inline-block', marginBottom: '10px', fontSize: '0.76rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#8d6e63', fontWeight: 700 }}>Podcast</span>
                            <h3 style={{ margin: '0 0 10px', lineHeight: 1.2, letterSpacing: '-0.02em' }}>Escucha conversaciones que amplían estas ideas</h3>
                            <p style={{ margin: '0 0 16px', color: 'var(--muted)', fontSize: '1rem' }}>
                                El blog puede conversar directamente con tu podcast: cada artículo puede cerrar invitando a profundizar en un episodio, y cada episodio puede llevar tráfico de vuelta al sitio.
                            </p>
                            <a className="btn btn-outline" href="https://open.spotify.com/show/5qVcMLQ7yffuS7VA3jA6Sh" target="_blank" rel="noopener noreferrer">
                                Ir al podcast
                            </a>
                        </div>

                        <div className="cta-box" style={{ background: 'var(--surface)', border: '1px solid var(--line)', borderRadius: 'var(--radius)', boxShadow: 'var(--shadow)', padding: '26px' }}>
                            <span className="mini-label" style={{ display: 'inline-block', marginBottom: '10px', fontSize: '0.76rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#8d6e63', fontWeight: 700 }}>Test RFAI</span>
                            <h3 style={{ margin: '0 0 10px', lineHeight: 1.2, letterSpacing: '-0.02em' }}>Comienza por observar cómo está funcionando hoy tu mente</h3>
                            <p style={{ margin: '0 0 16px', color: 'var(--muted)', fontSize: '1rem' }}>
                                Si estos temas te resuenan, el test RFAI puede ser un primer paso para identificar patrones de activación, regulación y adaptación.
                            </p>
                            <a className="btn btn-primary" href="https://clinicaequilibrar.cl/#/test-rfai">Hacer test RFAI</a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default BlogIndex;
