// nuxt.config.ts
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',

  // Configuration des modules
  modules: ['@nuxt/ui', '@nuxt/icon'],

  // Configuration SEO globale
  app: {
    head: {
      // Titre par défaut (peut être surchargé page par page)
      title: 'MédyVI - Développeur Web',
      titleTemplate: '%s | MédyVI', // Format : "Nom de la page | MédyVI"

      // Meta tags essentiels
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content:
            'Portfolio de MédyVI, développeur web passionné spécialisé en Nuxt 3, Vue.js et développement moderne.',
        },

        // Open Graph (Facebook, LinkedIn)
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: 'MédyVI - Développeur Web' },
        {
          property: 'og:description',
          content:
            'Portfolio de MédyVI, développeur web passionné spécialisé en Nuxt 3, Vue.js et développement moderne.',
        },
        // { property: 'og:image', content: '/og-image.jpg' }, // À ajouter plus tard
        { property: 'og:url', content: 'https://votre-domaine.com' }, // À remplacer par votre domaine

        // Twitter Card
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'MédyVI - Développeur Web' },
        {
          name: 'twitter:description',
          content: 'Portfolio de MédyVI, développeur web passionné.',
        },
        // { name: 'twitter:image', content: '/og-image.jpg' }, // À ajouter plus tard
      ],

      // Liens (favicon, etc.)
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },
  },

  // Active les devtools Nuxt (très utile en développement)
  devtools: { enabled: true },

  // Configuration TypeScript stricte (meilleure qualité de code)
  typescript: {
    strict: true,
    typeCheck: true,
  },

  // Auto-import des composants dans les sous-dossiers
  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],
})
