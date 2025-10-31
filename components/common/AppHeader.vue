<script setup lang="ts">
// Navigation items
const navigation = [
  { name: 'Accueil', to: '/' },
  { name: 'À propos', to: '/about' },
  { name: 'Projets', to: '/projects' },
  { name: 'Contact', to: '/contact' },
]

// Mobile menu state
const isMenuOpen = ref(false)
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
          <NuxtLink
            v-for="item in navigation"
            :key="item.name"
            :to="item.to"
            class="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors"
            active-class="text-primary dark:text-primary font-semibold"
          >
            {{ item.name }}
          </NuxtLink>
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
          <NuxtLink
            v-for="item in navigation"
            :key="item.name"
            :to="item.to"
            class="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors"
            active-class="text-primary dark:text-primary font-semibold"
            @click="isMenuOpen = false"
          >
            {{ item.name }}
          </NuxtLink>
        </div>
      </div>
    </UContainer>
  </header>
</template>
