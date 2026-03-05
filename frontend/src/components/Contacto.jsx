import React from 'react';

const Contacto = () => {
    return (
        <section id="contacto" className="final">
            <div className="container">
                <div className="box">
                    <div>
                        <h3>¿Lo conversamos?</h3>
                        <p>Partimos con una conversación breve para definir si corresponde clínica, PRACSIS o IPA.</p>
                    </div>
                    <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                        <a className="btn btn-primary" href="https://wa.me/56930179724?text=Hola%20Claudio%2C%20vengo%20desde%20claudioreyes.info%20y%20quiero%20conversar.%20%C2%BFPodemos%20coordinar%20una%20llamada%20breve%3F" target="_blank" rel="noreferrer">WhatsApp</a>
                        <a className="btn" href="mailto:hola@claudioreyes.info">Correo</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contacto;
