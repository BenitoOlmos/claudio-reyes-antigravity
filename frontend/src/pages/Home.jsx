import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <>
            {/* HERO SECTION */}
            <section className="hero">
                <div className="container">
                    <div className="hero-grid">
                        <div className="hero-copy">
                            <h1>Psicología clínica y organizacional para personas, líderes y equipos.</h1>

                            <div className="hero-divider"></div>

                            <p className="lead">
                                Psicólogo clínico y organizacional. Líder de una decena de equipos de trabajo.
                                Especialista en el acompañamiento de procesos de crisis en personas, líderes y equipos,
                                el desarrollo de la inteligencia socioemocional y la transformación de las estructuras de pensamiento.
                            </p>

                            <p className="lead">
                                Este sitio reúne mi trabajo en Clínica Equilibrar, PRACSIS, IPA Ingeniería,
                                el modelo RFAI, el podcast y una línea de reflexión sobre salud mental y organizaciones.
                            </p>

                            <div className="hero-card">
                                Director ejecutivo en Clínica Equilibrar, PRACSIS e IPA Ingeniería.
                            </div>

                            <div className="btn-row">
                                <a className="btn btn-primary" href="https://clinicaequilibrar.cl/#/test-rfai">Hacer Autoevaluación</a>
                                <a className="btn btn-secondary" href="#pracsis">Talleres para organizaciones</a>
                            </div>
                        </div>

                        <div className="hero-photo">
                            <img src="/assets/img/clinica.png" alt="Claudio Reyes en contexto clínico" />
                        </div>
                    </div>

                    <div className="stats">
                        <div className="stat">
                            <strong>15+</strong>
                            <span>Años de trabajo clínico, formativo y organizacional</span>
                        </div>
                        <div className="stat">
                            <strong>10+</strong>
                            <span>Equipos de trabajo liderados en distintos contextos</span>
                        </div>
                        <div className="stat">
                            <strong>PRACSIS</strong>
                            <span>Programas de bienestar y liderazgo para organizaciones</span>
                        </div>
                        <div className="stat">
                            <strong>IPA</strong>
                            <span>Procesos y sistemas humanos en contextos complejos</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* MODELO SECTION */}
            <section id="modelo" className="section-soft">
                <div className="container split">
                    <div className="media-panel">
                        <img src="/assets/img/modelo CRV.png" alt="Modelo Claudio Reyes Vera" />
                    </div>

                    <div>
                        <span className="eyebrow">Modelo de trabajo</span>
                        <h2>Un enfoque que integra clínica, regulación emocional y comprensión de sistemas humanos.</h2>

                        <p className="lead">
                            Mi trabajo cruza psicología clínica, neurociencia, lectura del trauma,
                            regulación emocional, aprendizaje organizacional y comprensión de procesos complejos.
                        </p>

                        <p>
                            El foco no está solo en disminuir síntomas, sino en comprender cómo una persona
                            o un equipo organizan su experiencia, sostienen presión, repiten patrones
                            y pueden abrir nuevas posibilidades de funcionamiento.
                        </p>

                        <p>
                            Ese enfoque se expresa en la clínica, en programas de liderazgo y bienestar,
                            y también en espacios de análisis e intervención sobre sistemas de trabajo.
                        </p>

                        <div className="btn-row">
                            <a className="btn btn-primary" href="https://clinicaequilibrar.cl/#/test-rfai">Hacer Autoevaluación</a>
                            <a className="btn btn-secondary" href="#pracsis">Conocer programas para equipos</a>
                        </div>
                    </div>
                </div>
            </section>

            {/* CAMINOS SECTION */}
            <section>
                <div className="container">
                    <span className="eyebrow">Tres caminos posibles</span>
                    <h2>El sitio está organizado para personas, equipos y empresas.</h2>

                    <div className="path-grid">
                        <div className="path-card">
                            <h3>Personas</h3>
                            <p>
                                Si buscas entender cómo funciona tu mente y reprogramar aquellos aprendizajes que te limitan.
                            </p>
                            <a className="path-link" href="#clinica">Ir a clínica</a>
                        </div>

                        <div className="path-card">
                            <h3>Equipos</h3>
                            <p>
                                Programas de contención para equipos en crisis, entrenamientos y coaching en liderazgo socioemocional y fortalecimiento de la productividad.
                            </p>
                            <a className="path-link" href="#pracsis">Ir a PRACSIS</a>
                        </div>

                        <div className="path-card">
                            <h3>Empresas / Corporaciones</h3>
                            <p>
                                Optimizamos la eficiencia operacional de la organización mediante metodologías avanzadas de ingeniería, análisis técnico y mejora continua.
                            </p>
                            <a className="path-link" href="https://ipaingenieria.cl" target="_blank" rel="noopener noreferrer">Ir a IPA Ingeniería</a>
                        </div>
                    </div>
                </div>
            </section>

            {/* CLINICA SECTION */}
            <section id="clinica" className="section-soft">
                <div className="container split">
                    <div className="media-panel">
                        <img src="/assets/img/clinica.png" alt="Claudio Reyes en proceso clínico" />
                    </div>

                    <div>
                        <span className="eyebrow">Clínica Equilibrar</span>
                        <h2>Un espacio clínico para comprender el malestar y trabajar patrones de funcionamiento profundo.</h2>

                        <p className="lead">
                            En Clínica Equilibrar desarrollo procesos terapéuticos orientados a salud mental,
                            regulación emocional y reprogramación de patrones automáticos a través del modelo RFAI.
                        </p>

                        <p>
                            El trabajo clínico comienza con una lectura inicial del funcionamiento mental,
                            que permite ordenar dimensiones emocionales, cognitivas, fisiológicas
                            y de regulación frente al estrés.
                        </p>

                        <div className="btn-row">
                            <a className="btn btn-primary" href="https://clinicaequilibrar.cl/#/test-rfai">Hacer Autoevaluación</a>
                            <a className="btn btn-secondary" href="https://clinicaequilibrar.cl">Ir a Clínica Equilibrar</a>
                        </div>
                    </div>
                </div>
            </section>

            {/* PRACSIS SECTION */}
            <section id="pracsis">
                <div className="container split reverse">
                    <div>
                        <span className="eyebrow">Organizaciones · PRACSIS</span>
                        <h2>Bienestar psicológico, liderazgo y regulación emocional en organizaciones.</h2>

                        <p className="lead">
                            PRACSIS es la línea de trabajo orientada a organizaciones que buscan fortalecer
                            el bienestar socioemocional, la capacidad de liderazgo y la salud de sus equipos.
                        </p>

                        <p>
                            Desarrollamos talleres, charlas y procesos de acompañamiento para contextos
                            donde existe presión sostenida, sobrecarga, conflictos silenciosos,
                            exigencia emocional o necesidad de fortalecer habilidades de liderazgo.
                        </p>

                        <div className="list">
                            <span>Talleres de bienestar psicológico en el trabajo</span>
                            <span>Coaching socioemocional para líderes y jefaturas</span>
                            <span>Procesos de regulación emocional para equipos</span>
                            <span>Programas de liderazgo y prevención del desgaste</span>
                        </div>

                        <div className="btn-row">
                            <a
                                className="btn btn-primary"
                                href="https://wa.me/56930179724?text=Hola%20Claudio%2C%20quisiera%20consultar%20por%20talleres%20de%20bienestar%20y%20coaching%20socioemocional."
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Consultar por talleres
                            </a>
                        </div>
                    </div>

                    <div className="media-panel">
                        <img src="/assets/img/PRACSIS.jpeg" alt="Charla o taller de PRACSIS" />
                    </div>
                </div>
            </section>

            {/* PODCAST SECTION */}
            <section id="podcast" className="section-soft">
                <div className="container split reverse">
                    <div>
                        <span className="eyebrow">Podcast</span>
                        <h2>Conversaciones sobre mente, trauma, regulación emocional y transformación.</h2>

                        <p className="lead">
                            El podcast reúne reflexiones y conversaciones sobre salud mental,
                            funcionamiento de la mente, trauma psicológico y desarrollo humano.
                        </p>

                        <p>
                            Es también una puerta de entrada para quienes quieren acercarse
                            a este trabajo desde las ideas, antes de comenzar un proceso clínico
                            o de bienestar organizacional.
                        </p>

                        <div className="btn-row">
                            <a
                                className="btn btn-primary"
                                href="https://open.spotify.com/show/5qVcMLQ7yffuS7VA3jA6Sh"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Escuchar en Spotify
                            </a>
                            <a className="btn btn-secondary" href="https://clinicaequilibrar.cl/#/test-rfai">Hacer Autoevaluación</a>
                        </div>
                    </div>

                    <div>
                        <div className="media-panel" style={{ minHeight: 'auto', marginBottom: '18px' }}>
                            <img src="/assets/img/FOTO PODCAST.png" alt="Claudio Reyes en el podcast" />
                        </div>

                        <iframe
                            className="podcast-embed"
                            src="https://open.spotify.com/embed/show/5qVcMLQ7yffuS7VA3jA6Sh"
                            allowFullScreen
                            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                            loading="lazy"
                            title="Podcast de Claudio Reyes en Spotify"
                        ></iframe>
                    </div>
                </div>
            </section>

            {/* BLOG SECTION (PREVIEW GRID) */}
            <section id="blog">
                <div className="container">
                    <span className="eyebrow">Blog</span>
                    <h2>Noticias, artículos y reflexiones sobre salud mental, cambio profundo y bienestar organizacional.</h2>

                    <div className="blog-grid">
                        <article className="blog-card">
                            <div className="blog-card__image">
                                <img src="/assets/img/clinica.png" alt="Los cinco niveles de evolución de la mente humana" />
                            </div>
                            <div className="blog-card__body">
                                <span className="blog-card__meta">Psicología</span>
                                <div className="blog-card__title">
                                    Los cinco niveles de evolución de la mente humana
                                </div>
                                <p>
                                    Un mapa para comprender cómo pasamos de la reactividad a una vida con mayor consciencia y libertad interior.
                                </p>
                                <Link className="blog-card__link" to="/blog/los-cinco-niveles-de-evolucion-de-la-mente">Leer artículo</Link>
                            </div>
                        </article>

                        <article className="blog-card">
                            <div className="blog-card__image">
                                <img src="/assets/img/modelo CRV.png" alt="Por qué repetimos patrones emocionales" />
                            </div>
                            <div className="blog-card__body">
                                <span className="blog-card__meta">Regulación emocional</span>
                                <div className="blog-card__title">
                                    Por qué repetimos patrones emocionales
                                </div>
                                <p>
                                    Una mirada clínica y neuropsicológica sobre por qué ciertas reacciones, vínculos y decisiones parecen volver una y otra vez.
                                </p>
                                <Link className="blog-card__link" to="/blog/por-que-repetimos-patrones-emocionales">Leer artículo</Link>
                            </div>
                        </article>

                        <article className="blog-card">
                            <div className="blog-card__image">
                                <img src="/assets/img/PRACSIS.jpeg" alt="Cuando entender no basta para cambiar" />
                            </div>
                            <div className="blog-card__body">
                                <span className="blog-card__meta">Cambio profundo</span>
                                <div className="blog-card__title">
                                    Cuando entender no basta para cambiar
                                </div>
                                <p>
                                    Comprender el origen de un patrón puede ser valioso, pero muchas veces no alcanza si la respuesta automática sigue intacta.
                                </p>
                                <Link className="blog-card__link" to="/blog/cuando-entender-no-basta">Leer artículo</Link>
                            </div>
                        </article>
                    </div>
                </div>
            </section>

            {/* CTA FINAL SECTION */}
            <section>
                <div className="container">
                    <div className="cta">
                        <h2>Comienza por comprender tu forma de funcionamiento mental</h2>
                        <p>
                            La autoevaluación permite observar cómo se organizan tus respuestas emocionales, cognitivas y fisiológicas frente al estrés.
                        </p>
                        <a className="btn btn-cta" href="https://clinicaequilibrar.cl/#/test-rfai">
                            Hacer Autoevaluación
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;
