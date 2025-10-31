<script setup lang="ts">
// Navigation items - utilise des ancres pour scroll smooth
const navigation = [
  { name: 'Accueil', to: '#hero' },
  { name: 'À propos', to: '#about' },
  { name: 'Projets', to: '#projects' },
  { name: 'Contact', to: '#contact' },
]

// Mobile menu state
const isMenuOpen = ref(false)

// Fonction pour le smooth scroll
const scrollToSection = (e: Event, href: string) => {
  e.preventDefault()
  const element = document.querySelector(href)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
  isMenuOpen.value = false
}
</script>

<template>
  <header
    class="sticky top-0 z-50 w-full border-b border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md"
  >
    <UContainer>
      <nav class="flex items-center justify-between h-16">
        <!-- Logo -->
        <NuxtLink to="/" class="flex items-center space-x-2">
          <span class="text-2xl font-bold text-primary">Médy</span>
          <span class="text-2xl font-bold text-gray-900 dark:text-white">VI</span>
        </NuxtLink>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center space-x-8">
          <a
            v-for="item in navigation"
            :key="item.name"
            :href="item.to"
            class="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors cursor-pointer"
            @click="scrollToSection($event, item.to)"
          >
            {{ item.name }}
          </a>
        </div>

        <!-- Mobile Menu Button -->
        <UButton
          color="neutral"
          variant="ghost"
          :icon="isMenuOpen ? 'i-heroicons-x-mark' : 'i-heroicons-bars-3'"
          class="md:hidden"
          @click="isMenuOpen = !isMenuOpen"
        />
      </nav>

      <!-- Mobile Navigation -->
      <div v-if="isMenuOpen" class="md:hidden py-4 border-t border-gray-200 dark:border-gray-800">
        <div class="flex flex-col space-y-4">
          <a
            v-for="item in navigation"
            :key="item.name"
            :href="item.to"
            class="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors cursor-pointer"
            @click="scrollToSection($event, item.to)"
          >
            {{ item.name }}
          </a>
        </div>
      </div>
    </UContainer>
  </header>
</template>
