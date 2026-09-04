import { useState } from 'react'
import { IngredientButton } from '../components/molecules/IngredientButton'
import Button from '../components/atoms/Button'
import Tag from '../components/atoms/Tag'

const ingredients = [
  { id: 'carne-ternera', name: 'Carne de ternera', price: 0, category: 'carne', available: true },
  { id: 'carne-pollo', name: 'Pollo empanizado', price: 0, category: 'carne', available: true },
  { id: 'carne-cerdo', name: 'Pulled pork', price: 1.5, category: 'carne', available: true },
  { id: 'falafel', name: 'Falafel', price: 0, category: 'carne', available: true, tags: ['Vegano'] },
  { id: 'queso-cheddar', name: 'Cheddar', price: 1, category: 'queso', available: true },
  { id: 'queso-suizo', name: 'Queso suizo', price: 1, category: 'queso', available: true },
  { id: 'queso-brie', name: 'Queso brie', price: 1.5, category: 'queso', available: true },
  { id: 'queso-vegano', name: 'Queso vegano', price: 1.2, category: 'queso', available: true, tags: ['Vegano'] },
  { id: 'lechuga', name: 'Lechuga', price: 0, category: 'vegetales', available: true },
  { id: 'tomate', name: 'Tomate', price: 0, category: 'vegetales', available: true },
  { id: 'cebolla', name: 'Cebolla caramelizada', price: 0.5, category: 'vegetales', available: true },
  { id: 'aguacate', name: 'Aguacate', price: 1.5, category: 'vegetales', available: true },
  { id: 'pepinillos', name: 'Pepinillos', price: 0.5, category: 'vegetales', available: true },
  { id: 'champinones', name: 'Champiñones', price: 1, category: 'vegetales', available: true },
  { id: 'rucula', name: 'Rúcula', price: 0.5, category: 'vegetales', available: true },
  { id: 'bacon', name: 'Bacon crujiente', price: 1.5, category: 'extras', available: true },
  { id: 'huevo', name: 'Huevo frito', price: 1, category: 'extras', available: true },
  { id: 'jalapenos', name: 'Jalapeños', price: 0.5, category: 'extras', available: true, tags: ['Picante'] },
  { id: 'aros-cebolla', name: 'Aros de cebolla', price: 1, category: 'extras', available: true },
  { id: 'guacamole', name: 'Guacamole', price: 1.5, category: 'extras', available: false },
  { id: 'salsa-especial', name: 'Salsa especial', price: 0, category: 'salsas', available: true },
  { id: 'salsa-bbq', name: 'BBQ casera', price: 0, category: 'salsas', available: true },
  { id: 'mayo-chipotle', name: 'Mayo chipotle', price: 0.5, category: 'salsas', available: true, tags: ['Picante'] },
  { id: 'mayo-trufa', name: 'Mayo de trufa', price: 1, category: 'salsas', available: true },
]

const BASE_PRICE = 8.5

function CategorySection({ title, category, selected, onToggle }) {
  const items = ingredients.filter(i => i.category === category)
  return (
    <div className="mb-8">
      <h3 className="text-[24px] font-['Montserrat',sans-serif] font-bold text-white mb-4">{title}</h3>
      <div className="grid grid-cols-4 gap-4">
        {items.map(ing => (
          <div key={ing.id}>
            <IngredientButton
              name={ing.name}
              variant={!ing.available ? 'disabled' : selected.includes(ing.id) ? 'primary' : 'secondary'}
              onClick={() => ing.available && onToggle(ing.id)}
            />
            <p className="text-[12px] text-[#8C8C8C] text-center mt-1">
              {ing.available ? (ing.price > 0 ? `+${ing.price.toFixed(2)} €` : 'Gratis') : 'Agotado'}
            </p>
            {ing.tags && ing.tags.length > 0 && (
              <div className="flex gap-1 justify-center mt-1">
                {ing.tags.map(tag => (
                  <Tag key={tag} variant={tag === 'Picante' ? 'warning' : 'default'} className="text-xs px-2 py-0">{tag}</Tag>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export function Customizar() {
  const [selected, setSelected] = useState([])

  const toggle = (id) => {
    setSelected(prev => prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id])
  }

  const total = BASE_PRICE + selected.reduce((sum, id) => {
    const ing = ingredients.find(i => i.id === id)
    return sum + (ing?.price || 0)
  }, 0)

  return (
    <div className="mt-[150px] py-16 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-[48px] font-['Montserrat',sans-serif] font-bold text-white mb-4">Crea tu hamburguesa perfecta</h1>
          <p className="text-[18px] font-['Inter',sans-serif] text-[#8C8C8C] mb-2">Selecciona los ingredientes que prefieras. Precio base: {BASE_PRICE.toFixed(2)} €</p>
          <p className="text-[14px] font-['Inter',sans-serif] text-[#8C8C8C]">{selected.length} ingrediente{selected.length !== 1 ? 's' : ''} seleccionado{selected.length !== 1 ? 's' : ''}</p>
        </div>

        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-8">
            <CategorySection title="Base (elige una)" category="carne" selected={selected} onToggle={toggle} />
            <CategorySection title="Quesos" category="queso" selected={selected} onToggle={toggle} />
            <CategorySection title="Vegetales" category="vegetales" selected={selected} onToggle={toggle} />
            <CategorySection title="Extras" category="extras" selected={selected} onToggle={toggle} />
            <CategorySection title="Salsas" category="salsas" selected={selected} onToggle={toggle} />
          </div>

          <div className="col-span-4">
            <div className="sticky top-40">
              <div className="bg-[#222222] rounded-2xl p-6">
                <h3 className="text-[24px] font-['Montserrat',sans-serif] font-bold text-white mb-6">Resumen</h3>

                <div className="space-y-3 mb-6 max-h-[400px] overflow-y-auto">
                  <div className="flex justify-between text-[14px] font-['Inter',sans-serif]">
                    <span className="text-[#8C8C8C]">Base</span>
                    <span className="text-white">{BASE_PRICE.toFixed(2)} €</span>
                  </div>
                  {selected.map(id => {
                    const ing = ingredients.find(i => i.id === id)
                    if (!ing) return null
                    return (
                      <div key={id} className="flex justify-between text-[14px] font-['Inter',sans-serif]">
                        <span className="text-[#8C8C8C]">{ing.name}</span>
                        <span className="text-white">{ing.price > 0 ? `+${ing.price.toFixed(2)} €` : 'Gratis'}</span>
                      </div>
                    )
                  })}
                  {selected.length === 0 && (
                    <p className="text-[14px] text-[#8C8C8C] italic text-center py-4">Selecciona ingredientes para comenzar</p>
                  )}
                </div>

                <div className="border-t border-[#333333] pt-4 mb-6">
                  <div className="flex justify-between text-[20px] font-['Montserrat',sans-serif] font-bold">
                    <span className="text-white">Total</span>
                    <span className="text-[#D92525]">{total.toFixed(2)} €</span>
                  </div>
                </div>

                <Button variant={selected.length > 0 ? 'primary' : 'disabled'} className="w-full mb-3">Añadir al pedido</Button>
                <Button variant="ghost" className="w-full" onClick={() => setSelected([])}>Limpiar selección</Button>
              </div>

              <div className="mt-6 bg-[#111111] rounded-2xl p-6">
                <p className="text-[12px] font-['Inter',sans-serif] text-[#8C8C8C] text-center">
                  💡 Todos los precios incluyen patatas fritas. Sin cargos adicionales.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
