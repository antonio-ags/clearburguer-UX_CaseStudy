import Button from '../components/atoms/Button'

export default {
  title: 'Atoms/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'disabled', 'ghost'],
      description: 'Variante visual del botón',
    },
    children: { control: 'text', description: 'Contenido del botón' },
  },
}

export const Primary = {
  args: { variant: 'primary', children: 'Pedir ahora' },
}

export const Secondary = {
  args: { variant: 'secondary', children: 'Ver carta' },
}

export const Ghost = {
  args: { variant: 'ghost', children: 'Cancelar' },
}

export const Disabled = {
  args: { variant: 'disabled', children: 'No disponible' },
}
