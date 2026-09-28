import { Link } from 'react-router';
import { items } from '../data/items';
import ItemCard from '../components/ItemCard';

export default function Home() {
  const popularItems = items.slice(0, 4);

  return (
    <div className="page">
      <section className="hero-banner">
        <h2>Лучшие предметы доты</h2>
        <p>Тысячи скинов, аркан и имморталок с мгновенной доставкой</p>
        <div className="hero-buttons">
          <Link to="/catalog" className="primary-btn">
            Перейти в каталог 
          </Link>
          <Link to="/about" className="secondary-btn">
            О магазине
          </Link>
        </div>
      </section>

      {}
    </div>
  );
}