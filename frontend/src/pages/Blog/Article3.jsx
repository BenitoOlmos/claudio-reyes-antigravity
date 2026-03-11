import React from 'react';
import { Link } from 'react-router-dom';
import ArticleSidebar from './ArticleSidebar';
import SEO from '../../components/Shared/SEO';

const Article3 = () => {
    return (
        <>
            <SEO 
                title="Por qué no cambio si ya entendí el error" 
                description="Comprender el origen de un patrón puede ser valioso, pero por sí solo rara vez logra modificar una repetición arraigada. Por qué el cambio real exige algo más."
                image="https://www.origamis.cl/wp-content/uploads/2026/03/FOTOS-WEB.png"
                url="/blog/cuando-entender-no-basta"
            />
            <section className="hero" style={{ padding: '40px 0 36px' }}>
                <div className="container">
                    <div className="breadcrumbs" style={{ fontSize: '0.9rem', color: 'var(--muted)', marginBottom: '18px' }}>
                        <Link to="/" style={{ color: 'var(--primary)' }}>Inicio</Link> / <Link to="/blog" style={{ color: 'var(--primary)' }}>Blog</Link> / Por qué no cambio si ya entendí el error
                    </div>

                    <div className="hero-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '38px', alignItems: 'center' }}>
                        <div>
                            <span className="eyebrow" style={{ display: 'inline-block', marginBottom: '14px', fontSize: '0.82rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: '#8d6e63', fontWeight: 700 }}>Psicología · Trauma · Cambio Profundo</span>
                            <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', lineHeight: 1.08, margin: '0 0 18px', letterSpacing: '-0.03em', maxWidth: '12ch' }}>Por qué no cambio si ya entendí el error</h1>
                            <p className="lead" style={{ fontSize: '1.15rem', color: 'var(--muted)', margin: '0 0 26px', maxWidth: '60ch' }}>
                                Comprender el origen de un patrón puede ser valioso, pero por sí solo rara vez logra modificar una repetición arraigada. Por qué el cambio real exige algo más que reflexión personal.
                            </p>

                            <div className="meta" style={{ display: 'flex', flexWrap: 'wrap', gap: '14px 22px', fontSize: '0.92rem', color: 'var(--muted)', marginBottom: '26px' }}>
                                <span>Por Claudio Reyes</span>
                                <span>Lectura: 6–8 min</span>
                                <span>Actualizado para blog personal</span>
                            </div>

                            <a className="btn btn-primary" href="https://clinicaequilibrar.cl/#/test-rfai">Evaluar el sistema de defensas</a>
                        </div>

                        <div className="hero-card" style={{ background: 'var(--surface)', border: '1px solid var(--line)', borderRadius: '18px', boxShadow: '0 10px 30px rgba(0,0,0,.06)', overflow: 'hidden' }}>
                            <img src="https://www.origamis.cl/wp-content/uploads/2026/03/FOTOS-WEB.png" style={{ width: '100%', height: '100%', minHeight: '360px', objectFit: 'cover' }} alt="Cuando entender no basta" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="article-wrap" style={{ padding: '16px 0 80px' }}>
                <div className="container" style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 760px) 280px', gap: '48px', alignItems: 'start', justifyContent: 'space-between' }}>

                    <article className="article" style={{ background: 'var(--surface)', border: '1px solid var(--line)', borderRadius: '18px', boxShadow: '0 10px 30px rgba(0,0,0,.06)', padding: 'clamp(24px, 4vw, 52px)' }}>
                        <p style={{ margin: '0 0 1.3em', fontSize: '1.05rem', color: '#2a2a27' }}>
                            Vivimos en una cultura hiperpsicologizada. Una enorme cantidad de personas tiene la habilidad de
                            realizar interpretaciones brillantes sobre su propia vida: entienden el estilo de apego que adquirieron
                            con sus padres, comprenden los déficits que arrastran de su historia y verbalizan a la perfección
                            por qué hoy actúan de la manera en que no desean actuar.
                        </p>

                        <p style={{ margin: '0 0 1.3em', fontSize: '1.05rem', color: '#2a2a27' }}>
                            Tienen el diagnóstico completo. Tienen la narrativa. Tienen el archivo histórico de su sufrimiento.
                            Y sin embargo, vuelven a caer sistemáticamente en la misma trampa emocional frente a eventos de la vida diaria, el trabajo o sus parejas.
                        </p>

                        <div className="quote" style={{ margin: '2em 0', padding: '24px 24px 24px 26px', borderLeft: '4px solid var(--primary)', background: '#f2f4f2', borderRadius: '10px', color: '#2c2c29', fontSize: '1.08rem' }}>
                            El insight (la comprensión de por qué somos como somos) fue vendido durante décadas como el clímax de la psicoterapia. Pero entender no es el final de la intervención. A menudo es solo un preámbulo necesario.
                        </div>

                        <h2 id="limitacion" style={{ fontSize: 'clamp(1.45rem, 2vw, 2rem)', lineHeight: 1.2, margin: '2.1em 0 0.7em', letterSpacing: '-0.02em', color: 'var(--text)' }}>La limitación del córtex prefrontal</h2>

                        <p style={{ margin: '0 0 1.3em', fontSize: '1.05rem', color: '#2a2a27' }}>
                            Cuando conversamos, explicamos nuestros problemas o entendemos teóricamente nuestras carencias,
                            estamos activando mayormente nuestra corteza prefrontal y las áreas responsables del lenguaje y el razonamiento.
                        </p>

                        <p style={{ margin: '0 0 1.3em', fontSize: '1.05rem', color: '#2a2a27' }}>
                            Eso brinda calma, porque los seres humanos le tenemos terror a lo que no podemos explicar. Ponerle palabras
                            al dolor le otorga sentido y reduce nuestra ansiedad a corto plazo. No obstante, las conductas más defensivas,
                            las heridas traumáticas y las emociones desreguladas (patrones) no están sostenidas predominantemente allí.
                        </p>

                        <p style={{ margin: '0 0 1.3em', fontSize: '1.05rem', color: '#2a2a27' }}>
                            Están codificadas en áreas subcorticales del cerebro, responsables de las emociones impulsivas
                            y las reacciones de supervivencia (huir, luchar o paralizarse) ante el estrés.
                        </p>

                        <p style={{ margin: '0 0 1.3em', fontSize: '1.05rem', color: '#2a2a27' }}>
                            El razonamiento viaja lento, la supervivencia viaja rápido. No se puede razonar eficazmente a un sistema nervioso alterado.
                            Toda esa hermosa comprensión intelectual construida durante años simplemente no está accesible en los milisegundos
                            donde la amígdala captura el control y desencadena la reacción que habíamos jurado no repetir.
                        </p>

                        <h2 id="reprogramar" style={{ fontSize: 'clamp(1.45rem, 2vw, 2rem)', lineHeight: 1.2, margin: '2.1em 0 0.7em', letterSpacing: '-0.02em', color: 'var(--text)' }}>Entonces, ¿cómo cambiamos?</h2>

                        <p style={{ margin: '0 0 1.3em', fontSize: '1.05rem', color: '#2a2a27' }}>
                            Existen ciertos ingredientes clínicos imprescindibles para ir un peldaño más adentro y conseguir que el
                            insight se convierta en una modificación funcional.
                        </p>

                        <h3 style={{ fontSize: '1.2rem', margin: '1.8em 0 .6em' }}>1. Experiencia corporal desconfirmatoria</h3>
                        <p style={{ margin: '0 0 1.3em', fontSize: '1.05rem', color: '#2a2a27' }}>
                            Necesitamos estar en presencia del estímulo que causa nuestro miedo, dolor o ansiedad profunda, y al mismo tiempo mantener un anclaje suficiente en la regulación para que el cerebro reciba este mensaje fundamental: <em>"Aunque esto solía ser un escenario de peligro absoluto vital para mí, hoy puedo tolerarlo y seguir a salvo en este cuerpo sintiéndolo"</em>.
                        </p>

                        <h3 style={{ fontSize: '1.2rem', margin: '1.8em 0 .6em' }}>2. Interrumpir el circuito de repetición</h3>
                        <p style={{ margin: '0 0 1.3em', fontSize: '1.05rem', color: '#2a2a27' }}>
                            Cualquier modelo de transformación, como el de Reprogramación Focalizada de Alto Impacto (RFAI), enseña a interrumpir drástica e intencionalmente el disparo repetitivo justo antes del punto de no retorno. Esto fomenta neuroplasticidad pura: las neuronas que dejan de dispararse juntas terminan debilitando sus conexiones consolidadas.
                        </p>

                        <h3 style={{ fontSize: '1.2rem', margin: '1.8em 0 .6em' }}>3. Ensayo de nuevas conductas asociadas a seguridad, no esfuerzo</h3>
                        <p style={{ margin: '0 0 1.3em', fontSize: '1.05rem', color: '#2a2a27' }}>
                            Sustituir una repetición basada en el trauma no solo implica frenarla. Resulta imperante tejer una repetición constructiva basada en un estado relacional positivo. Los patrones no desaparecen dejando vacíos neutrales, los patrones deben ser reemplazados sistémicamente.
                        </p>

                        <p style={{ margin: '0 0 1.3em', fontSize: '1.05rem', color: '#2a2a27' }}>
                            Si llevamos el tiempo suficiente "comprendiéndonos" sin haber cambiado sustantivamente el dolor persistente que arrastramos,
                            es hora de considerar que tal vez comprender ya cumplió su fase inicial y el paso decisivo será atrevernos
                            a entrenar el cuerpo y la emoción en una frecuencia distinta.
                        </p>

                        <div className="author-box" style={{ marginTop: '36px', padding: '24px', display: 'grid', gridTemplateColumns: '88px 1fr', gap: '18px', alignItems: 'center', background: 'var(--surface)', border: '1px solid var(--line)', borderRadius: 'var(--radius)' }}>
                            <div className="author-avatar" style={{ width: '88px', height: '88px', borderRadius: '50%', overflow: 'hidden', border: '1px solid var(--line)', background: '#eee' }}>
                                <img src="/assets/img/clinica.png" style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt="Claudio Reyes" />
                            </div>
                            <div>
                                <h4 style={{ margin: '0 0 6px', fontSize: '1.1rem' }}>Claudio Reyes</h4>
                                <p style={{ margin: 0, color: 'var(--muted)', fontSize: '0.98rem' }}>
                                    Acompañando procesos complejos, orientados a interrumpir y reprogramar las secuencias automáticas que aprendimos por trauma o esfuerzo temprano. Foco en recuperar la seguridad funcional mental.
                                </p>
                            </div>
                        </div>
                    </article>

                    <ArticleSidebar />
                </div>
            </section>

            <style jsx>{`
      @media (max-width: 1024px) {
        .container[style] {
          grid-template-columns: 1fr !important;
        }
        .sidebar {
          position: static !important;
        }
      }
      `}</style>
        </>
    );
};

export default Article3;
