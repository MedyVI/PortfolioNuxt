<script setup lang="ts">
const technologies = [
  { name: 'Vue.js', icon: 'i-logos-vue', level: 90 },
  { name: 'Nuxt', icon: 'i-logos-nuxt-icon', level: 85 },
  { name: 'TypeScript', icon: 'i-logos-typescript-icon', level: 80 },
  { name: 'Tailwind CSS', icon: 'i-logos-tailwindcss-icon', level: 90 },
  { name: 'Node.js', icon: 'i-logos-nodejs-icon', level: 75 },
  { name: 'Git', icon: 'i-logos-git-icon', level: 85 },
]
</script>

<template>
  <section id="about" class="py-20 bg-white dark:bg-gray-900">
    <UContainer>
      <div class="space-y-12">
        <!-- Section Title -->
        <div class="text-center space-y-4">
          <h2 class="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">À propos</h2>
          <p class="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Développeur passionné par les technologies web modernes
          </p>
        </div>

        <!-- Content Grid -->
        <div class="grid md:grid-cols-2 gap-12 items-start">
          <!-- Bio -->
          <div class="space-y-6">
            <div
              class="p-8 rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-800/50 border border-gray-200 dark:border-gray-700"
            >
              <h3 class="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                Qui suis-je ?
              </h3>
              <div class="space-y-4 text-gray-600 dark:text-gray-400">
                <p>
                  Développeur web passionné, je me spécialise dans la création d'applications
                  modernes et performantes avec Vue.js et Nuxt.
                </p>
                <p>
                  Mon objectif est de transformer des idées en expériences utilisateur fluides et
                  intuitives, tout en respectant les meilleures pratiques du développement web.
                </p>
                <p>
                  J'aime apprendre de nouvelles technologies et relever des défis techniques pour
                  créer des solutions innovantes.
                </p>
              </div>
            </div>

            <!-- CTA Download CV -->
            <UButton
              size="lg"
              color="primary"
              variant="outline"
              icon="i-heroicons-arrow-down-tray"
              block
            >
              Télécharger mon CV
            </UButton>
          </div>

          <!-- Stack Technique -->
          <div class="space-y-6">
            <h3 class="text-2xl font-semibold text-gray-900 dark:text-white">
              Stack Technique
            </h3>

            <div class="space-y-4">
              <div
                v-for="tech in technologies"
                :key="tech.name"
                class="group p-4 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-primary-400 dark:hover:border-primary-500 transition-all duration-300 hover:shadow-lg"
              >
                <div class="flex items-center gap-4 mb-3">
                  <UIcon :name="tech.icon" class="w-8 h-8" />
                  <span class="font-medium text-gray-900 dark:text-white flex-1">
                    {{ tech.name }}
                  </span>
                  <span class="text-sm text-gray-500 dark:text-gray-400">
                    {{ tech.level }}%
                  </span>
                </div>

                <!-- Progress bar -->
                <div class="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                  <div
                    class="h-full bg-gradient-to-r from-primary-500 to-primary-600 rounded-full transition-all duration-1000 ease-out"
                    :style="{ width: `${tech.level}%` }"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </UContainer>
  </section>
</template>
