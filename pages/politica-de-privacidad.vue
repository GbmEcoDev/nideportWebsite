<template>
  <div class="prose prose-lg max-w-4xl mx-auto p-4 mt-24">
    <h1>{{ t('privacy.title') }}</h1>
    <p class="text-sm text-gray-500 mb-8">{{ t('privacy.lastUpdated') }}</p>

    <p><strong>{{ t('privacy.responsibleLabel') }}</strong> {{ t('privacy.responsible') }}<br>
    <strong>{{ t('privacy.websiteLabel') }}</strong> <a href="https://www.nideport.com" target="_blank" rel="noopener">https://www.nideport.com</a><br>
    <strong>{{ t('privacy.contactLabel') }}</strong> <a :href="`mailto:${email}`">{{ email }}</a></p>

    <h2>1. {{ t('privacy.sections.whoWeAre.title') }}</h2>
    <p v-html="formatText(t('privacy.sections.whoWeAre.content'))"></p>

    <h2>2. {{ t('privacy.sections.dataCollected.title') }}</h2>
    <p v-html="formatText(t('privacy.sections.dataCollected.content'))"></p>

    <h2>3. {{ t('privacy.sections.purposes.title') }}</h2>
    <p v-html="formatText(t('privacy.sections.purposes.content'))"></p>

    <h2>4. {{ t('privacy.sections.cookies.title') }}</h2>
    <p v-html="formatText(t('privacy.sections.cookies.content'))"></p>

    <table class="w-full my-6 border-collapse border border-gray-300">
      <thead>
        <tr class="bg-gray-100">
          <th class="border border-gray-300 p-2">{{ t('privacy.sections.cookies.table.category') }}</th>
          <th class="border border-gray-300 p-2">{{ t('privacy.sections.cookies.table.purpose') }}</th>
          <th class="border border-gray-300 p-2">{{ t('privacy.sections.cookies.table.tools') }}</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="border border-gray-300 p-2">{{ t('privacy.sections.cookies.table.rows.technical') }}</td>
          <td>{{ t('privacy.sections.cookies.table.rows.technicalPurpose') }}</td>
          <td>{{ t('privacy.sections.cookies.table.rows.technicalTools') }}</td>
        </tr>
        <tr>
          <td class="border border-gray-300 p-2">{{ t('privacy.sections.cookies.table.rows.analytics') }}</td>
          <td>{{ t('privacy.sections.cookies.table.rows.analyticsPurpose') }}</td>
          <td>{{ t('privacy.sections.cookies.table.rows.analyticsTools') }}</td>
        </tr>
        <tr>
          <td class="border border-gray-300 p-2">{{ t('privacy.sections.cookies.table.rows.marketing') }}</td>
          <td>{{ t('privacy.sections.cookies.table.rows.marketingPurpose') }}</td>
          <td>{{ t('privacy.sections.cookies.table.rows.marketingTools') }}</td>
        </tr>
      </tbody>
    </table>

    <h2>5. {{ t('privacy.sections.legalBasis.title') }}</h2>
    <p v-html="formatText(t('privacy.sections.legalBasis.content'))"></p>

    <h2>6. {{ t('privacy.sections.dataRecipients.title') }}</h2>
    <p v-html="formatText(t('privacy.sections.dataRecipients.content'))"></p>

    <h2>7. {{ t('privacy.sections.internationalTransfers.title') }}</h2>
    <p v-html="formatText(t('privacy.sections.internationalTransfers.content'))"></p>

    <h2>8. {{ t('privacy.sections.yourRights.title') }}</h2>
    <p v-html="formatText(yourRightsContent)"></p>

    <h2>9. {{ t('privacy.sections.security.title') }}</h2>
    <p v-html="formatText(t('privacy.sections.security.content'))"></p>

    <h2>10. {{ t('privacy.sections.dataRetention.title') }}</h2>
    <p v-html="formatText(t('privacy.sections.dataRetention.content'))"></p>

    <h2>11. {{ t('privacy.sections.updates.title') }}</h2>
    <p v-html="formatText(t('privacy.sections.updates.content'))"></p>

    <h2>12. {{ t('privacy.sections.contact.title') }}</h2>
    <p v-html="formatText(contactContent)"></p>

    <p class="mt-8 text-sm italic">{{ t('privacy.note') }}</p>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n()
const email = computed(() => t('privacy.contactEmail').replace('[at]', '@'))
const yourRightsContent = computed(() => t('privacy.sections.yourRights.content').replace('[at]', '@'))
const contactContent = computed(() => t('privacy.sections.contact.content').replace('[at]', '@'))

// Función para convertir \n en <br>
const formatText = (text: string): string => {
  if (!text) return ''
  // Reemplazar \n por <br> y escapar HTML para seguridad
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/\n/g, '<br>')
}

useHead({
  title: t('privacy.metaTitle'),
  meta: [{ name: 'description', content: t('privacy.metaDescription') }]
})
definePageMeta({
  layout: 'blog'
})
</script>
