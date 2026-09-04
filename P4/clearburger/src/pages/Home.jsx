import { Link } from 'react-router-dom'
import Button from '../components/atoms/Button'
import Tag from '../components/atoms/Tag'

export function Home() {
  return (
    <>
      {/* Hero */}
      <section
        className="h-[600px] mt-[150px] relative flex items-center justify-center"
        style={{
          backgroundImage: `linear-gradient(rgba(26,26,26,0.7), rgba(26,26,26,0.7)), url('https://images.unsplash.com/photo-1585238341710-4d3ff484184d?w=1440&h=600&fit=crop&auto=format')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="text-center max-w-4xl px-8">
          <h1 className="text-[64px] font-['Montserrat',sans-serif] font-bold text-white mb-4 leading-tight">
            El sabor real, sin letras pequeñas.
          </h1>
          <p className="text-[20px] font-['Inter',sans-serif] text-[#8C8C8C] mb-8">
            Hamburguesas artesanales. Precios transparentes. Sin sorpresas.
          </p>
          <div className="flex justify-center">
            <Link to="/customizar">
              <Button variant="primary" className="text-lg px-8 py-4">Crea tu hamburguesa</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Hamburguesas destacadas */}
      <section className="bg-[#1A1A1A] py-16 px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-[32px] font-['Montserrat',sans-serif] font-bold text-white mb-12 text-center">
            Nuestras hamburguesas destacadas
          </h2>

          <div className="grid grid-cols-3 gap-8 mb-12">
            <div className="bg-[#222222] rounded-2xl overflow-hidden hover:scale-105 transition-transform">
              <div className="h-64 bg-[#333333]" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1692197275931-0793e08efcc1?w=400&h=300&fit=crop&auto=format')`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
              <div className="p-6">
                <div className="flex gap-2 mb-3">
                  <Tag variant="default">Sin gluten</Tag>
                  <Tag variant="neutral">Premium</Tag>
                </div>
                <h3 className="text-[18px] font-['Montserrat',sans-serif] font-bold text-white mb-2">Classic ClearBurger</h3>
                <p className="text-[14px] font-['Inter',sans-serif] text-[#8C8C8C] mb-4">Carne 100% ternera, lechuga, tomate, cebolla caramelizada y nuestra salsa especial.</p>
                <p className="text-[20px] font-['Inter',sans-serif] font-medium text-[#D92525] mb-4">12,50 €</p>
                <Link to="/carta"><Button variant="primary" className="w-full">Pedir ahora</Button></Link>
              </div>
            </div>

            <div className="bg-[#222222] rounded-2xl overflow-hidden hover:scale-105 transition-transform">
              <div className="h-64 bg-[#333333]" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1687764628150-1dc8afa7ba52?w=400&h=300&fit=crop&auto=format')`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
              <div className="p-6">
                <div className="flex gap-2 mb-3">
                  <Tag variant="warning">Picante</Tag>
                </div>
                <h3 className="text-[18px] font-['Montserrat',sans-serif] font-bold text-white mb-2">Doble Bacon Supreme</h3>
                <p className="text-[14px] font-['Inter',sans-serif] text-[#8C8C8C] mb-4">Doble carne, bacon crujiente, queso cheddar, pepinillos y salsa BBQ casera.</p>
                <p className="text-[20px] font-['Inter',sans-serif] font-medium text-[#D92525] mb-4">14,90 €</p>
                <Link to="/carta"><Button variant="primary" className="w-full">Pedir ahora</Button></Link>
              </div>
            </div>

            <div className="bg-[#222222] rounded-2xl overflow-hidden hover:scale-105 transition-transform">
              <div className="h-64 bg-[#333333]" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1607730127050-e32a8c756fb9?w=400&h=300&fit=crop&auto=format')`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
              <div className="p-6">
                <div className="flex gap-2 mb-3">
                  <Tag variant="default">Vegano</Tag>
                  <Tag variant="default">Sin gluten</Tag>
                </div>
                <h3 className="text-[18px] font-['Montserrat',sans-serif] font-bold text-white mb-2">Veggie Deluxe</h3>
                <p className="text-[14px] font-['Inter',sans-serif] text-[#8C8C8C] mb-4">Hamburguesa vegetal de garbanzos, aguacate, rúcula y mayonesa de chipotle.</p>
                <p className="text-[20px] font-['Inter',sans-serif] font-medium text-[#D92525] mb-4">11,90 €</p>
                <Link to="/carta"><Button variant="primary" className="w-full">Pedir ahora</Button></Link>
              </div>
            </div>
          </div>

          <div className="text-center bg-[#222222] rounded-2xl p-12">
            <h3 className="text-[28px] font-['Montserrat',sans-serif] font-bold text-white mb-4">¿Quieres personalizar tu hamburguesa?</h3>
            <p className="text-[18px] font-['Inter',sans-serif] text-[#8C8C8C] mb-6">Crea la hamburguesa perfecta eligiendo tus ingredientes favoritos</p>
            <div className="flex justify-center">
              <Link to="/customizar"><Button variant="primary" className="text-lg px-8 py-4">Crear mi hamburguesa</Button></Link>
            </div>
          </div>
        </div>
      </section>

      {/* Por qué ClearBurger */}
      <section className="bg-[#111111] py-16 px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-[32px] font-['Montserrat',sans-serif] font-bold text-white mb-12 text-center">Por qué ClearBurger</h2>
          <div className="grid grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#D92525] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">💯</span>
              </div>
              <h4 className="text-[20px] font-['Montserrat',sans-serif] font-bold text-white mb-2">100% Transparente</h4>
              <p className="text-[14px] font-['Inter',sans-serif] text-[#8C8C8C]">Precios claros sin costos ocultos. Lo que ves es lo que pagas.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#D92525] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🥩</span>
              </div>
              <h4 className="text-[20px] font-['Montserrat',sans-serif] font-bold text-white mb-2">Ingredientes Premium</h4>
              <p className="text-[14px] font-['Inter',sans-serif] text-[#8C8C8C]">Carne de primera calidad y vegetales frescos todos los días.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#D92525] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">⚡</span>
              </div>
              <h4 className="text-[20px] font-['Montserrat',sans-serif] font-bold text-white mb-2">Sin Dark Patterns</h4>
              <p className="text-[14px] font-['Inter',sans-serif] text-[#8C8C8C]">No urgencias falsas, no trucos. Solo información honesta.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
