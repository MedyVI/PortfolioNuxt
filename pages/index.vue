<script setup lang="ts">
// SEO pour la page d'accueil
useHead({
  title: 'Accueil',
  meta: [
    {
      name: 'description',
      content: 'Portfolio de MédyVI - Développeur Full Stack spécialisé en Vue.js, Nuxt et TypeScript',
    },
  ],
})
</script>

<template>
  <div>
    <!-- Hero Section -->
    <Hero />

    <!-- About Section -->
    <About />

    <!-- Projects Section -->
    <Projects />

    <!-- Contact Section -->
    <Contact />
  </div>
</template>
