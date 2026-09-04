import { Plus, Check } from 'lucide-react'
import { Badge } from '../atoms/Badge'

export function ListItem({ ingredient, selected, onToggle }) {
  return (
    <button
      onClick={() => onToggle(ingredient.id)}
      className={`w-full flex items-center justify-between px-4 py-3 rounded-lg border transition-all text-left
        ${selected
          ? 'bg-[#D92525]/10 border-[#D92525] text-[#F5F5F5]'
          : 'bg-[#222222] border-[#333333] text-[#F5F5F5] hover:border-[#D92525]/50'
        }`}
    >
      <div className="flex items-center gap-3">
        <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-colors
          ${selected ? 'bg-[#D92525] border-[#D92525]' : 'border-[#8C8C8C]'}`}>
          {selected && <Check size={12} className="text-white" />}
        </div>
        <span className="font-[Inter] text-sm">{ingredient.name}</span>
        {ingredient.allergens?.length > 0 && (
          <div className="flex gap-1">
            {ingredient.allergens.map(a => (
              <Badge key={a} variant="warning">Sin {a}</Badge>
            ))}
          </div>
        )}
      </div>
      <span className="font-[Inter] text-sm text-[#D92525] font-medium">
        +{ingredient.price.toFixed(2)}€
      </span>
    </button>
  )
}
