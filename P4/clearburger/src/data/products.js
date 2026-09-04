export const products = [
  {
    id: 1,
    name: 'Classic Burger',
    description: 'Ternera 180g, queso cheddar, lechuga, tomate y nuestra salsa secreta.',
    price: 12.90,
    allergens: ['gluten', 'lactosa'],
    image: null,
  },
  {
    id: 2,
    name: 'Smoky BBQ',
    description: 'Ternera 180g, bacon crujiente, queso ahumado y salsa BBQ casera.',
    price: 14.50,
    allergens: ['gluten', 'lactosa'],
    image: null,
  },
  {
    id: 3,
    name: 'Veggie Deluxe',
    description: 'Hamburguesa de garbanzos, aguacate, tomate cherry y alioli de limón.',
    price: 11.90,
    allergens: ['gluten', 'huevo'],
    image: null,
  },
  {
    id: 4,
    name: 'Double Smash',
    description: 'Doble smash de ternera 2×90g, doble cheddar y cebolla caramelizada.',
    price: 15.90,
    allergens: ['gluten', 'lactosa'],
    image: null,
  },
  {
    id: 5,
    name: 'Spicy Jalapeño',
    description: 'Ternera 180g, jalapeños frescos, queso pepper jack y mayo picante.',
    price: 13.50,
    allergens: ['gluten', 'lactosa', 'huevo'],
    image: null,
  },
  {
    id: 6,
    name: 'Truffle Gourmet',
    description: 'Ternera premium 200g, queso brie, rúcula y aceite de trufa.',
    price: 17.90,
    allergens: ['gluten', 'lactosa'],
    image: null,
  },
]

export const allergenLabels = {
  gluten: { label: 'Sin gluten', variant: 'warning' },
  lactosa: { label: 'Sin lactosa', variant: 'warning' },
  huevo: { label: 'Sin huevo', variant: 'warning' },
}

export const ingredients = [
  { id: 1, name: 'Bacon extra', price: 1.50, allergens: [] },
  { id: 2, name: 'Queso cheddar', price: 0.80, allergens: ['lactosa'] },
  { id: 3, name: 'Queso brie', price: 1.20, allergens: ['lactosa'] },
  { id: 4, name: 'Aguacate', price: 1.00, allergens: [] },
  { id: 5, name: 'Jalapeños', price: 0.50, allergens: [] },
  { id: 6, name: 'Cebolla caramelizada', price: 0.70, allergens: [] },
  { id: 7, name: 'Huevo frito', price: 1.00, allergens: ['huevo'] },
  { id: 8, name: 'Rúcula', price: 0.50, allergens: [] },
  { id: 9, name: 'Tomate cherry', price: 0.60, allergens: [] },
  { id: 10, name: 'Salsa BBQ', price: 0.40, allergens: [] },
  { id: 11, name: 'Mayo picante', price: 0.40, allergens: ['huevo'] },
  { id: 12, name: 'Doble carne', price: 3.00, allergens: [] },
]
