<script setup lang="ts">
const projects = [
  {
    id: 1,
    title: 'Portfolio Nuxt 3',
    description: 'Portfolio personnel moderne développé avec Nuxt 3, TypeScript et Tailwind CSS',
    image: '🎨',
    tags: ['Nuxt 3', 'TypeScript', 'Tailwind'],
    githubUrl: 'https://github.com',
    demoUrl: 'https://demo.com',
  },
  {
    id: 2,
    title: 'Application E-commerce',
    description: 'Plateforme e-commerce complète avec panier, paiement et gestion des commandes',
    image: '🛒',
    tags: ['Vue.js', 'Node.js', 'MongoDB'],
    githubUrl: 'https://github.com',
    demoUrl: 'https://demo.com',
  },
  {
    id: 3,
    title: 'Dashboard Analytics',
    description: 'Tableau de bord interactif pour visualiser des données en temps réel',
    image: '📊',
    tags: ['React', 'D3.js', 'API'],
    githubUrl: 'https://github.com',
    demoUrl: 'https://demo.com',
  },
  {
    id: 4,
    title: 'API REST Node.js',
    description: 'API RESTful sécurisée avec authentification JWT et documentation Swagger',
    image: '⚙️',
    tags: ['Node.js', 'Express', 'PostgreSQL'],
    githubUrl: 'https://github.com',
    demoUrl: null,
  },
]

const selectedFilter = ref('all')
const filters = ['all', 'Nuxt 3', 'Vue.js', 'TypeScript', 'Node.js']

const filteredProjects = computed(() => {
  if (selectedFilter.value === 'all') return projects
  return projects.filter((p) => p.tags.includes(selectedFilter.value))
})
</script>

<template>
  <section id="projects" class="py-20 bg-gray-50 dark:bg-gray-800/50">
    <UContainer>
      <div class="space-y-12">
        <!-- Section Title -->
        <div class="text-center space-y-4">
          <h2 class="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
            Mes Projets
          </h2>
          <p class="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Découvrez quelques-uns des projets sur lesquels j'ai travaillé
          </p>
        </div>

        <!-- Filters -->
        <div class="flex flex-wrap justify-center gap-3">
          <UButton
            v-for="filter in filters"
            :key="filter"
            :color="selectedFilter === filter ? 'primary' : 'neutral'"
            :variant="selectedFilter === filter ? 'solid' : 'outline'"
            size="sm"
            @click="selectedFilter = filter"
          >
            {{ filter === 'all' ? 'Tous' : filter }}
          </UButton>
        </div>

        <!-- Projects Grid -->
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            v-for="project in filteredProjects"
            :key="project.id"
            class="group relative bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
          >
            <!-- Image/Icon -->
            <div
              class="h-48 bg-gradient-to-br from-primary-100 to-primary-200 dark:from-primary-900/20 dark:to-primary-800/20 flex items-center justify-center text-7xl"
            >
              {{ project.image }}
            </div>

            <!-- Content -->
            <div class="p-6 space-y-4">
              <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                {{ project.title }}
              </h3>
              <p class="text-gray-600 dark:text-gray-400 line-clamp-2">
                {{ project.description }}
              </p>

              <!-- Tags -->
              <div class="flex flex-wrap gap-2">
                <span
                  v-for="tag in project.tags"
                  :key="tag"
                  class="px-3 py-1 text-xs font-medium bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full"
                >
                  {{ tag }}
                </span>
              </div>

              <!-- Links -->
              <div class="flex gap-3 pt-2">
                <UButton
                  v-if="project.githubUrl"
                  color="neutral"
                  variant="outline"
                  icon="i-simple-icons-github"
                  :to="project.githubUrl"
                  target="_blank"
                  size="sm"
                >
                  Code
                </UButton>
                <UButton
                  v-if="project.demoUrl"
                  color="primary"
                  icon="i-heroicons-arrow-top-right-on-square"
                  :to="project.demoUrl"
                  target="_blank"
                  size="sm"
                >
                  Demo
                </UButton>
              </div>
            </div>

            <!-- Hover overlay subtil -->
            <div
              class="absolute inset-0 bg-gradient-to-t from-primary-600/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
            />
          </div>
        </div>
      </div>
    </UContainer>
  </section>
</template>
