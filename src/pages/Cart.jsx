import { Link } from 'react-router';
import { useCart } from '../context/CartContext';

export default function Cart() {
  const { cart, removeFromCart, updateQuantity, total, clearCart } = useCart();

  const handleCheckout = () => {
    if (cart.length === 0) return;
    alert(`Спасибо за заказ! Сумма: ${total.toLocaleString()} ₽`);
    clearCart();
  };

  if (cart.length === 0) {
    return (
      <div className="page empty-cart-page">
        <div className="empty-cart-icon">🛒</div>
        <h2>Ваша корзина пуста</h2>
        <p>Добавьте предметы из каталога, чтобы оформить заказ</p>
        <Link to="/catalog" className="primary-btn">
          Перейти в каталог
        </Link>
      </div>
    );
  }

  return (
    <div className="page">
      <section className="page-header">
        <h2>Корзина</h2>
        <p>Товаров: {cart.length}</p>
      </section>

      <div className="cart-layout">
        <div className="cart-list">
          {cart.map((item) => (
            <div key={item.id} className="cart-row">
              <img src={item.image} alt={item.name} />
              <div className="cart-row-info">
                <h4>{item.name}</h4>
                <p className="hero">Герой: {item.hero}</p>
                <p className="price">{item.price.toLocaleString()} ₽</p>
              </div>

              <div className="qty-controls">
                <button onClick={() => updateQuantity(item.id, -1)}>−</button>
                <span>{item.quantity}</span>
                <button onClick={() => updateQuantity(item.id, 1)}>+</button>
              </div>

              <div className="row-total">
                {(item.price * item.quantity).toLocaleString()} ₽
              </div>

              <button className="remove-btn" onClick={() => removeFromCart(item.id)}>
                Удалить
              </button>
            </div>
          ))}
        </div>

        <aside className="cart-summary">
          <h3>Итого</h3>
          <div className="summary-row">
            <span>Товаров:</span>
            <span>{cart.reduce((s, i) => s + i.quantity, 0)} шт.</span>
          </div>
          <div className="summary-row">
            <span>Стоимость:</span>
            <span>{total.toLocaleString()} ₽</span>
          </div>
          <div className="summary-row summary-total">
            <span>К оплате:</span>
            <strong>{total.toLocaleString()} ₽</strong>
          </div>
          <button className="checkout-btn" onClick={handleCheckout}>
            Оформить заказ
          </button>
          <button className="clear-btn" onClick={clearCart}>
            Очистить корзину
          </button>
        </aside>
      </div>
    </div>
  );
}