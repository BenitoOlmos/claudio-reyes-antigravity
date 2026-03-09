import React from 'react';
import { Link } from 'react-router-dom';
import ArticleSidebar from './ArticleSidebar';

const Article2 = () => {
    return (
        <>
            <section className="hero" style={{ padding: '40px 0 36px' }}>
                <div className="container">
                    <div className="breadcrumbs" style={{ fontSize: '0.9rem', color: 'var(--muted)', marginBottom: '18px' }}>
                        <Link to="/" style={{ color: 'var(--primary)' }}>Inicio</Link> / <Link to="/blog" style={{ color: 'var(--primary)' }}>Blog</Link> / Por qué repetimos patrones emocionales
                    </div>

                    <div className="hero-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '38px', alignItems: 'center' }}>
                        <div>
                            <span className="eyebrow" style={{ display: 'inline-block', marginBottom: '14px', fontSize: '0.82rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: '#8d6e63', fontWeight: 700 }}>Psicología · Regulación emocional · Vínculos</span>
                            <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', lineHeight: 1.08, margin: '0 0 18px', letterSpacing: '-0.03em', maxWidth: '12ch' }}>Por qué repetimos patrones emocionales</h1>
                            <p className="lead" style={{ fontSize: '1.15rem', color: 'var(--muted)', margin: '0 0 26px', maxWidth: '60ch' }}>
                                Una mirada clínica y neuropsicológica sobre por qué ciertas reacciones, estilos vinculares o formas de malestar parecen volver una y otra vez a lo largo de nuestra vida.
                            </p>

                            <div className="meta" style={{ display: 'flex', flexWrap: 'wrap', gap: '14px 22px', fontSize: '0.92rem', color: 'var(--muted)', marginBottom: '26px' }}>
                                <span>Por Claudio Reyes</span>
                                <span>Lectura: 7–9 min</span>
                                <span>Actualizado para blog personal</span>
                            </div>

                            <a className="btn btn-primary" href="https://clinicaequilibrar.cl/#/test-rfai">Evaluar mis patrones de regulación</a>
                        </div>

                        <div className="hero-card" style={{ background: 'var(--surface)', border: '1px solid var(--line)', borderRadius: '18px', boxShadow: '0 10px 30px rgba(0,0,0,.06)', overflow: 'hidden' }}>
                            <img src="/assets/img/modelo.png" style={{ width: '100%', height: '100%', minHeight: '360px', objectFit: 'cover' }} alt="Repetición de patrones emocionales" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="article-wrap" style={{ padding: '16px 0 80px' }}>
                <div className="container" style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 760px) 280px', gap: '48px', alignItems: 'start', justifyContent: 'space-between' }}>

                    <article className="article" style={{ background: 'var(--surface)', border: '1px solid var(--line)', borderRadius: '18px', boxShadow: '0 10px 30px rgba(0,0,0,.06)', padding: 'clamp(24px, 4vw, 52px)' }}>
                        <p style={{ margin: '0 0 1.3em', fontSize: '1.05rem', color: '#2a2a27' }}>
                            Uno de los comentarios más frecuentes que escucho en el espacio clínico suena más o menos así:
                            "Sé que esta reacción no me hace bien, sé que esta persona no es para mí, entiendo todo, pero lo vuelvo a hacer".
                        </p>

                        <p style={{ margin: '0 0 1.3em', fontSize: '1.05rem', color: '#2a2a27' }}>
                            A simple vista, esa frustración parece una falla de voluntad o de carácter.
                            La persona se juzga duramente. Cree que, como ya entiende intelectualmente el problema,
                            el alivio debería llegar. Pero entender un patrón no desarma un patrón.
                        </p>

                        <div className="quote" style={{ margin: '2em 0', padding: '24px 24px 24px 26px', borderLeft: '4px solid var(--primary)', background: '#f2f4f2', borderRadius: '10px', color: '#2c2c29', fontSize: '1.08rem' }}>
                            No repetimos porque queramos sufrir. Repetimos porque nuestra mente, en algún punto de nuestra historia, encontró en esa repetición una forma de estar a salvo.
                        </div>

                        <p style={{ margin: '0 0 1.3em', fontSize: '1.05rem', color: '#2a2a27' }}>
                            Para comprender por qué volvemos a lugares emocionales que sabemos dolorosos,
                            necesitamos dejar de mirar el comportamiento desde la lógica y empezar a mirarlo desde la biología de la supervivencia.
                        </p>

                        <h2 id="certeza" style={{ fontSize: 'clamp(1.45rem, 2vw, 2rem)', lineHeight: 1.2, margin: '2.1em 0 0.7em', letterSpacing: '-0.02em', color: 'var(--text)' }}>El cerebro prefiere la certeza (aunque duela) a la incertidumbre</h2>

                        <p style={{ margin: '0 0 1.3em', fontSize: '1.05rem', color: '#2a2a27' }}>
                            Nuestro cerebro evolucionó para mantenernos vivos, no necesariamente felices. Para el sistema nervioso,
                            la principal tarea es anticipar problemas, regular la energía y reducir la amenaza.
                            ¿Cuál es la forma más económica (en términos de energía psíquica) de hacer eso?
                            Recurrir a mapas que ya conoce.
                        </p>

                        <p style={{ margin: '0 0 1.3em', fontSize: '1.05rem', color: '#2a2a27' }}>
                            Si una persona creció en un entorno donde la desconexión emocional o la imprevisibilidad eran la norma,
                            su cerebro construyó circuitos para lidiar con eso: hipervigilancia, sobreadaptación, autosuficiencia o dependencia ansiosa.
                            Esas respuestas no fueron errores, fueron su mejor intento de sobrevivir emocionalmente.
                        </p>

                        <p style={{ margin: '0 0 1.3em', fontSize: '1.05rem', color: '#2a2a27' }}>
                            Años después, cuando esa misma persona se enfrenta a situaciones similares (un vínculo que se distancia,
                            una exigencia laboral), el sistema reconoce la firma emocional e inmediatamente dispara la ruta aprendida.
                            El cerebro dice: "Conozco esto, sé cómo actuar".
                        </p>

                        <p style={{ margin: '0 0 1.3em', fontSize: '1.05rem', color: '#2a2a27' }}>
                            <strong>Por eso a menudo preferimos el dolor conocido: es un terreno que sabemos transitar, a diferencia de la angustia paralizante de lo desconocido.</strong>
                        </p>

                        <h2 id="marcador" style={{ fontSize: 'clamp(1.45rem, 2vw, 2rem)', lineHeight: 1.2, margin: '2.1em 0 0.7em', letterSpacing: '-0.02em', color: 'var(--text)' }}>El marcador somático: cuando el cuerpo se acuerda antes que la cabeza</h2>

                        <p style={{ margin: '0 0 1.3em', fontSize: '1.05rem', color: '#2a2a27' }}>
                            Los patrones no están guardados solo como recuerdos narrativos ("me pasó esto y pensé aquello").
                            Están grabados como respuestas interoceptivas y fisiológicas ("cuando ocurre esto, siento este peso en el vientre,
                            esta tensión en los hombros, y necesito defenderme así").
                        </p>

                        <p style={{ margin: '0 0 1.3em', fontSize: '1.05rem', color: '#2a2a27' }}>
                            Esta grabación ocurre muy rápido y sin pasar por el córtex prefrontal (el área racional del cerebro).
                            Es la amígdala la que escanea el entorno y detona la respuesta antes de que seamos conscientes.
                        </p>

                        <h3 style={{ fontSize: '1.2rem', margin: '1.8em 0 .6em' }}>Esto explica por qué:</h3>
                        <ul style={{ paddingLeft: '1.2rem', margin: '0 0 1.4em', fontSize: '1.05rem', color: '#2a2a27' }}>
                            <li style={{ marginBottom: '.55em' }}>Podemos "saber" que nuestra pareja no nos está criticando, pero reaccionamos como si un león estuviera frente a nosotros.</li>
                            <li style={{ marginBottom: '.55em' }}>Podemos "saber" que no necesitamos agradar a todos, pero ante una mirada seria en una reunión, experimentamos un pánico silencioso.</li>
                            <li style={{ marginBottom: '.55em' }}>Podemos "saber" que estamos a salvo, pero algo en el tono de voz de otra persona enciende nuestra ansiedad en un microsegundo.</li>
                        </ul>

                        <h2 id="desarmar" style={{ fontSize: 'clamp(1.45rem, 2vw, 2rem)', lineHeight: 1.2, margin: '2.1em 0 0.7em', letterSpacing: '-0.02em', color: 'var(--text)' }}>Cómo se desarma una repetición</h2>

                        <p style={{ margin: '0 0 1.3em', fontSize: '1.05rem', color: '#2a2a27' }}>
                            Entender que la repetición es fisiológica y de supervivencia nos quita de encima el peso terrible
                            de culparnos por no tener "fuerza de voluntad". Ese es siempre el primer paso: mirar el patrón
                            con menos juicio y con mucha más curiosidad científica y compasión clínica.
                        </p>

                        <p style={{ margin: '0 0 1.3em', fontSize: '1.05rem', color: '#2a2a27' }}>
                            Pero para cambiar un patrón que el cuerpo percibe como necesario para la vida se necesita algo particular:
                            <strong>una experiencia emocional e interoceptiva diferente, sostenida el tiempo suficiente para generar un nuevo circuito.</strong>
                        </p>

                        <p style={{ margin: '0 0 1.3em', fontSize: '1.05rem', color: '#2a2a27' }}>
                            Esa es la base de modelos como la <strong>Reprogramación Focalizada de Alto Impacto (RFAI)</strong>.
                            No se trata de recitar afirmaciones positivas ni de forzar el pensamiento a ser racional. La mente reacciona
                            a la seguridad, no al discurso.
                        </p>

                        <p style={{ margin: '0 0 1.3em', fontSize: '1.05rem', color: '#2a2a27' }}>
                            Para reprogramar necesitamos aprender a pausar cuando la alarma se enciende. Reorganizar el vínculo interno
                            con la amenaza que no es real hoy, aunque lo haya sido en la historia personal, e indicarle al sistema nervioso una ruta alternativa segura.
                        </p>

                        <div className="author-box" style={{ marginTop: '36px', padding: '24px', display: 'grid', gridTemplateColumns: '88px 1fr', gap: '18px', alignItems: 'center', background: 'var(--surface)', border: '1px solid var(--line)', borderRadius: 'var(--radius)' }}>
                            <div className="author-avatar" style={{ width: '88px', height: '88px', borderRadius: '50%', overflow: 'hidden', border: '1px solid var(--line)', background: '#eee' }}>
                                <img src="/assets/img/clinica.png" style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt="Claudio Reyes" />
                            </div>
                            <div>
                                <h4 style={{ margin: '0 0 6px', fontSize: '1.1rem' }}>Claudio Reyes</h4>
                                <p style={{ margin: 0, color: 'var(--muted)', fontSize: '0.98rem' }}>
                                    Psicólogo clínico y organizacional. Estudia cómo se estructuran nuestros mecanismos automáticos y elabora procesos concretos para reprogramarlos y acceder a mayor libertad y regulación emocional.
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

export default Article2;
