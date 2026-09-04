import { Search } from 'lucide-react'

export function SearchBar({ placeholder = "Introduce tu búsqueda...", value, onChange, state = 'default', className = '' }) {
  const base = "flex flex-row items-center px-4 py-3 gap-2.5 rounded-lg bg-[#1A1A1A] font-['Inter',sans-serif] font-medium text-base leading-[19px] w-60"

  const states = {
    default: "border border-[#333333]",
    error: "border-2 border-[#EF4444]",
    focus: "border-2 border-[#D92525]"
  }

  const textColor = state === 'error' ? 'text-[#EF4444]' : 'text-white'

  return (
    <div className={`${base} ${states[state]} ${className}`}>
      <Search className={textColor} size={18} />
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`bg-transparent border-none outline-none flex-1 ${textColor} placeholder:text-[#8C8C8C]`}
      />
    </div>
  )
}
