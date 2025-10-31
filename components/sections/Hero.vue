<script setup lang="ts">
// Animation simple pour le titre
const roles = ['Développeur Full Stack', 'Créateur Web', 'Passionné de Code']
const currentRole = ref(0)

onMounted(() => {
  setInterval(() => {
    currentRole.value = (currentRole.value + 1) % roles.length
  }, 3000)
})
</script>

<template>
  <section id="hero" class="relative min-h-screen flex items-center justify-center overflow-hidden">
    <!-- Gradient de fond subtil -->
    <div
      class="absolute inset-0 bg-linear-to-br from-primary-50 via-white to-primary-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900" />

    <!-- Contenu principal -->
    <UContainer class="relative z-10">
      <div class="flex flex-col items-center text-center space-y-8 py-20">
        <!-- Avatar avec effet glassmorphism subtil -->
        <div class="relative w-32 h-32 rounded-full bg-linear-to-br from-primary-400 to-primary-600 p-1 shadow-2xl">
          <div class="w-full h-full rounded-full bg-white dark:bg-gray-800 flex items-center justify-center">
            <span class="text-5xl">👨‍💻</span>
          </div>
        </div>

        <!-- Titre principal -->
        <div class="space-y-4">
          <h1 class="text-6xl md:text-7xl lg:text-8xl font-serif text-gray-900 dark:text-white tracking-tight">
            
          </h1>

          <!-- Rôle avec transition -->
          <div class="h-12 flex items-center justify-center">
            <Transition name="fade" mode="out-in">
              <p :key="currentRole"
                class="text-2xl md:text-3xl text-primary-600 dark:text-primary-400 font-medium currentRole">
                {{ roles[currentRole] }}
              </p>
            </Transition>
          </div>

          <p class="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Je crée des expériences web modernes et performantes avec Vue.js, Nuxt et TypeScript
          </p>
        </div>

        <!-- CTA Buttons -->
        <div class="flex flex-col sm:flex-row gap-4 pt-4">
          <UButton size="xl" color="primary" icon="i-heroicons-envelope" to="#contact" class="font-orbiter">
            Me contacter
          </UButton>
          <UButton size="xl" color="neutral" variant="outline" icon="i-heroicons-arrow-down" to="#projects"
            class="font-orbiter">
            Voir mes projets
          </UButton>
        </div>

        <!-- Scroll indicator -->
        <div class="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <UIcon name="i-heroicons-chevron-down" class="w-8 h-8 text-gray-400" />
        </div>
      </div>
    </UContainer>
  </section>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s ease;
}

.fade-enter-from {
  opacity: 0;
  transform: translateY(-10px);
}

.fade-leave-to {
  opacity: 0;
  transform: translateY(10px);
}
</style>
