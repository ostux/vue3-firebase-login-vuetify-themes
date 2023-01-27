<template>
  <v-toolbar :elevation="8" title="Vue3FirebaseVuetifyThemesFontasesome" color="primary">
    <v-spacer></v-spacer>

    <v-menu class="w-auto">
      <template v-slot:activator="{ props }">
        <span class="pl-2 pr-2 py-4" v-bind="props">
          <font-awesome-icon class="mr-2" icon="fa-solid fa-circle-half-stroke" />
        </span>
      </template>

      <v-list density="compact" min-width="270">
        <v-list-item title="themes" subtitle="It's your choice...">
          <template v-slot:prepend>
            <font-awesome-icon class="mr-4" icon="fa-solid fa-circle-half-stroke" />
          </template>
        </v-list-item>

        <v-list-item v-for="(theme, index) in themes" :key="index" @click="switchTheme(theme.code)" :class="theme.code">
          <v-list-item-title>{{ theme.name }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>

    <v-menu class="w-auto">
      <template v-slot:activator="{ props }">
        <span class="pl-2 pr-5 py-4" v-bind="props">
          <font-awesome-icon class="p-4" icon="fa-solid fa-ellipsis-vertical" />
        </span>
      </template>

      <v-list min-width="270">
        <v-list-item :title="userStore.user?.displayName || ''" subtitle="welcome back">
          <template v-slot:prepend>
            <font-awesome-icon class="mr-4" icon="fa-solid fa-user-astronaut" />
          </template>
        </v-list-item>

        <v-divider></v-divider>

        <v-list-item title="log out" active-color="primary" @click="logOut">
          <template v-slot:prepend>
            <font-awesome-icon class="mr-4" icon="fa-solid fa-right-from-bracket" />
          </template>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-toolbar>
</template>

<script setup lang="ts">
import { useUserStore } from '@/store/userStore';
import { useSiteSettingsStore } from '@/store/siteSettingsStore';

const themes = [
  { name: "Red", code: "red" },
  { name: "Pink", code: "pink" },
  { name: "Purple", code: "purple" },
  { name: "Deep Purple", code: "deepPurple" },
  { name: "Indigo", code: "indigo" },
  { name: "Blue", code: "blue" },
  { name: "Light Blue", code: "lightBlue" },
  { name: "Cyan", code: "cyan" },
  { name: "Teal", code: "teal" },
  { name: "Green", code: "green" },
  { name: "Light Green", code: "lightGreen" },
  { name: "Lime", code: "lime" },
  { name: "Yellow", code: "yellow" },
  { name: "Amber", code: "amber" },
  { name: "Orange", code: "orange" },
  { name: "Deep Orange", code: "deepOrange" },
  { name: "Brown", code: "brown" },
  { name: "Blue Grey", code: "blueGrey" },
]
const userStore = useUserStore()
const siteSettingsStore = useSiteSettingsStore()

const logOut = () => {
  userStore.logOut()
}

const switchTheme = (t: string) => {
  siteSettingsStore.switchTheme(t)
}
</script>

<style scoped lang="scss">
.red {
  color: white;
  background-color: #F44336;
}

.pink {
  color: white;
  background-color: #E91E63;
}

.purple {
  color: white;
  background-color: #9C27B0;
}

.deepPurple {
  color: white;
  background-color: #673AB7;
}

.indigo {
  color: white;
  background-color: #3F51B5;
}

.blue {
  color: white;
  background-color: #2196f3;
}

.lightBlue {
  color: white;
  background-color: #03a9f4;
}

.cyan {
  color: black;
  background-color: #00bcd4;
}

.teal {
  color: white;
  background-color: #009688;
}

.green {
  color: white;
  background-color: #4caf50;
}

.lightGreen {
  color: black;
  background-color: #8bc34a;
}

.lime {
  color: black;
  background-color: #cddc39;
}

.yellow {
  color: black;
  background-color: #ffeb3b;
}

.amber {
  color: black;
  background-color: #ffc107;
}

.orange {
  color: black;
  background-color: #ff9800;
}

.deepOrange {
  color: white;
  background-color: #ff5722;
}

.brown {
  color: white;
  background-color: #795548;
}

.blueGrey {
  color: white;
  background-color: #607d8b;
}
</style>