import { rarities, categories } from '../data/items';

export default function Filters({
  search,
  setSearch,
  rarity,
  setRarity,
  category,
  setCategory,
  sort,
  setSort,
}) {
  return (
    <div className="filters">
      <input
        type="text"
        placeholder="Поиск по названию или герою"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-input"
      />

      <select value={rarity} onChange={(e) => setRarity(e.target.value)}>
        {rarities.map((r) => (
          <option key={r} value={r}>
            {r === 'Все' ? 'Все редкости' : r}
          </option>
        ))}
      </select>

      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        {categories.map((c) => (
          <option key={c} value={c}>
            {c === 'Все' ? 'Все категории' : c}
          </option>
        ))}
      </select>

      <select value={sort} onChange={(e) => setSort(e.target.value)}>
        <option value="default">Сортировка</option>
        <option value="price-asc">Цена ниже</option>
        <option value="price-desc">Цена выше</option>
        <option value="name">По названию</option>
      </select>
    </div>
  );
}