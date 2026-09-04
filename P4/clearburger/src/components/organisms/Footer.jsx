import { Link } from 'react-router-dom'
import { InstagramIcon, TwitterIcon, TikTokIcon, LinkedInIcon } from './FooterSVGs'

export function Footer() {
  return (
    <footer className="bg-[#1A1A1A] py-12 px-8">
      <div className="max-w-[1440px] mx-auto flex justify-center">
        <div className="bg-[#2B2B2B] border-2 border-[#B71D1D] w-[1243px] h-[422px] rounded-[20px] relative">
          {/* Logo */}
          <div className="absolute left-[63px] top-[131px] w-[200px] h-[159px]">
            <img src="/logo.png" alt="ClearBurger Logo" className="w-full h-full object-contain" />
          </div>

          {/* Navigation Buttons */}
          <div className="absolute left-[430px] top-[27px]">
            <Link to="/" className="absolute top-0 bg-[#1A1A1A] border border-[#333333] rounded-lg px-4 py-3 w-[240px] h-12 flex items-center justify-center hover:bg-[#222222] transition-colors">
              <span className="font-['Inter',sans-serif] font-medium text-base text-white">Sobre nosotros</span>
            </Link>
            <Link to="/carta" className="absolute top-[76px] bg-[#1A1A1A] border border-[#333333] rounded-lg px-4 py-3 w-[240px] h-12 flex items-center justify-center hover:bg-[#222222] transition-colors">
              <span className="font-['Inter',sans-serif] font-medium text-base text-white">Carta</span>
            </Link>
            <Link to="/" className="absolute top-[152px] bg-[#1A1A1A] border border-[#333333] rounded-lg px-4 py-3 w-[240px] h-12 flex items-center justify-center hover:bg-[#222222] transition-colors">
              <span className="font-['Inter',sans-serif] font-medium text-base text-white">Ubicaciones</span>
            </Link>
            <Link to="/" className="absolute top-[228px] bg-[#1A1A1A] border border-[#333333] rounded-lg px-4 py-3 w-[240px] h-12 flex items-center justify-center hover:bg-[#222222] transition-colors">
              <span className="font-['Inter',sans-serif] font-medium text-base text-white">Foodtrucks</span>
            </Link>
            <Link to="/" className="absolute top-[304px] bg-[#1A1A1A] border border-[#333333] rounded-lg px-4 py-3 w-[240px] h-12 flex items-center justify-center hover:bg-[#222222] transition-colors">
              <span className="font-['Inter',sans-serif] font-medium text-base text-white">Trabaja con nosotros</span>
            </Link>
          </div>

          {/* Action Buttons */}
          <div className="absolute left-[913px] top-[103px]">
            <Link to="/" className="absolute top-0 border-2 border-[#D92525] rounded-lg px-6 py-3 w-[179px] h-12 flex items-center justify-center hover:bg-[#D92525]/10 transition-colors">
              <span className="font-['Inter',sans-serif] font-medium text-base text-[#D92525]">Atención al cliente</span>
            </Link>
            <Link to="/" className="absolute top-[69px] border-2 border-[#D92525] rounded-lg px-6 py-3 w-[179px] h-12 flex items-center justify-center hover:bg-[#D92525]/10 transition-colors">
              <span className="font-['Inter',sans-serif] font-medium text-base text-[#D92525]">Política de privacidad</span>
            </Link>
            <Link to="/" className="absolute top-[138px] border-2 border-[#D92525] rounded-lg px-6 py-3 w-[179px] h-12 flex items-center justify-center hover:bg-[#D92525]/10 transition-colors">
              <span className="font-['Inter',sans-serif] font-medium text-base text-[#D92525]">Contacto</span>
            </Link>
          </div>

          {/* Social Media */}
          <div className="absolute left-[912px] top-[340px]">
            <div className="absolute bg-[#D9D9D9] border border-[#B71D1D] rounded-[20px] w-[190px] h-[57px]" />
            <a href="#" className="absolute left-[13px] top-[10px] hover:opacity-80 transition-opacity"><InstagramIcon /></a>
            <a href="#" className="absolute left-[58px] top-[14px] hover:opacity-80 transition-opacity"><TwitterIcon /></a>
            <a href="#" className="absolute left-[95px] top-[10px] hover:opacity-80 transition-opacity"><TikTokIcon /></a>
            <a href="#" className="absolute left-[134px] top-[10px] hover:opacity-80 transition-opacity"><LinkedInIcon /></a>
          </div>
        </div>
      </div>
    </footer>
  )
}
