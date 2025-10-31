# Portfolio MédyVI

Portfolio personnel moderne et responsive développé avec Nuxt 3, mettant en avant mes compétences en développement web.

## Technologies utilisées

- **[Nuxt 3](https://nuxt.com/)** - Framework Vue.js full-stack
- **[Vue 3](https://vuejs.org/)** - Framework JavaScript progressif
- **[TypeScript](https://www.typescriptlang.org/)** - Typage statique pour JavaScript
- **[@nuxt/ui](https://ui.nuxt.com/)** - Bibliothèque de composants UI pour Nuxt
- **[@nuxt/icon](https://nuxt.com/modules/icon)** - Icônes avec Heroicons
- **[Tailwind CSS](https://tailwindcss.com/)** - Framework CSS utility-first (inclus dans @nuxt/ui)

## Prérequis

- Node.js >= 18.x
- npm >= 9.x (ou pnpm/yarn)

## Installation

Clonez le repository et installez les dépendances :

```bash
# Cloner le repository
git clone <votre-repo-url>
cd PortfolioNuxt

# Installer les dépendances
npm install
```

## Scripts disponibles

```bash
# Démarrer le serveur de développement (http://localhost:3000)
npm run dev

# Build pour la production
npm run build

# Générer un site statique
npm run generate

# Preview du build de production
npm run preview

# Linter le code (ESLint)
npm run lint

# Corriger automatiquement les erreurs de linting
npm run lint:fix

# Formater le code (Prettier)
npm run format

# Vérifier le formatage du code
npm run format:check
```

## Structure du projet

```
PortfolioNuxt/
├── components/           # Composants Vue réutilisables
│   ├── common/          # Composants communs (Header, Footer, etc.)
│   ├── sections/        # Sections de pages (Hero, About, etc.)
│   └── ui/              # Composants UI personnalisés
├── composables/         # Logique réutilisable (Vue composables)
├── layouts/             # Layouts de pages
│   └── default.vue     # Layout par défaut avec Header/Footer
├── pages/               # Pages du site (routing automatique)
│   └── index.vue       # Page d'accueil
├── public/              # Fichiers statiques
├── server/              # API et middleware côté serveur
├── types/               # Définitions TypeScript
├── utils/               # Fonctions utilitaires
├── app.vue              # Composant racine de l'application
├── nuxt.config.ts       # Configuration Nuxt
└── tsconfig.json        # Configuration TypeScript
```

## Fonctionnalités

- ✅ Design moderne et responsive
- ✅ Dark mode automatique
- ✅ Navigation avec routing automatique
- ✅ SEO optimisé avec meta tags
- ✅ TypeScript strict mode
- ✅ Formatage automatique avec Prettier
- ✅ Linting avec ESLint
- ✅ Composants auto-importés
- ✅ Performance optimisée

## Développement

Ce projet suit les meilleures pratiques professionnelles :

- **Code Quality** : ESLint + Prettier pour un code uniforme
- **TypeScript** : Typage strict activé
- **Architecture** : Structure de dossiers claire et organisée
- **SEO** : Meta tags configurés pour les moteurs de recherche
- **Accessibilité** : Composants @nuxt/ui accessibles par défaut

## Déploiement

Le site peut être déployé sur plusieurs plateformes :

- **Vercel** : `npm run build` (déploiement automatique)
- **Netlify** : `npm run generate` (site statique)
- **Cloudflare Pages** : `npm run generate`

Pour plus d'informations, consultez la [documentation Nuxt sur le déploiement](https://nuxt.com/docs/getting-started/deployment).

## Contact

- **GitHub** : [github.com/votre-username](https://github.com)
- **LinkedIn** : [linkedin.com/in/votre-profile](https://linkedin.com)
- **Email** : votre.email@example.com

---

Fait avec ♥ avec Nuxt 3
