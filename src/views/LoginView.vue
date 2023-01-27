<template>
  <v-app :theme="theme">
    <v-container style="height: 100vh;">
      <v-row class="fill-height" align-content="center" justify="center">
        <v-col class="text-subtitle-1" cols="12">
          <v-form ref="form" @submit.prevent>
            <v-card class="mx-auto" width="400">
              <template v-slot:title>
                This is a title
              </template>

              <v-card-item>
                <v-text-field v-model="email" type="email" label="E-mail" required :rules="[emailIsValid]">
                </v-text-field>
                <v-text-field v-model="password" type="password" label="Passord" required :rules="[passwordIsValid]"
                  @keyup.enter="login"></v-text-field>
              </v-card-item>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn variant="text" @click="login">
                  Log in
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-form>

        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useUserStore } from '@/store/userStore';

defineProps<{
  theme?: string
}>()

const email = ref('')
const password = ref('')
const form = ref(null)

function emailIsValid(v: string): string | boolean {
  const regexp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
  if (v.length === 0) {
    return 'Required'
  }
  return regexp.test(v) || 'E-mail must be valid'
}

function passwordIsValid(v: string): string | boolean {
  return !(v.length === 0) || 'Required'
}

const userStore = useUserStore()

function login() {
  if (email.value === '' || password.value === '') {
    console.error('Email and Password are not optional...')

    return false
  }

  userStore.logIn(email.value, password.value)
}
</script>

<style scoped lang="scss">

</style>