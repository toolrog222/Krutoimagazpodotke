import { Routes, Route } from 'react-router';
import { CartProvider } from './context/CartContext';
import Header from './components/Header.jsx';
import Home from './pages/Home';
import About from './pages/About';
import Catalog from './pages/Catalog';
import Cart from './pages/Cart';

export default function App() {
  return (
    <CartProvider>
      <div className="app">
        <Header />

        <main className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </main>

        <footer className="footer">
          <p>@ 2025 Dota 2 Market. Габен лично одобрил этот сайт и покупает тут шмотки. Клянусь.</p>
        </footer>
      </div>
    </CartProvider>
  );
}