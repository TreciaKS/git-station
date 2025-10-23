// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        azure: {
          100: 'var(--color-azure-100)',
          200: 'var(--color-azure-200)',
          300: 'var(--color-azure-300)',
          400: 'var(--color-azure-400)',
          500: 'var(--color-azure-500)',
        },
      },
      fontFamily: {
        display: ['var(--font-display)'],
      },
    },
  },
  plugins: [],
  content: [
    './src/**/*.{html,ts}', // Adjust based on your framework
  ],
};