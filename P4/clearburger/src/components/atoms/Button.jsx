export default function Button({ children, variant = 'primary', onClick, type = 'button', className = '' }) {
  const base = "flex flex-row justify-center items-center px-6 py-3 gap-2.5 rounded-lg font-['Inter',sans-serif] font-medium text-base leading-[19px] transition-colors cursor-pointer"

  const variants = {
    primary: "bg-[#D92525] text-[#F5F5F5] hover:bg-[#B71D1D]",
    secondary: "border-2 border-[#D92525] text-[#D92525] bg-transparent hover:bg-[#D92525]/10",
    disabled: "bg-[#333333] text-[#8C8C8C] cursor-not-allowed",
    ghost: "text-[#F5F5F5] bg-transparent hover:bg-white/10"
  }

  return (
    <button
      type={type}
      onClick={variant !== 'disabled' ? onClick : undefined}
      disabled={variant === 'disabled'}
      className={`${base} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  )
}
