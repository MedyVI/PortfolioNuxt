import type { Config } from 'tailwindcss'

export default {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './error.vue',
  ],
  theme: {
    extend: {
      // Ajoutez ici vos personnalisations de thème
      colors: {
        // Exemple: définir des couleurs personnalisées
        // primary: '#your-color',
      },
      fontFamily: {
        // Police sans-serif principale (DM Sans avec police variable)
        sans: ['DM Sans', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        // Police serif secondaire (DM Serif Text)
        serif: ['DM Serif Text', 'Georgia', 'Cambria', 'Times New Roman', 'Times', 'serif'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
} satisfies Config
