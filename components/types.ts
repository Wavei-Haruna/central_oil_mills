export type Category = 'all' | 'oil' | 'cream'

export type Product = {
  id: string
  name: string
  short: string
  price: number
  size: string
  tone: 'yellow' | 'green'
  tag: string
  category: Exclude<Category, 'all'>
  image: string
  details: { label: string; value: string }[]
}
