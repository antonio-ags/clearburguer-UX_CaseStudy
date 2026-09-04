export default function Input({ placeholder, value, onChange, onFocus, onBlur, state = 'default', className = '' }) {
  const base = "flex flex-row justify-center items-center px-4 py-3 gap-2.5 rounded-lg bg-[#1A1A1A] font-['Inter',sans-serif] font-medium text-base leading-[19px] w-full outline-none"

  const states = {
    default: "border border-[#333333] text-white",
    error: "border-2 border-[#EF4444] text-[#EF4444]",
    focus: "border-2 border-[#D92525] text-white"
  }

  return (
    <input
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      onFocus={onFocus}
      onBlur={onBlur}
      className={`${base} ${states[state]} ${className}`}
    />
  )
}
