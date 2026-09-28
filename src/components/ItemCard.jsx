import { useCart } from '../context/CartContext';

export default function ItemCard({ item }) {
  const { addToCart } = useCart();

  const rarityColor = {
    Arcana: '#b84aff',
    Immortal: '#d4af37',
    Legendary: '#ff8800',
    Rare: '#4a90d9',
  }[item.rarity] || '#888';

  return (
    <div className="item-card">
      <div className="item-image" style={{ borderColor: rarityColor }}>
        <img src={item.image} alt={item.name} />
      </div>
      <div className="item-info">
        <span className="rarity" style={{ color: rarityColor }}>
          {item.rarity}
        </span>
        <h3>{item.name}</h3>
        <p className="hero">Герой: {item.hero}</p>
        <div className="item-footer">
          <span className="price">{item.price.toLocaleString()} ₽</span>
          <button className="buy-btn" onClick={() => addToCart(item)}>
            В корзину
          </button>
        </div>
      </div>
    </div>
  );
}