import Input from '../components/atoms/Input'

export default {
  title: 'Atoms/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    state: {
      control: 'select',
      options: ['default', 'focus', 'error'],
      description: 'Estado visual del campo',
    },
    placeholder: { control: 'text' },
    value: { control: 'text' },
  },
}

export const Default = {
  args: { state: 'default', placeholder: 'Juan Pérez' },
}

export const Focus = {
  args: { state: 'focus', placeholder: 'Email', value: 'juan@' },
}

export const Error = {
  args: { state: 'error', placeholder: 'Teléfono', value: 'abc' },
}
