import '../src/index.css'

/** @type { import('@storybook/react-vite').Preview } */
const preview = {
  parameters: {
    backgrounds: {
      default: 'dark',
      values: [
        { name: 'dark', value: '#1A1A1A' },
        { name: 'surface', value: '#222222' },
      ],
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    a11y: { test: 'todo' },
  },
  decorators: [
    (Story) => (
      <div className="dark p-8" style={{ background: '#1A1A1A', minHeight: '100vh' }}>
        <Story />
      </div>
    ),
  ],
};

export default preview;