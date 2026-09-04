import { SearchBar } from '../components/molecules/SearchBar'

export default {
  title: 'Molecules/SearchBar',
  component: SearchBar,
  tags: ['autodocs'],
  argTypes: {
    state: {
      control: 'select',
      options: ['default', 'focus', 'error'],
      description: 'Estado visual del buscador',
    },
    placeholder: { control: 'text' },
    value: { control: 'text' },
  },
}

export const Default = {
  args: { state: 'default', placeholder: 'Buscar hamburguesa...' },
}

export const Active = {
  args: { state: 'focus', placeholder: 'Buscar hamburguesa...', value: 'BBQ' },
  name: 'Activo (con texto)',
}

export const Error = {
  args: { state: 'error', placeholder: 'Buscar hamburguesa...' },
}
