import { useParams, Link } from 'react-router';
import { items } from '../data/items';
import { useCart } from '../context/CartContext';

export default function ItemPage() {
  const { id } = useParams();
  const { addToCart } = useCart();
  const item = items.find((i) => i.id === Number(id));

  if (!item) {
    return (
      <div className="page empty-cart-page">
        <div className="empty-cart-icon">🔍</div>
        <h2>Предмет не найден</h2>
        <p>Возможно, он был удалён или ссылка неверная</p>
        <Link to="/catalog" className="primary-btn">
          Вернуться в каталог
        </Link>
      </div>
    );
  }

  const rarityColor = {
    Arcana: '#b84aff',
    Immortal: '#d4af37',
    Legendary: '#ff8800',
    Rare: '#4a90d9',
  }[item.rarity] || '#888';

  return (
    <div className="page item-page">
      <Link to="/catalog" className="back-link">
        ← Назад в каталог
      </Link>

      <div className="item-detail">
        <div className="item-detail-image" style={{ borderColor: rarityColor }}>
          <img src={item.image} alt={item.name} />
        </div>

        <div className="item-detail-info">
          <span className="rarity" style={{ color: rarityColor }}>
            {item.rarity}
          </span>
          <h1>{item.name}</h1>
          <p className="item-detail-hero">Герой: {item.hero}</p>
          <p className="item-detail-category">Категория: {item.category}</p>

          <div className="item-detail-description">
            <h3>Описание</h3>
            <p>
              Имба шмот для {item.hero}. Редкость - {item.rarity}.
              Понтанешься реально на этом любая малышка даст.
              Как только оплатишь кинем через 5 минут. Тебя кинем.
            </p>
          </div>

          <div className="item-detail-price">
            <span className="item-detail-price-value">
              {item.price.toLocaleString()} ₽
            </span>
            <button className="buy-btn-large" onClick={() => addToCart(item)}>
              Добавить в корзину
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}