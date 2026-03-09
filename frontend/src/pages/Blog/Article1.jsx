import React from 'react';
import { Link } from 'react-router-dom';
import ArticleSidebar from './ArticleSidebar';

const Article1 = () => {
    return (
        <>
            <section className="hero" style={{ padding: '40px 0 36px' }}>
                <div className="container">
                    <div className="breadcrumbs" style={{ fontSize: '0.9rem', color: 'var(--muted)', marginBottom: '18px' }}>
                        <Link to="/" style={{ color: 'var(--primary)' }}>Inicio</Link> / <Link to="/blog" style={{ color: 'var(--primary)' }}>Blog</Link> / Los cinco niveles de evolución de la mente humana
                    </div>

                    <div className="hero-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '38px', alignItems: 'center' }}>
                        <div>
                            <span className="eyebrow" style={{ display: 'inline-block', marginBottom: '14px', fontSize: '0.82rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: '#8d6e63', fontWeight: 700 }}>Psicología · Regulación emocional · Cambio profundo</span>
                            <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', lineHeight: 1.08, margin: '0 0 18px', letterSpacing: '-0.03em', maxWidth: '12ch' }}>Los cinco niveles de evolución de la mente humana</h1>
                            <p className="lead" style={{ fontSize: '1.15rem', color: 'var(--muted)', margin: '0 0 26px', maxWidth: '60ch' }}>
                                Una forma de comprender cómo pasamos de reaccionar automáticamente a vivir con mayor conciencia, regulación y libertad interior.
                            </p>

                            <div className="meta" style={{ display: 'flex', flexWrap: 'wrap', gap: '14px 22px', fontSize: '0.92rem', color: 'var(--muted)', marginBottom: '26px' }}>
                                <span>Por Claudio Reyes</span>
                                <span>Lectura: 8–10 min</span>
                                <span>Actualizado para blog personal</span>
                            </div>

                            <a className="btn btn-primary" href="https://clinicaequilibrar.cl/#/test-rfai">Descubrir mi perfil en el test RFAI</a>
                        </div>

                        <div className="hero-card" style={{ background: 'var(--surface)', border: '1px solid var(--line)', borderRadius: '18px', boxShadow: '0 10px 30px rgba(0,0,0,.06)', overflow: 'hidden' }}>
                            <img src="/assets/img/clinica.png" style={{ width: '100%', height: '100%', minHeight: '360px', objectFit: 'cover' }} alt="Mente evolución" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="article-wrap" style={{ padding: '16px 0 80px' }}>
                <div className="container" style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 760px) 280px', gap: '48px', alignItems: 'start', justifyContent: 'space-between' }}>

                    <article className="article" style={{ background: 'var(--surface)', border: '1px solid var(--line)', borderRadius: '18px', boxShadow: '0 10px 30px rgba(0,0,0,.06)', padding: 'clamp(24px, 4vw, 52px)' }}>
                        <p style={{ margin: '0 0 1.3em', fontSize: '1.05rem', color: '#2a2a27' }}>
                            Durante años he trabajado con personas que desean cambiar aspectos profundos de su vida:
                            ansiedad persistente, vínculos que se repiten, dificultad para tomar decisiones, agotamiento,
                            sensación de desconexión o una impresión constante de estar sosteniendo demasiado por dentro.
                        </p>

                        <p style={{ margin: '0 0 1.3em', fontSize: '1.05rem', color: '#2a2a27' }}>
                            Con el tiempo he visto algo una y otra vez: muchas personas no están atrapadas por falta de voluntad.
                            Están atrapadas por la forma en que su mente aprendió a organizarse para sobrevivir.
                        </p>

                        <p style={{ margin: '0 0 1.3em', fontSize: '1.05rem', color: '#2a2a27' }}>
                            Nuestro cerebro automatiza respuestas. Eso es útil. Gracias a esa capacidad aprendemos,
                            anticipamos, nos protegemos y seguimos funcionando incluso en contextos difíciles.
                            Pero cuando esas respuestas automáticas nacen del estrés, del trauma o de una adaptación prolongada,
                            pueden convertirse en patrones rígidos que terminan empobreciendo la experiencia de vivir.
                        </p>

                        <div className="quote" style={{ margin: '2em 0', padding: '24px 24px 24px 26px', borderLeft: '4px solid var(--primary)', background: '#f2f4f2', borderRadius: '10px', color: '#2c2c29', fontSize: '1.08rem' }}>
                            Cambiar no siempre consiste en “pensar distinto”. A veces consiste en reconocer desde qué nivel de funcionamiento mental estamos viviendo.
                        </div>

                        <p style={{ margin: '0 0 1.3em', fontSize: '1.05rem', color: '#2a2a27' }}>
                            A partir de esa observación, propongo ordenar la experiencia humana en cinco niveles.
                            No se trata de una etiqueta cerrada, sino de un mapa. Un mapa para comprender dónde estamos,
                            por qué repetimos ciertas formas de reaccionar y cómo podría comenzar un cambio real.
                        </p>

                        <h2 id="nivel1" style={{ fontSize: 'clamp(1.45rem, 2vw, 2rem)', lineHeight: 1.2, margin: '2.1em 0 0.7em', letterSpacing: '-0.02em', color: 'var(--text)' }}>1. Mente reactiva</h2>

                        <p style={{ margin: '0 0 1.3em', fontSize: '1.05rem', color: '#2a2a27' }}>
                            En este nivel, la vida psíquica está dominada por la reacción. La persona siente mucho,
                            piensa rápido, se defiende antes de comprender y muchas veces vive con la sensación de que
                            el entorno determina casi por completo lo que le ocurre.
                        </p>

                        <p style={{ margin: '0 0 1.3em', fontSize: '1.05rem', color: '#2a2a27' }}>
                            La mente reactiva no es sinónimo de debilidad. De hecho, suele aparecer en personas que han tenido
                            que adaptarse a contextos exigentes, impredecibles o emocionalmente intensos. El problema no es que exista,
                            sino que se vuelva el modo predominante de funcionamiento.
                        </p>

                        <p style={{ margin: '0 0 1.3em', fontSize: '1.05rem', color: '#2a2a27' }}>
                            Cuando esto ocurre, se vuelve más difícil pausar, observar y elegir. La persona responde antes de procesar.
                            Interpreta desde la amenaza, desde la urgencia o desde una sensibilidad acumulada que no siempre logra traducir en palabras.
                        </p>

                        <p style={{ margin: '0 0 1.3em', fontSize: '1.05rem', color: '#2a2a27' }}>
                            Desde una mirada neuropsicológica, aquí suele haber predominio de circuitos ligados a la supervivencia,
                            especialmente respuestas límbicas rápidas asociadas a vigilancia, impulsividad o sobrecarga.
                        </p>

                        <h3 style={{ fontSize: '1.2rem', margin: '1.8em 0 .6em' }}>Señales frecuentes de este nivel</h3>
                        <ul style={{ paddingLeft: '1.2rem', margin: '0 0 1.4em', fontSize: '1.05rem', color: '#2a2a27' }}>
                            <li style={{ marginBottom: '.55em' }}>Impulsividad o dificultad para pausar</li>
                            <li style={{ marginBottom: '.55em' }}>Confusión entre intensidad emocional y realidad objetiva</li>
                            <li style={{ marginBottom: '.55em' }}>Alta sensibilidad a críticas, rechazo o incertidumbre</li>
                            <li style={{ marginBottom: '.55em' }}>Sensación de vivir “apagando incendios” internos o externos</li>
                            <li style={{ marginBottom: '.55em' }}>Relaciones marcadas por tensión, anticipación o defensa</li>
                        </ul>

                        <h2 id="nivel2" style={{ fontSize: 'clamp(1.45rem, 2vw, 2rem)', lineHeight: 1.2, margin: '2.1em 0 0.7em', letterSpacing: '-0.02em', color: 'var(--text)' }}>2. Mente controlada</h2>

                        <p style={{ margin: '0 0 1.3em', fontSize: '1.05rem', color: '#2a2a27' }}>
                            El segundo nivel aparece cuando la persona ya no quiere seguir siendo arrastrada por sus reacciones
                            y comienza a ejercer control. Aprende a contenerse, a sostenerse, a cumplir, a organizar.
                            Desde afuera suele verse funcional, responsable e incluso admirable.
                        </p>

                        <p style={{ margin: '0 0 1.3em', fontSize: '1.05rem', color: '#2a2a27' }}>
                            Sin embargo, la mente controlada no siempre está en paz. Muchas veces el precio de ese orden externo
                            es una tensión interna persistente. La persona regula, sí, pero a través del esfuerzo.
                            No porque haya integrado profundamente su mundo interno, sino porque siente que no puede darse el lujo de desbordarse.
                        </p>

                        <p style={{ margin: '0 0 1.3em', fontSize: '1.05rem', color: '#2a2a27' }}>
                            Este es un nivel muy común en personas altamente exigentes, profesionales, cuidadores, líderes o personas
                            que tempranamente aprendieron a sostener lo que otros no podían sostener.
                        </p>

                        <h3 style={{ fontSize: '1.2rem', margin: '1.8em 0 .6em' }}>Fortalezas y riesgos</h3>
                        <ul style={{ paddingLeft: '1.2rem', margin: '0 0 1.4em', fontSize: '1.05rem', color: '#2a2a27' }}>
                            <li style={{ marginBottom: '.55em' }}>Fortaleza: mayor estructura, disciplina y control de impulsos</li>
                            <li style={{ marginBottom: '.55em' }}>Riesgo: hipercontrol, rigidez, autoexigencia y desconexión emocional</li>
                            <li style={{ marginBottom: '.55em' }}>Fortaleza: capacidad de cumplir aun bajo presión</li>
                            <li style={{ marginBottom: '.55em' }}>Riesgo: agotamiento silencioso, insomnio, somatización o sensación de no poder soltar</li>
                        </ul>

                        <p style={{ margin: '0 0 1.3em', fontSize: '1.05rem', color: '#2a2a27' }}>
                            En términos clínicos, este nivel puede confundirse con bienestar solo porque “la persona funciona”.
                            Pero funcionar no siempre significa habitarse con libertad.
                        </p>

                        <h2 id="nivel3" style={{ fontSize: 'clamp(1.45rem, 2vw, 2rem)', lineHeight: 1.2, margin: '2.1em 0 0.7em', letterSpacing: '-0.02em', color: 'var(--text)' }}>3. Mente consciente</h2>

                        <p style={{ margin: '0 0 1.3em', fontSize: '1.05rem', color: '#2a2a27' }}>
                            Algo cambia de verdad cuando la persona deja de preguntarse solamente cómo controlar lo que siente
                            y empieza a observar con más profundidad cómo está construida su experiencia.
                        </p>

                        <p style={{ margin: '0 0 1.3em', fontSize: '1.05rem', color: '#2a2a27' }}>
                            La mente consciente no solo regula; también se observa. Empieza a identificar patrones,
                            reconoce la historia emocional detrás de sus reacciones y logra hacer una pausa más honesta frente a sí misma.
                        </p>

                        <p style={{ margin: '0 0 1.3em', fontSize: '1.05rem', color: '#2a2a27' }}>
                            Aquí aparece la metacognición: la capacidad de pensar sobre lo que pensamos, de mirar nuestros hábitos mentales,
                            nuestros estilos vinculares, nuestras defensas y nuestras repeticiones.
                        </p>

                        <p style={{ margin: '0 0 1.3em', fontSize: '1.05rem', color: '#2a2a27' }}>
                            Este nivel suele abrirse en procesos terapéuticos bien acompañados, en experiencias significativas de crisis,
                            en momentos de honestidad profunda o cuando la persona se cansa de repetir y está preparada para mirar.
                        </p>

                        <div className="quote" style={{ margin: '2em 0', padding: '24px 24px 24px 26px', borderLeft: '4px solid var(--primary)', background: '#f2f4f2', borderRadius: '10px', color: '#2c2c29', fontSize: '1.08rem' }}>
                            La consciencia no elimina automáticamente los patrones, pero cambia radicalmente la posición desde la cual los habitamos.
                        </div>

                        <h3 style={{ fontSize: '1.2rem', margin: '1.8em 0 .6em' }}>Lo que comienza a ocurrir aquí</h3>
                        <ul style={{ paddingLeft: '1.2rem', margin: '0 0 1.4em', fontSize: '1.05rem', color: '#2a2a27' }}>
                            <li style={{ marginBottom: '.55em' }}>Mayor capacidad de autoobservación sin juicio inmediato</li>
                            <li style={{ marginBottom: '.55em' }}>Comprensión de la relación entre historia personal y funcionamiento actual</li>
                            <li style={{ marginBottom: '.55em' }}>Lenguaje más preciso para nombrar emociones, tensiones y necesidades</li>
                            <li style={{ marginBottom: '.55em' }}>Apertura a un cambio menos superficial</li>
                        </ul>

                        <h2 id="nivel4" style={{ fontSize: 'clamp(1.45rem, 2vw, 2rem)', lineHeight: 1.2, margin: '2.1em 0 0.7em', letterSpacing: '-0.02em', color: 'var(--text)' }}>4. Mente reprogramada</h2>

                        <p style={{ margin: '0 0 1.3em', fontSize: '1.05rem', color: '#2a2a27' }}>
                            Este es el punto decisivo. Muchas personas alcanzan cierto grado de comprensión, pero no necesariamente logran transformar
                            aquello que comprenden. Entienden el patrón, pero siguen reaccionando igual. Saben de dónde viene,
                            pero no consiguen modificarlo de forma estable.
                        </p>

                        <p style={{ margin: '0 0 1.3em', fontSize: '1.05rem', color: '#2a2a27' }}>
                            La mente reprogramada implica un paso más profundo: no solo observar el patrón, sino intervenirlo.
                            Modificar las asociaciones automáticas, reorganizar la respuesta interna y consolidar nuevas vías de funcionamiento.
                        </p>

                        <p style={{ margin: '0 0 1.3em', fontSize: '1.05rem', color: '#2a2a27' }}>
                            Aquí entran en juego procesos de neuroplasticidad, repetición dirigida, experiencias emocionales correctivas,
                            prácticas somáticas, trabajo terapéutico profundo y métodos específicamente diseñados para alterar el circuito aprendido.
                        </p>

                        <p style={{ margin: '0 0 1.3em', fontSize: '1.05rem', color: '#2a2a27' }}>
                            Este nivel dialoga de forma directa con la lógica de la <strong>Reprogramación Focalizada de Alto Impacto (RFAI)</strong>:
                            no quedarse solo en el insight, sino avanzar hacia una transformación que toque la base automática del problema.
                        </p>

                        <h3 style={{ fontSize: '1.2rem', margin: '1.8em 0 .6em' }}>Qué empieza a cambiar</h3>
                        <ul style={{ paddingLeft: '1.2rem', margin: '0 0 1.4em', fontSize: '1.05rem', color: '#2a2a27' }}>
                            <li style={{ marginBottom: '.55em' }}>Disminuye la reactividad frente a disparadores habituales</li>
                            <li style={{ marginBottom: '.55em' }}>Aumenta la sensación de libertad frente a viejos patrones</li>
                            <li style={{ marginBottom: '.55em' }}>Se reorganiza la interpretación de ciertas experiencias</li>
                            <li style={{ marginBottom: '.55em' }}>La persona ya no solo “entiende”, también responde distinto</li>
                        </ul>

                        <h2 id="nivel5" style={{ fontSize: 'clamp(1.45rem, 2vw, 2rem)', lineHeight: 1.2, margin: '2.1em 0 0.7em', letterSpacing: '-0.02em', color: 'var(--text)' }}>5. Mente generativa</h2>

                        <p style={{ margin: '0 0 1.3em', fontSize: '1.05rem', color: '#2a2a27' }}>
                            Cuando el psiquismo ya no está capturado por la amenaza, el hipercontrol o la repetición defensiva,
                            aparece un modo de vida más expansivo. No perfecto. No idealizado. Pero sí más disponible para crear,
                            vincularse, disfrutar y aportar.
                        </p>

                        <p style={{ margin: '0 0 1.3em', fontSize: '1.05rem', color: '#2a2a27' }}>
                            La mente generativa no vive solo para protegerse. Vive también para construir.
                            Recupera energía para imaginar, para decidir con más coherencia, para poner el talento al servicio de algo con sentido.
                        </p>

                        <p style={{ margin: '0 0 1.3em', fontSize: '1.05rem', color: '#2a2a27' }}>
                            En este nivel se fortalece la creatividad, la conexión con otros, la capacidad de colaborar, la percepción de propósito
                            y una relación menos violenta con el propio mundo interno.
                        </p>

                        <p style={{ margin: '0 0 1.3em', fontSize: '1.05rem', color: '#2a2a27' }}>
                            Tal vez la mejor forma de describirlo sea esta: la persona deja de vivir principalmente desde la defensa
                            y comienza a vivir desde una forma más integrada de presencia.
                        </p>

                        <h2 id="cambio" style={{ fontSize: 'clamp(1.45rem, 2vw, 2rem)', lineHeight: 1.2, margin: '2.1em 0 0.7em', letterSpacing: '-0.02em', color: 'var(--text)' }}>Cómo se produce el cambio real</h2>

                        <p style={{ margin: '0 0 1.3em', fontSize: '1.05rem', color: '#2a2a27' }}>
                            Cambiar no es solo decidir. Tampoco es únicamente comprender. En muchos casos, cambiar exige una intervención
                            suficientemente profunda como para alterar la organización automática de la experiencia.
                        </p>

                        <p style={{ margin: '0 0 1.3em', fontSize: '1.05rem', color: '#2a2a27' }}>
                            Eso implica trabajar a varios niveles al mismo tiempo: cognitivo, emocional, corporal, relacional y narrativo.
                            Por eso los cambios duraderos rara vez se producen con una sola herramienta.
                        </p>

                        <p style={{ margin: '0 0 1.3em', fontSize: '1.05rem', color: '#2a2a27' }}>
                            Algunas personas necesitan primero estabilizar su sistema. Otras necesitan poner lenguaje donde antes había silencio.
                            Otras requieren revisar trauma, repetición o estrategias de sobreadaptación. Y otras, una vez que logran verse con claridad,
                            necesitan un método que las ayude a consolidar una nueva forma de funcionar.
                        </p>

                        <p style={{ margin: '0 0 1.3em', fontSize: '1.05rem', color: '#2a2a27' }}>
                            Ahí es donde un buen mapa resulta valioso: no para encasillar a la persona, sino para orientar el trabajo con mayor precisión.
                        </p>

                        <h2 id="cierre" style={{ fontSize: 'clamp(1.45rem, 2vw, 2rem)', lineHeight: 1.2, margin: '2.1em 0 0.7em', letterSpacing: '-0.02em', color: 'var(--text)' }}>Una reflexión final</h2>

                        <p style={{ margin: '0 0 1.3em', fontSize: '1.05rem', color: '#2a2a27' }}>
                            Tal vez no estés fallando. Tal vez estés operando desde un nivel de organización mental que alguna vez fue necesario,
                            pero que hoy ya no alcanza para sostener la vida que quieres construir.
                        </p>

                        <p style={{ margin: '0 0 1.3em', fontSize: '1.05rem', color: '#2a2a27' }}>
                            A veces el primer paso no es exigirse más, sino entender mejor desde dónde uno está funcionando.
                            Y desde ahí, empezar un proceso serio de transformación.
                        </p>

                        <p style={{ margin: '0 0 1.3em', fontSize: '1.05rem', color: '#2a2a27' }}>
                            Si este tema resuena contigo, puedes comenzar observando tu perfil actual y abrir una conversación más precisa
                            sobre lo que tu mente aprendió a hacer para protegerte.
                        </p>

                        <p style={{ margin: '0 0 1.3em', fontSize: '1.05rem', color: '#2a2a27' }}>
                            <a className="btn btn-primary" href="https://clinicaequilibrar.cl/#/test-rfai">Hacer el test RFAI</a>
                        </p>

                        <div className="author-box" style={{ marginTop: '36px', padding: '24px', display: 'grid', gridTemplateColumns: '88px 1fr', gap: '18px', alignItems: 'center', background: 'var(--surface)', border: '1px solid var(--line)', borderRadius: 'var(--radius)' }}>
                            <div className="author-avatar" style={{ width: '88px', height: '88px', borderRadius: '50%', overflow: 'hidden', border: '1px solid var(--line)', background: '#eee' }}>
                                <img src="/assets/img/clinica.png" style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt="Claudio Reyes" />
                            </div>
                            <div>
                                <h4 style={{ margin: '0 0 6px', fontSize: '1.1rem' }}>Claudio Reyes</h4>
                                <p style={{ margin: 0, color: 'var(--muted)', fontSize: '0.98rem' }}>
                                    Psicólogo clínico y organizacional. Desarrolla modelos de intervención enfocados en regulación,
                                    reprogramación de patrones automáticos y transformación profunda de la experiencia humana.
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

export default Article1;
