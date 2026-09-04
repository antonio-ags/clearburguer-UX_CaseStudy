import { ShoppingCart } from 'lucide-react'
import { Badge } from '../atoms/Badge'
import { useNavigate } from 'react-router-dom'

const allergenVariant = { gluten: 'warning', lactosa: 'warning', huevo: 'warning' }

export function ProductCard({ product }) {
  const navigate = useNavigate()

  return (
    <div className="bg-[#222222] rounded-2xl overflow-hidden flex flex-col shadow-lg border border-[#333333] hover:border-[#D92525]/50 transition-colors">
      <div className="h-44 bg-[#333333] flex items-center justify-center">
        <ShoppingCart size={48} className="text-[#8C8C8C]" />
      </div>
      <div className="p-4 flex flex-col gap-2 flex-1">
        <h3 className="font-[Montserrat] font-bold text-[#F5F5F5] text-base leading-tight">
          {product.name}
        </h3>
        <p className="font-[Inter] text-[#8C8C8C] text-sm leading-snug flex-1">
          {product.description}
        </p>
        {product.allergens?.length > 0 && (
          <div className="flex flex-wrap gap-1">
            {product.allergens.map(a => (
              <Badge key={a} variant={allergenVariant[a] || 'default'}>
                Sin {a}
              </Badge>
            ))}
          </div>
        )}
        <div className="flex items-center justify-between mt-2">
          <span className="font-[Inter] font-medium text-[#D92525] text-lg">
            {product.price.toFixed(2)}€
          </span>
          <button
            onClick={() => navigate('/customizar', { state: { product } })}
            className="bg-[#D92525] hover:bg-[#b81e1e] text-[#F5F5F5] font-[Inter] font-medium text-sm px-4 py-2 rounded-lg transition-colors cursor-pointer"
          >
            Pedir
          </button>
        </div>
      </div>
    </div>
  )
}
