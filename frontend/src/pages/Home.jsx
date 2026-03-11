import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/Shared/SEO';

const Home = () => {
  return (
    <>
      <SEO 
        title="Inicio" 
        description="Psicólogo clínico y organizacional. Especialista en Reprogramación Focalizada de Alto Impacto (RFAI), bienestar emocional, trauma y liderazgo."
        url="/"
      />
      {/* HERO SECTION */}
      <section className="hero">
        <div className="container">
          <div className="hero-grid">
            <div className="hero-copy">
              <h1>Psicología clínica y organizacional desde una mirada transdisciplinaria.</h1>

              <div className="hero-divider"></div>

              <p className="lead">
                Psicólogo clínico y organizacional. Líder de una decena de equipos de trabajo.
                Especialista en el acompañamiento de procesos de crisis en personas, líderes y equipos,
                el desarrollo de la inteligencia socioemocional y la transformación de estructuras de pensamiento y sentido.
              </p>

              <p className="lead">
                Este sitio reúne mi trabajo en Clínica Equilibrar, PRACSIS, IPA Ingeniería,
                la Reprogramación Focalizada de Alto Impacto, el podcast Arquitectura Evolutiva de la Consciencia
                y una línea de reflexión sobre salud mental y organizaciones.
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
              <img src="https://www.origamis.cl/wp-content/uploads/2026/03/Fotografia-3-2.png" alt="Claudio Reyes retrato profesional" />
            </div>
          </div>

          <div className="stats">
            <div className="stat">
              <strong>+15 años</strong>
              <span>De experiencia como psicólogo clínico y organizacional</span>
            </div>
            <div className="stat">
              <strong>+22.000 horas</strong>
              <span>De asesoría a personas y organizaciones</span>
            </div>
            <div className="stat">
              <strong>+100 talleres</strong>
              <span>Realizados en distintos contextos y equipos</span>
            </div>
            <div className="stat">
              <strong>+20 equipos</strong>
              <span>Liderados en procesos de trabajo y transformación</span>
            </div>
          </div>
        </div>
      </section>

      {/* MODELO SECTION */}
      <section id="modelo" className="section-soft">
        <div className="container split">
          <div className="media-panel">
            <img src="https://www.origamis.cl/wp-content/uploads/2026/03/ChatGPT-Image-24-feb-2026-13_44_44.png" alt="Modelo de trabajo Claudio Reyes" />
          </div>

          <div>
            <span className="eyebrow">Modelo de trabajo</span>
            <h2>Reprogramación Focalizada de Alto Impacto</h2>

            <p className="lead">
              Mi trabajo integra psicología clínica, neurociencia, transdisciplina,
              regulación emocional y comprensión de sistemas humanos complejos.
            </p>

            <p>
              El foco no está solo en reducir síntomas, sino en comprender cómo una persona
              o un equipo organizan su experiencia, sostienen presión, repiten patrones
              y pueden abrir nuevas posibilidades de funcionamiento.
            </p>

            <p>
              La Reprogramación Focalizada de Alto Impacto busca intervenir aprendizajes profundos,
              reorganizar respuestas automáticas y acompañar transformaciones con mayor precisión.
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
                Si buscar entender cómo funciona tu mente y reprogramar aquellos aprendizajes que te limitan.
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
            <img src="https://www.origamis.cl/wp-content/uploads/2026/03/RFAI-1-2.png" alt="Trabajo clínico y autoevaluación" />
          </div>

          <div>
            <span className="eyebrow">Clínica Equilibrar</span>
            <h2>Una lectura más amplia del funcionamiento de tu mente.</h2>

            <p className="lead">
              En Clínica Equilibrar desarrollo un trabajo transdisciplinario orientado a salud mental,
              regulación emocional y transformación de patrones automáticos de funcionamiento.
            </p>

            <p>
              El proceso clínico busca ofrecer una lectura más amplia del funcionamiento de tu mente,
              integrando dimensiones emocionales, cognitivas, fisiológicas y relacionales para comprender con mayor precisión el malestar.
            </p>

            <p>
              La autoevaluación permite comenzar con un primer mapa de funcionamiento, útil para orientar un trabajo terapéutico más focalizado.
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
              <span>Contención para equipos en crisis</span>
              <span>Entrenamientos en liderazgo socioemocional</span>
              <span>Coaching para líderes y jefaturas</span>
              <span>Fortalecimiento de la productividad y del trabajo en equipo</span>
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
            <img src="https://www.origamis.cl/wp-content/uploads/2026/03/IMG_1289.JPG.jpeg" alt="Trabajo con organizaciones y equipos" />
          </div>
        </div>
      </section>

      {/* PODCAST SECTION */}
      <section id="podcast" className="section-soft">
        <div className="container split">
          <div>
            <span className="eyebrow">Podcast</span>
            <h2>Arquitectura Evolutiva de la Consciencia</h2>

            <p className="lead">
              Un espacio para conversar sobre mente, trauma, regulación emocional,
              transformación personal, sentido y desarrollo humano.
            </p>

            <p>
              El podcast reúne reflexiones y conversaciones que amplían esta mirada transdisciplinaria,
              y funciona como una puerta de entrada para quienes quieren acercarse al trabajo desde las ideas.
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
            <iframe
              className="podcast-embed"
              src="https://open.spotify.com/embed/show/5qVcMLQ7yffuS7VA3jA6Sh"
              allowFullScreen
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              title="Podcast Arquitectura Evolutiva de la Consciencia en Spotify"
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
                <img src="https://www.origamis.cl/wp-content/uploads/2026/03/Fotografia-3-2.png" alt="Los cinco niveles de evolución de la mente humana" />
              </div>
              <div className="blog-card__body">
                <span className="blog-card__meta">Psicología</span>
                <div className="blog-card__title">Los cinco niveles de evolución de la mente humana</div>
                <p>
                  Un mapa para comprender cómo pasamos de la reactividad a una vida con mayor consciencia y libertad interior.
                </p>
                <Link className="blog-card__link" to="/blog/los-cinco-niveles-de-evolucion-de-la-mente">Leer artículo</Link>
              </div>
            </article>

            <article className="blog-card">
              <div className="blog-card__image">
                <img src="https://www.origamis.cl/wp-content/uploads/2026/03/ChatGPT-Image-24-feb-2026-13_44_44.png" alt="Por qué repetimos lo que hicieron nuestros padres" />
              </div>
              <div className="blog-card__body">
                <span className="blog-card__meta">Regulación emocional</span>
                <div className="blog-card__title">Por qué repetimos lo que hicieron nuestros padres</div>
                <p>
                  Una mirada clínica sobre cómo ciertos aprendizajes familiares siguen influyendo en nuestras decisiones, vínculos y respuestas emocionales.
                </p>
                <Link className="blog-card__link" to="/blog/por-que-repetimos-patrones-emocionales">Leer artículo</Link>
              </div>
            </article>

            <article className="blog-card">
              <div className="blog-card__image">
                <img src="https://www.origamis.cl/wp-content/uploads/2026/03/FOTOS-WEB.png" alt="Por qué no cambio si ya entendí el error" />
              </div>
              <div className="blog-card__body">
                <span className="blog-card__meta">Cambio profundo</span>
                <div className="blog-card__title">Por qué no cambio si ya entendí el error</div>
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
