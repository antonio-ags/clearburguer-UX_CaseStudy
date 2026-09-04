import Tag from '../components/atoms/Tag'

export default {
  title: 'Atoms/Tag',
  component: Tag,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'warning', 'neutral'],
      description: 'Variante: default (vegano/sin gluten), warning (picante), neutral (premium)',
    },
    children: { control: 'text', description: 'Texto de la etiqueta' },
  },
}

export const Default = {
  args: { variant: 'default', children: 'Sin gluten' },
}

export const Warning = {
  args: { variant: 'warning', children: 'Picante' },
}

export const Neutral = {
  args: { variant: 'neutral', children: 'Premium' },
}
