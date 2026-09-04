import { IngredientButton } from '../components/molecules/IngredientButton'

export default {
  title: 'Molecules/IngredientButton',
  component: IngredientButton,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'disabled'],
      description: 'primary = seleccionado, secondary = disponible, disabled = agotado',
    },
    name: { control: 'text', description: 'Nombre del ingrediente' },
  },
}

export const Available = {
  args: { variant: 'secondary', name: 'Cheddar' },
  name: 'Disponible (sin seleccionar)',
}

export const Selected = {
  args: { variant: 'primary', name: 'Cheddar' },
  name: 'Seleccionado',
}

export const Unavailable = {
  args: { variant: 'disabled', name: 'Guacamole' },
  name: 'Agotado',
}

export const AllStates = {
  render: () => (
    <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
      <IngredientButton variant="secondary" name="Lechuga" />
      <IngredientButton variant="primary" name="Cheddar" />
      <IngredientButton variant="disabled" name="Guacamole" />
    </div>
  ),
  name: 'Todos los estados',
}
