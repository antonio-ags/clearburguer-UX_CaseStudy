import { useState } from 'react'
import Input from '../components/atoms/Input'
import Button from '../components/atoms/Button'

export function Reservar() {
  const [form, setForm] = useState({ nombre: '', email: '', telefono: '', personas: '', fecha: '', hora: '', comentarios: '' })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [focused, setFocused] = useState(null)

  const validate = () => {
    const e = {}
    if (!form.nombre.trim()) e.nombre = 'El nombre es obligatorio'
    if (!form.email.trim()) e.email = 'El email es obligatorio'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Email inválido'
    if (!form.telefono.trim()) e.telefono = 'El teléfono es obligatorio'
    else if (!/^[0-9]{9}$/.test(form.telefono.replace(/\s/g, ''))) e.telefono = 'Teléfono inválido (9 dígitos)'
    if (!form.personas.trim()) e.personas = 'Indica el número de personas'
    else if (parseInt(form.personas) < 1 || parseInt(form.personas) > 20) e.personas = 'Entre 1 y 20 personas'
    if (!form.fecha.trim()) e.fecha = 'Selecciona una fecha'
    if (!form.hora.trim()) e.hora = 'Selecciona una hora'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const handleChange = (field, value) => {
    setForm(prev => ({ ...prev, [field]: value }))
    if (errors[field]) setErrors(prev => ({ ...prev, [field]: undefined }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (validate()) setSubmitted(true)
  }

  const getState = (field) => {
    if (errors[field]) return 'error'
    if (focused === field) return 'focus'
    return 'default'
  }

  const dateClass = (field) => {
    const base = "flex flex-row justify-center items-center px-4 py-3 gap-2.5 rounded-lg bg-[#1A1A1A] font-['Inter',sans-serif] font-medium text-base leading-[19px] w-full outline-none"
    if (errors[field]) return `${base} border-2 border-[#EF4444] text-[#EF4444]`
    if (focused === field) return `${base} border-2 border-[#D92525] text-white`
    return `${base} border border-[#333333] text-white`
  }

  if (submitted) {
    return (
      <div className="mt-[150px] py-16 px-8">
        <div className="max-w-2xl mx-auto text-center">
          <div className="bg-[#222222] rounded-2xl p-12">
            <div className="w-20 h-20 bg-[#22C55E]/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-5xl">✓</span>
            </div>
            <h1 className="text-[48px] font-['Montserrat',sans-serif] font-bold text-white mb-4">¡Reserva confirmada!</h1>
            <p className="text-[18px] font-['Inter',sans-serif] text-[#8C8C8C] mb-8">
              Hemos enviado un email de confirmación a <strong className="text-white">{form.email}</strong>
            </p>
            <div className="bg-[#111111] rounded-xl p-6 mb-8 text-left">
              <h3 className="text-[20px] font-['Montserrat',sans-serif] font-bold text-white mb-4">Detalles de tu reserva</h3>
              <div className="space-y-3 text-[16px] font-['Inter',sans-serif]">
                <div className="flex justify-between"><span className="text-[#8C8C8C]">Nombre:</span><span className="text-white">{form.nombre}</span></div>
                <div className="flex justify-between"><span className="text-[#8C8C8C]">Personas:</span><span className="text-white">{form.personas}</span></div>
                <div className="flex justify-between">
                  <span className="text-[#8C8C8C]">Fecha:</span>
                  <span className="text-white">{new Date(form.fecha).toLocaleDateString('es-ES', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</span>
                </div>
                <div className="flex justify-between"><span className="text-[#8C8C8C]">Hora:</span><span className="text-white">{form.hora}</span></div>
              </div>
            </div>
            <Button variant="primary" onClick={() => setSubmitted(false)} className="mr-4">Nueva reserva</Button>
            <Button variant="secondary" onClick={() => window.location.href = '/'}>Volver al inicio</Button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="mt-[150px] py-16 px-8">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-[48px] font-['Montserrat',sans-serif] font-bold text-white mb-4">Reserva tu mesa</h1>
          <p className="text-[18px] font-['Inter',sans-serif] text-[#8C8C8C]">Sin cargos por reserva. Cancela gratis hasta 2 horas antes.</p>
        </div>

        <form onSubmit={handleSubmit} className="bg-[#222222] rounded-2xl p-8">
          <div className="space-y-6">
            <div>
              <label className="block text-[16px] font-['Inter',sans-serif] font-medium text-white mb-2">Nombre completo *</label>
              <Input placeholder="Juan Pérez" value={form.nombre} onChange={(e) => handleChange('nombre', e.target.value)} onFocus={() => setFocused('nombre')} onBlur={() => setFocused(null)} state={getState('nombre')} />
              {errors.nombre && <p className="text-[14px] text-[#EF4444] mt-1">{errors.nombre}</p>}
            </div>

            <div>
              <label className="block text-[16px] font-['Inter',sans-serif] font-medium text-white mb-2">Email *</label>
              <Input placeholder="juan@email.com" value={form.email} onChange={(e) => handleChange('email', e.target.value)} onFocus={() => setFocused('email')} onBlur={() => setFocused(null)} state={getState('email')} />
              {errors.email && <p className="text-[14px] text-[#EF4444] mt-1">{errors.email}</p>}
            </div>

            <div>
              <label className="block text-[16px] font-['Inter',sans-serif] font-medium text-white mb-2">Teléfono *</label>
              <Input placeholder="612 345 678" value={form.telefono} onChange={(e) => handleChange('telefono', e.target.value)} onFocus={() => setFocused('telefono')} onBlur={() => setFocused(null)} state={getState('telefono')} />
              {errors.telefono && <p className="text-[14px] text-[#EF4444] mt-1">{errors.telefono}</p>}
            </div>

            <div>
              <label className="block text-[16px] font-['Inter',sans-serif] font-medium text-white mb-2">Número de personas *</label>
              <Input placeholder="4" value={form.personas} onChange={(e) => handleChange('personas', e.target.value)} onFocus={() => setFocused('personas')} onBlur={() => setFocused(null)} state={getState('personas')} />
              {errors.personas && <p className="text-[14px] text-[#EF4444] mt-1">{errors.personas}</p>}
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-[16px] font-['Inter',sans-serif] font-medium text-white mb-2">Fecha *</label>
                <input type="date" value={form.fecha} onChange={(e) => handleChange('fecha', e.target.value)} onFocus={() => setFocused('fecha')} onBlur={() => setFocused(null)} min={new Date().toISOString().split('T')[0]} className={dateClass('fecha')} />
                {errors.fecha && <p className="text-[14px] text-[#EF4444] mt-1">{errors.fecha}</p>}
              </div>
              <div>
                <label className="block text-[16px] font-['Inter',sans-serif] font-medium text-white mb-2">Hora *</label>
                <input type="time" value={form.hora} onChange={(e) => handleChange('hora', e.target.value)} onFocus={() => setFocused('hora')} onBlur={() => setFocused(null)} min="12:00" max="23:00" className={dateClass('hora')} />
                {errors.hora && <p className="text-[14px] text-[#EF4444] mt-1">{errors.hora}</p>}
              </div>
            </div>

            <div>
              <label className="block text-[16px] font-['Inter',sans-serif] font-medium text-white mb-2">Comentarios adicionales <span className="text-[#8C8C8C] font-normal">(opcional)</span></label>
              <textarea
                placeholder="Alergias, preferencias de mesa, celebración especial..."
                value={form.comentarios}
                onChange={(e) => handleChange('comentarios', e.target.value)}
                onFocus={() => setFocused('comentarios')}
                onBlur={() => setFocused(null)}
                rows={4}
                className={`flex flex-row justify-start items-start px-4 py-3 gap-2.5 rounded-lg bg-[#1A1A1A] font-['Inter',sans-serif] font-medium text-base leading-[19px] w-full resize-none outline-none ${focused === 'comentarios' ? 'border-2 border-[#D92525] text-white' : 'border border-[#333333] text-white'}`}
              />
            </div>

            <div className="pt-4">
              <Button type="submit" variant="primary" className="w-full text-lg py-4">Confirmar reserva</Button>
            </div>

            <p className="text-[12px] font-['Inter',sans-serif] text-[#8C8C8C] text-center">
              * Campos obligatorios. Cancela gratis hasta 2 horas antes de tu reserva.
            </p>
          </div>
        </form>
      </div>
    </div>
  )
}
