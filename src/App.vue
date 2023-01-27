<template>
  <RouterView :theme="theme" />
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import { ref } from 'vue'
import { useSiteSettingsStore } from '@/store/siteSettingsStore'

const siteSettingsStore = useSiteSettingsStore()

let theme = ref(siteSettingsStore.theme.value)

siteSettingsStore.theme.subscribe(t => {
  theme.value = t
})
</script>

<style scoped>

</style>
