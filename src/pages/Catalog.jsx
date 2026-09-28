import { useState, useMemo } from 'react';
import Filters from '../components/Filters';
import ItemList from '../components/ItemList';
import { items } from '../data/items';

export default function Catalog() {
  const [search, setSearch] = useState('');
  const [rarity, setRarity] = useState('Все');
  const [category, setCategory] = useState('Все');
  const [sort, setSort] = useState('default');

  const filteredItems = useMemo(() => {
    let result = [...items];

    if (search.trim()) {
      const q = search.toLowerCase();
      result = result.filter(
        (i) =>
          i.name.toLowerCase().includes(q) || i.hero.toLowerCase().includes(q)
      );
    }

    if (rarity !== 'Все') result = result.filter((i) => i.rarity === rarity);
    if (category !== 'Все') result = result.filter((i) => i.category === category);

    if (sort === 'price-asc') result.sort((a, b) => a.price - b.price);
    if (sort === 'price-desc') result.sort((a, b) => b.price - a.price);
    if (sort === 'name') result.sort((a, b) => a.name.localeCompare(b.name));

    return result;
  }, [search, rarity, category, sort]);

  return (
    <div className="page">
      <section className="page-header">
        <h2>Каталог предметов</h2>
        <p>Найдено: {filteredItems.length} из {items.length}</p>
      </section>

      <Filters
        search={search}
        setSearch={setSearch}
        rarity={rarity}
        setRarity={setRarity}
        category={category}
        setCategory={setCategory}
        sort={sort}
        setSort={setSort}
      />

      <ItemList items={filteredItems} />
    </div>
  );
}