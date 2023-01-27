<template>
  <v-app :theme="theme">
    <v-container style="height: 100vh;">
      <v-row class="fill-height" align-content="center" justify="center">
        <v-col class="text-subtitle-1 text-center" cols="12">
          Loading...
        </v-col>
        <v-col cols="6">
          <v-progress-linear color="deep-purple-accent-4" indeterminate rounded height="6"></v-progress-linear>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script setup lang="ts">
defineProps<{
  theme?: string
}>()
</script>

<style scoped lang="scss">

</style>