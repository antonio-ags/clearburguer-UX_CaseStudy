import { useState } from 'react'
import { Link } from 'react-router-dom'
import { SearchBar } from '../components/molecules/SearchBar'
import Tag from '../components/atoms/Tag'
import Button from '../components/atoms/Button'

const burgers = [
  { id: 1, name: 'Classic ClearBurger', description: 'Carne 100% ternera, lechuga, tomate, cebolla caramelizada y nuestra salsa especial.', price: '12,50 €', image: 'https://images.unsplash.com/photo-1692197275931-0793e08efcc1?w=400&h=300&fit=crop&auto=format', tags: ['Sin gluten', 'Premium'], category: 'clasicas' },
  { id: 2, name: 'Doble Bacon Supreme', description: 'Doble carne, bacon crujiente, queso cheddar, pepinillos y salsa BBQ casera.', price: '14,90 €', image: 'https://images.unsplash.com/photo-1687764628150-1dc8afa7ba52?w=400&h=300&fit=crop&auto=format', tags: ['Picante'], category: 'premium' },
  { id: 3, name: 'Veggie Deluxe', description: 'Hamburguesa vegetal de garbanzos, aguacate, rúcula y mayonesa de chipotle.', price: '11,90 €', image: 'https://images.unsplash.com/photo-1607730127050-e32a8c756fb9?w=400&h=300&fit=crop&auto=format', tags: ['Vegano', 'Sin gluten'], category: 'vegetarianas' },
  { id: 4, name: 'BBQ Pulled Pork', description: 'Carne de cerdo deshilachada con salsa BBQ, col morada y aros de cebolla crujientes.', price: '13,50 €', image: 'https://images.unsplash.com/photo-1671292747854-c56be83025df?w=400&h=300&fit=crop&auto=format', tags: [], category: 'premium' },
  { id: 5, name: 'Mushroom Swiss', description: 'Carne de ternera, champiñones salteados, queso suizo y mayonesa de trufa.', price: '13,90 €', image: 'https://images.unsplash.com/photo-1585238341710-4d3ff484184d?w=400&h=300&fit=crop&auto=format', tags: ['Premium'], category: 'gourmet' },
  { id: 6, name: 'Spicy Chicken', description: 'Pechuga de pollo empanizada picante, lechuga, tomate y salsa ranch.', price: '12,90 €', image: 'https://images.unsplash.com/photo-1761315413686-8467379d8715?w=400&h=300&fit=crop&auto=format', tags: ['Picante'], category: 'clasicas' },
  { id: 7, name: 'Falafel Mediterráneo', description: 'Falafel crujiente, hummus, pepino, tomate y salsa tahini.', price: '11,50 €', image: 'https://images.unsplash.com/photo-1607730127050-e32a8c756fb9?w=400&h=300&fit=crop&auto=format', tags: ['Vegano'], category: 'vegetarianas' },
  { id: 8, name: 'Truffle Deluxe', description: 'Carne wagyu, foie gras, queso brie, rúcula y aceite de trufa negra.', price: '18,90 €', image: 'https://images.unsplash.com/photo-1692197275931-0793e08efcc1?w=400&h=300&fit=crop&auto=format', tags: ['Premium'], category: 'gourmet' },
  { id: 9, name: 'Tex-Mex', description: 'Carne de ternera, guacamole, jalapeños, queso cheddar y nachos crujientes.', price: '13,50 €', image: 'https://images.unsplash.com/photo-1687764628150-1dc8afa7ba52?w=400&h=300&fit=crop&auto=format', tags: ['Picante'], category: 'premium' },
]

export function Carta() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('todas')

  const filtered = burgers.filter(b => {
    const matchSearch = b.name.toLowerCase().includes(searchTerm.toLowerCase()) || b.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchCat = selectedCategory === 'todas' || b.category === selectedCategory
    return matchSearch && matchCat
  })

  const categories = ['todas', 'clasicas', 'premium', 'gourmet', 'vegetarianas']
  const categoryLabels = { todas: 'Todas', clasicas: 'Clásicas', premium: 'Premium', gourmet: 'Gourmet', vegetarianas: 'Vegetarianas' }

  return (
    <div className="mt-[150px] py-16 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-[48px] font-['Montserrat',sans-serif] font-bold text-white mb-4">Nuestra Carta</h1>
          <p className="text-[18px] font-['Inter',sans-serif] text-[#8C8C8C]">Todas las hamburguesas incluyen patatas fritas. Sin costos ocultos.</p>
        </div>

        <div className="mb-12 flex gap-6 items-center justify-center">
          <SearchBar
            placeholder="Buscar hamburguesa..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            state={searchTerm ? 'focus' : 'default'}
          />
          <div className="flex gap-3">
            {categories.map(cat => (
              <Button
                key={cat}
                variant={selectedCategory === cat ? 'primary' : 'secondary'}
                onClick={() => setSelectedCategory(cat)}
              >
                {categoryLabels[cat]}
              </Button>
            ))}
          </div>
        </div>

        {filtered.length > 0 ? (
          <div className="grid grid-cols-3 gap-8">
            {filtered.map(burger => (
              <div key={burger.id} className="bg-[#222222] rounded-2xl overflow-hidden hover:scale-105 transition-transform">
                <div className="h-64 bg-[#333333]" style={{ backgroundImage: `url('${burger.image}')`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
                <div className="p-6">
                  {burger.tags.length > 0 && (
                    <div className="flex gap-2 mb-3 flex-wrap">
                      {burger.tags.map((tag, i) => (
                        <Tag key={i} variant={tag === 'Picante' ? 'warning' : tag === 'Premium' ? 'neutral' : 'default'}>{tag}</Tag>
                      ))}
                    </div>
                  )}
                  <h3 className="text-[18px] font-['Montserrat',sans-serif] font-bold text-white mb-2">{burger.name}</h3>
                  <p className="text-[14px] font-['Inter',sans-serif] text-[#8C8C8C] mb-4">{burger.description}</p>
                  <p className="text-[20px] font-['Inter',sans-serif] font-medium text-[#D92525] mb-4">{burger.price}</p>
                  <Button variant="primary" className="w-full">Añadir al pedido</Button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-[24px] font-['Inter',sans-serif] text-[#8C8C8C]">No se encontraron hamburguesas</p>
          </div>
        )}

        <div className="mt-16 text-center bg-[#222222] rounded-2xl p-12">
          <h3 className="text-[28px] font-['Montserrat',sans-serif] font-bold text-white mb-4">¿No encuentras lo que buscas?</h3>
          <p className="text-[18px] font-['Inter',sans-serif] text-[#8C8C8C] mb-6">Crea tu propia hamburguesa con los ingredientes que tú elijas</p>
          <div className="flex justify-center">
            <Link to="/customizar"><Button variant="primary" className="text-lg px-8 py-4">Personalizar hamburguesa</Button></Link>
          </div>
        </div>
      </div>
    </div>
  )
}
