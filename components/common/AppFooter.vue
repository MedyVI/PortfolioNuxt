<script setup lang="ts">
const currentYear = new Date().getFullYear()

const socialLinks = [
  { name: 'GitHub', icon: 'i-heroicons-code-bracket', url: 'https://github.com' },
  { name: 'LinkedIn', icon: 'i-heroicons-briefcase', url: 'https://linkedin.com' },
  { name: 'Twitter', icon: 'i-heroicons-at-symbol', url: 'https://twitter.com' },
]

const footerLinks = [
  { name: 'Accueil', to: '/' },
  { name: 'À propos', to: '/about' },
  { name: 'Projets', to: '/projects' },
  { name: 'Contact', to: '/contact' },
]
</script>

<template>
  <footer class="border-t border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900">
    <UContainer>
      <div class="py-12">
        <!-- Top section -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <!-- Brand -->
          <div class="space-y-4">
            <div class="flex items-center space-x-2">
              <span class="text-2xl font-bold text-primary">Médy</span>
              <span class="text-2xl font-bold text-gray-900 dark:text-white">VI</span>
            </div>
            <p class="text-gray-600 dark:text-gray-400">
              Développeur web passionné spécialisé en Nuxt 3, Vue.js et développement moderne.
            </p>
          </div>

          <!-- Links -->
          <div class="space-y-4">
            <h3 class="font-semibold text-gray-900 dark:text-white">Navigation</h3>
            <ul class="space-y-2">
              <li v-for="link in footerLinks" :key="link.name">
                <NuxtLink
                  :to="link.to"
                  class="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors"
                >
                  {{ link.name }}
                </NuxtLink>
              </li>
            </ul>
          </div>

          <!-- Social -->
          <div class="space-y-4">
            <h3 class="font-semibold text-gray-900 dark:text-white">Suivez-moi</h3>
            <div class="flex space-x-4">
              <UButton
                v-for="social in socialLinks"
                :key="social.name"
                :icon="social.icon"
                color="neutral"
                variant="ghost"
                size="lg"
                :to="social.url"
                target="_blank"
                :aria-label="social.name"
              />
            </div>
          </div>
        </div>

        <!-- Bottom section -->
        <div
          class="pt-8 border-t border-gray-200 dark:border-gray-800 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
        >
          <p class="text-sm text-gray-600 dark:text-gray-400">
            © {{ currentYear }} MédyVI. Tous droits réservés.
          </p>
          <p class="text-sm text-gray-600 dark:text-gray-400">
            Fait avec <span class="text-red-500">♥</span> avec Nuxt 3
          </p>
        </div>
      </div>
    </UContainer>
  </footer>
</template>
