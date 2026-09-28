import dragonclaw from '../assets/DCHook.webp';
import roshan from '../assets/BabyRoshan.webp';
import demonEater from '../assets/SFArcana.webp';
import vothDomosh from '../assets/LegaArcana.webp';
import manifoldParadox from '../assets/FantomkaArcana.webp';
import gunYu from '../assets/palkaMK.webp';
import innerAbysm from '../assets/ArcanaTB.webp';
import FeastOfAbsession from '../assets/pudgearacana.webp';

export const items = [
  {
    id: 1,
    name: 'Dragonclaw Hook',
    hero: 'Pudge',
    rarity: 'Immortal',
    price: 45000,
    image: dragonclaw,
    category: 'Hook',
  },
  {
    id: 2,
    name: 'Baby Roshan',
    hero: 'Все герои',
    rarity: 'Legendary',
    price: 120000,
    image: roshan,
    category: 'Courier',
  },
  {
    id: 3,
    name: 'Demon Eater',
    hero: 'Shadow Fiend',
    rarity: 'Arcana',
    price: 1800,
    image: demonEater,
    category: 'Arcana',
  },
  {
    id: 4,
    name: 'Blades of Voth Domosh',
    hero: 'Legion Commander',
    rarity: 'Arcana',
    price: 2200,
    image: vothDomosh,
    category: 'Arcana',
  },
  {
    id: 5,
    name: 'Inscribed Manifold Paradox',
    hero: 'Phantom Assassin',
    rarity: 'Arcana',
    price: 3000,
    image: manifoldParadox,
    category: 'Arcana',
  },
  {
    id: 6,
    name: 'Golden Staff of Gun-Yu',
    hero: 'Monkey King',
    rarity: 'Immortal',
    price: 150,
    image: gunYu,
    category: 'Weapon',
  },
  {
    id: 7,
    name: 'Fractal Horns of Inner Abysm',
    hero: 'Terrorblade',
    rarity: 'Arcana',
    price: 2100,
    image: innerAbysm,
    category: 'Arcana',
  },
  {
    id: 8,
    name: 'Feast of Absession',
    hero: 'Pudge',
    rarity: 'Arcana',
    price: 2000,
    image: FeastOfAbsession,
    category: 'Arcana',
  },
];

export const rarities = ['Все', 'Arcana', 'Immortal', 'Legendary', 'Rare'];
export const categories = ['Все', 'Arcana', 'Immortal', 'Weapon', 'Courier', 'Hook'];