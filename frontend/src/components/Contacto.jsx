import React from 'react';

const Contacto = () => {
    return (
        <section id="contacto" className="final">
            <div className="container">
                <div className="box">
                    <div>
                        <h3>¿Lo conversamos?</h3>
                        <p>Partimos con una conversación breve y clara para definir si corresponde clínica, PRACSIS o IPA.</p>
                    </div>
                    <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                        <a className="btn btn-primary" href="https://wa.me/56900000000" target="_blank" rel="noreferrer">WhatsApp</a>
                        <a className="btn" href="mailto:hola@claudioreyes.info">Correo</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contacto;
