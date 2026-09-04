import { Link } from 'react-router-dom'

export function Navbar() {
  return (
    <nav className="fixed top-12 left-1/2 -translate-x-1/2 w-[1067px] h-[100px] bg-[#2B2B2B] border-2 border-[#B71D1D] rounded-[50px] z-50">
      {/* Logo */}
      <Link to="/" className="absolute left-[30px] top-[9px] w-[103px] h-[82px]">
        <img src="/logo.png" alt="ClearBurger Logo" className="w-full h-full object-contain" />
      </Link>

      {/* Nav buttons */}
      <div className="absolute left-[152px] top-[24px] w-[786px] h-[49px]">
        <Link
          to="/reservar"
          className="absolute left-0 top-[1px] w-[132px] h-12 flex items-center justify-center px-6 py-3 bg-[#D92525] rounded-lg hover:bg-[#B71D1D] transition-colors"
        >
          <span className="font-['Inter',sans-serif] font-medium text-base leading-[19px] text-[#F5F5F5]">Reservar</span>
        </Link>

        <button className="absolute left-[157px] top-[2px] w-[126px] h-[47px] flex items-center justify-center px-4 py-3 bg-[#1A1A1A] border-2 border-[#D92525] rounded-lg hover:bg-[#D92525]/10 transition-colors cursor-pointer">
          <span className="font-['Inter',sans-serif] font-medium text-base leading-[19px] text-white">Sobre nosotros</span>
        </button>

        <Link
          to="/carta"
          className="absolute left-[308px] top-[2px] w-[119px] h-[47px] flex items-center justify-center px-4 py-3 bg-[#1A1A1A] border-2 border-[#D92525] rounded-lg hover:bg-[#D92525]/10 transition-colors"
        >
          <span className="font-['Inter',sans-serif] font-medium text-base leading-[19px] text-white">Carta</span>
        </Link>

        <Link
          to="/carta"
          className="absolute left-[452px] top-[1px] w-[119px] h-[47px] flex items-center justify-center px-4 py-3 bg-[#1A1A1A] border-2 border-[#D92525] rounded-lg hover:bg-[#D92525]/10 transition-colors"
        >
          <span className="font-['Inter',sans-serif] font-medium text-base leading-[19px] text-white">Hacer pedido</span>
        </Link>

        <Link
          to="/customizar"
          className="absolute left-[596px] top-0 w-[190px] h-12 flex items-center justify-center px-6 py-3 bg-[#D97E00] rounded-lg hover:bg-[#B76900] transition-colors"
        >
          <span className="font-['Inter',sans-serif] font-medium text-base leading-[19px] text-[#F5F5F5]">¡Crea tu hamburguesa!</span>
        </Link>
      </div>

      {/* Perfil */}
      <div className="absolute right-[34px] top-[19px] w-[62px] h-[62px]">
        <img src="/perfil.png" alt="Perfil" className="w-full h-full object-cover rounded-full" />
      </div>
    </nav>
  )
}
