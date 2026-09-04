const variants = {
  default: 'bg-[#333333] text-[#F5F5F5]',
  warning: 'bg-[#FF9800]/20 text-[#FF9800] border border-[#FF9800]/40',
  positive: 'bg-[#4CAF50]/20 text-[#4CAF50] border border-[#4CAF50]/40',
}

export function Badge({ children, variant = 'default' }) {
  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium font-[Inter] ${variants[variant]}`}>
      {children}
    </span>
  )
}
