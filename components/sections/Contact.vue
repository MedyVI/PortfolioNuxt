<script setup lang="ts">
const form = reactive({
  name: '',
  email: '',
  message: '',
})

const isSubmitting = ref(false)
const submitStatus = ref<'idle' | 'success' | 'error'>('idle')

const socialLinks = [
  {
    name: 'GitHub',
    icon: 'i-simple-icons-github',
    url: 'https://github.com/votre-username',
    color: 'text-gray-900 dark:text-white',
  },
  {
    name: 'LinkedIn',
    icon: 'i-simple-icons-linkedin',
    url: 'https://linkedin.com/in/votre-profile',
    color: 'text-blue-600 dark:text-blue-400',
  },
  {
    name: 'Twitter',
    icon: 'i-simple-icons-twitter',
    url: 'https://twitter.com/votre-username',
    color: 'text-sky-500 dark:text-sky-400',
  },
  {
    name: 'Email',
    icon: 'i-heroicons-envelope',
    url: 'mailto:votre.email@example.com',
    color: 'text-red-600 dark:text-red-400',
  },
]

const handleSubmit = async () => {
  isSubmitting.value = true
  submitStatus.value = 'idle'

  try {
    // Simuler un appel API
    await new Promise((resolve) => setTimeout(resolve, 1500))

    // TODO: Implémenter l'envoi réel via API
    // await $fetch('/api/contact', { method: 'POST', body: form })

    submitStatus.value = 'success'
    Object.assign(form, { name: '', email: '', message: '' })
  } catch (error) {
    submitStatus.value = 'error'
  } finally {
    isSubmitting.value = false
  }
}
</script>

<template>
  <section id="contact" class="py-20 bg-white dark:bg-gray-900">
    <UContainer>
      <div class="space-y-12">
        <!-- Section Title -->
        <div class="text-center space-y-4">
          <h2 class="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">Contact</h2>
          <p class="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Une question ? Un projet ? N'hésitez pas à me contacter
          </p>
        </div>

        <div class="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <!-- Formulaire -->
          <div
            class="p-8 rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-800/50 border border-gray-200 dark:border-gray-700"
          >
            <form @submit.prevent="handleSubmit" class="space-y-6">
              <!-- Nom -->
              <div>
                <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Nom
                </label>
                <input
                  v-model="form.name"
                  type="text"
                  required
                  class="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition"
                  placeholder="Votre nom"
                />
              </div>

              <!-- Email -->
              <div>
                <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Email
                </label>
                <input
                  v-model="form.email"
                  type="email"
                  required
                  class="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition"
                  placeholder="votre@email.com"
                />
              </div>

              <!-- Message -->
              <div>
                <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  v-model="form.message"
                  required
                  rows="5"
                  class="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition resize-none"
                  placeholder="Votre message..."
                />
              </div>

              <!-- Submit Button -->
              <UButton
                type="submit"
                color="primary"
                size="lg"
                block
                :loading="isSubmitting"
                :disabled="isSubmitting"
              >
                {{ isSubmitting ? 'Envoi en cours...' : 'Envoyer le message' }}
              </UButton>

              <!-- Status Messages -->
              <div v-if="submitStatus === 'success'" class="text-green-600 dark:text-green-400 text-sm text-center">
                ✓ Message envoyé avec succès !
              </div>
              <div v-if="submitStatus === 'error'" class="text-red-600 dark:text-red-400 text-sm text-center">
                ✗ Erreur lors de l'envoi. Veuillez réessayer.
              </div>
            </form>
          </div>

          <!-- Social Links & Info -->
          <div class="space-y-8">
            <div>
              <h3 class="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                Ou via les réseaux sociaux
              </h3>

              <div class="space-y-4">
                <a
                  v-for="social in socialLinks"
                  :key="social.name"
                  :href="social.url"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="flex items-center gap-4 p-4 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-primary-400 dark:hover:border-primary-500 transition-all duration-300 hover:shadow-lg group"
                >
                  <div
                    class="w-12 h-12 rounded-lg bg-gray-100 dark:bg-gray-700 flex items-center justify-center group-hover:scale-110 transition-transform"
                  >
                    <UIcon :name="social.icon" :class="social.color" class="w-6 h-6" />
                  </div>
                  <span class="font-medium text-gray-900 dark:text-white">
                    {{ social.name }}
                  </span>
                  <UIcon
                    name="i-heroicons-arrow-top-right-on-square"
                    class="w-5 h-5 text-gray-400 ml-auto opacity-0 group-hover:opacity-100 transition-opacity"
                  />
                </a>
              </div>
            </div>

            <!-- Info supplémentaire -->
            <div
              class="p-6 rounded-xl bg-primary-50 dark:bg-primary-900/20 border border-primary-200 dark:border-primary-800"
            >
              <p class="text-sm text-gray-700 dark:text-gray-300">
                💡 <strong>Temps de réponse :</strong> Je réponds généralement sous 24-48h.
              </p>
            </div>
          </div>
        </div>
      </div>
    </UContainer>
  </section>
</template>
