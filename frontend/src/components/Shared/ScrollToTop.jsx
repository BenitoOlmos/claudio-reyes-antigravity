import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
    const { pathname, hash } = useLocation();

    useEffect(() => {
        // Si hay un hash (ej. #modelo), no subimos al top, dejamos que el hash routing actue
        if (!hash) {
            window.scrollTo(0, 0);
        } else {
            // Intentar scroll al elemento
            const element = document.getElementById(hash.replace('#', ''));
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [pathname, hash]);

    return null;
};

export default ScrollToTop;
