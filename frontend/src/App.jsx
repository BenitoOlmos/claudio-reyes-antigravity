import React from 'react';
import Topbar from './components/Shared/Topbar';
import Footer from './components/Shared/Footer';
import Home from './pages/Home';
import BlogIndex from './pages/Blog/BlogIndex';
import Article1 from './pages/Blog/Article1';
import Article2 from './pages/Blog/Article2';
import Article3 from './pages/Blog/Article3';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/Shared/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Topbar />
      <main id="top">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<BlogIndex />} />
          <Route path="/blog/los-cinco-niveles-de-evolucion-de-la-mente" element={<Article1 />} />
          <Route path="/blog/por-que-repetimos-patrones-emocionales" element={<Article2 />} />
          <Route path="/blog/cuando-entender-no-basta" element={<Article3 />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
