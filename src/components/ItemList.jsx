import ItemCard from './ItemCard';

export default function ItemList({ items }) {
  if (items.length === 0) {
    return <p className="empty">Ничего не найдено</p>;
  }

  return (
    <div className="items-grid">
      {items.map((item) => (
        <ItemCard key={item.id} item={item} />
      ))}
    </div>
  );
}