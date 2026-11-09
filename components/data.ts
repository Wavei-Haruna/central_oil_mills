import type { Category, Product } from './types'

export const categories: { id: Category; label: string }[] = [
  { id: 'all', label: 'All products' },
  { id: 'oil', label: 'Cooking oil' },
  { id: 'cream', label: 'Soup base' },
]

export const products: Product[] = [
  {
    id: 'kakum-oil-1l',
    name: 'Kakum Fresh Bottled Edible Palm Oil',
    short: 'Your everyday cooking oil, bottled by the mill that makes it.',
    price: 85,
    size: '1 litre',
    tone: 'yellow',
    tag: 'Everyday cooking',
    category: 'oil',
    image: '/kakum-hero.png',
    details: [
      { label: 'Use', value: 'Everyday cooking, soups, sauces and frying.' },
      { label: 'Storage', value: 'Keep in a cool, dry place away from direct sunlight.' },
      { label: 'Pack information', value: 'Ingredients, shelf life and final pack sizes to be confirmed.' },
    ],
  },
  {
    id: 'kakum-cream-500ml',
    name: 'Kakum Abenkwan Palm Cream Concentrate',
    short: 'The rich start to your palm nut soup.',
    price: 65,
    size: '500 ml',
    tone: 'green',
    tag: 'Made for abenkwan',
    category: 'cream',
    image: '/kakum-hero.png',
    details: [
      { label: 'Use', value: 'Palm nut soup (abenkwan) and rich stews.' },
      { label: 'Storage', value: 'Keep in a cool, dry place away from direct sunlight.' },
      { label: 'Pack information', value: 'Ingredients, shelf life and final pack sizes to be confirmed.' },
    ],
  },
]

export const formatGHS = (value: number) =>
  `GHS ${value.toLocaleString('en-GH', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`
