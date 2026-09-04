export default function Tag({ children, variant = 'default', className = '' }) {
  const base = "flex flex-row justify-center items-center px-2.5 py-1 gap-2.5 rounded-xl font-['Inter',sans-serif] font-medium text-base leading-[19px] text-[#F5F5F5]"

  const variants = {
    default: "bg-[#22C55E]/40",
    warning: "bg-[#F59E0B]/40",
    neutral: "bg-[#333333]"
  }

  return (
    <span className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </span>
  )
}
