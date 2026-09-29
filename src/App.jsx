import { useEffect } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router';
import { CartProvider } from './context/CartContext';
import { delayNavigate } from './api/zapros';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Catalog from './pages/Catalog';
import Cart from './pages/Cart';
import ItemPage from './pages/ItemPage';

function GlobalNavigationDelay() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleClick = (e) => {
      if (e.defaultPrevented) return;
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      if (e.button !== 0) return;

      const anchor = e.target.closest('a');
      if (!anchor) return;

      const href = anchor.getAttribute('href');
      if (!href) return;
      if (href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('tel:')) return;
      if (anchor.target && anchor.target !== '_self') return;
      if (href.startsWith('#')) return;
      if (href === location.pathname) return;

      e.preventDefault();
      e.stopPropagation();

      delayNavigate(navigate, href);
    };

    document.addEventListener('click', handleClick, true);
    return () => document.removeEventListener('click', handleClick, true);
  }, [navigate, location.pathname]);

  return null;
}

export default function App() {
  return (
    <CartProvider>
      <div className="app">
        <GlobalNavigationDelay />
        <Header />

        <main className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/item/:id" element={<ItemPage />} />
          </Routes>
        </main>

        <footer className="footer">
          <p>© 2025 Dota 2 Market. Не связан с Valve Corporation.</p>
        </footer>
      </div>
    </CartProvider>
  );
}