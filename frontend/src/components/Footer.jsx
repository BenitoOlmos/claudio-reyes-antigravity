import React from 'react';

const Footer = () => {
    return (
        <footer>
            <div className="container foot">
                <div>© {new Date().getFullYear()} Claudio Reyes</div>
                <div className="small-links">
                    <a href="#inicio">Arriba</a>
                    <a href="#ecosistema">Ecosistema</a>
                    <a href="#clinica">Clínica</a>
                    <a href="#pracsis">PRACSIS</a>
                    <a href="#ingenieria">IPA</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
