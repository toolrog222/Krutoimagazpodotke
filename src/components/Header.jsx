import { NavLink } from 'react-router';
import { useCart } from '../context/CartContext';

export default function Header() {
  const { count } = useCart();

  return (
    <header className="header">
      <div className="logo">
        <span className="logo-icon"></span>
        <h1>DotaHub</h1>
      </div>

      <nav className="nav">
        <NavLink to="/" end className={({ isActive }) => (isActive ? 'active' : '')}>
          Главная
        </NavLink>
        <NavLink to="/catalog" className={({ isActive }) => (isActive ? 'active' : '')}>
          Каталог
        </NavLink>
        <NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : '')}>
          О нас
        </NavLink>
        <NavLink
          to="/cart"
          className={({ isActive }) => `cart-btn ${isActive ? 'active' : ''}`}
        >
          Корзина
          {count > 0 && <span className="badge">{count}</span>}
        </NavLink>
      </nav>
    </header>
  );
}