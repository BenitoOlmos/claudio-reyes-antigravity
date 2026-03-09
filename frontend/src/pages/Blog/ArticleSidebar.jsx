import React from 'react';
import { Link } from 'react-router-dom';

const ArticleSidebar = ({ currentRoute }) => {
    return (
        <aside className="sidebar" style={{ position: 'sticky', top: '96px', display: 'flex', flexDirection: 'column', gap: '18px' }}>
            <div className="cta-box" style={{ background: 'var(--surface)', border: '1px solid var(--line)', borderRadius: '18px', boxShadow: '0 10px 30px rgba(0,0,0,.06)', padding: '24px' }}>
                <h4 style={{ margin: '0 0 10px', fontSize: '1.15rem' }}>Comienza por observar tu perfil</h4>
                <p style={{ margin: '0 0 16px', color: 'var(--muted)', fontSize: '0.96rem' }}>
                    Si quieres entender mejor cómo está funcionando hoy tu mente, puedes comenzar con el test RFAI.
                </p>
                <a className="btn btn-primary" href="https://clinicaequilibrar.cl/#/test-rfai">Ir al test</a>
            </div>
        </aside>
    );
};

export default ArticleSidebar;
