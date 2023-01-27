import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import "./assets/main.scss";

import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/firebase/intex";
import { useUserStore } from "@/store/userStore";

// Vuetify
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import colors from "vuetify/lib/util/colors";

/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* import specific icons */
import {
  faCircleHalfStroke,
  faEllipsisVertical,
  faUserAstronaut,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";

/* add icons to the library */
library.add(
  faCircleHalfStroke,
  faEllipsisVertical,
  faUserAstronaut,
  faRightFromBracket
);

const vuetify = createVuetify({
  components,
  directives,
  theme: {
    themes: {
      red: {
        colors: {
          background: colors.red.lighten5,
          surface: colors.red.lighten4,
          primary: colors.red.base,
          secondary: colors.red.darken4,
          success: colors.teal.darken2,
          warning: colors.orange.lighten1,
          error: colors.red.darken4,
          info: colors.lightBlue.lighten1,
        },
      },
      pink: {
        colors: {
          background: colors.pink.lighten5,
          surface: colors.pink.lighten4,
          primary: colors.pink.base,
          secondary: colors.pink.darken4,
          success: colors.teal.darken2,
          warning: colors.orange.lighten1,
          error: colors.red.darken4,
          info: colors.lightBlue.lighten1,
        },
      },
      purple: {
        colors: {
          background: colors.purple.lighten5,
          surface: colors.purple.lighten4,
          primary: colors.purple.base,
          secondary: colors.purple.darken4,
          success: colors.teal.darken2,
          warning: colors.orange.lighten1,
          error: colors.red.darken4,
          info: colors.lightBlue.lighten1,
        },
      },
      deepPurple: {
        colors: {
          background: colors.deepPurple.lighten5,
          surface: colors.deepPurple.lighten4,
          primary: colors.deepPurple.base,
          secondary: colors.deepPurple.darken4,
          success: colors.teal.darken2,
          warning: colors.orange.lighten1,
          error: colors.red.darken4,
          info: colors.lightBlue.lighten1,
        },
      },
      indigo: {
        colors: {
          background: colors.indigo.lighten5,
          surface: colors.indigo.lighten4,
          primary: colors.indigo.base,
          secondary: colors.indigo.darken4,
          success: colors.teal.darken2,
          warning: colors.orange.lighten1,
          error: colors.red.darken4,
          info: colors.lightBlue.lighten1,
        },
      },
      blue: {
        colors: {
          background: colors.blue.lighten5,
          surface: colors.blue.lighten4,
          primary: colors.blue.base,
          secondary: colors.blue.darken4,
          success: colors.teal.darken2,
          warning: colors.orange.lighten1,
          error: colors.red.darken4,
          info: colors.lightBlue.lighten1,
        },
      },
      lightBlue: {
        colors: {
          background: colors.lightBlue.lighten5,
          surface: colors.lightBlue.lighten4,
          primary: colors.lightBlue.base,
          secondary: colors.lightBlue.darken4,
          success: colors.teal.darken2,
          warning: colors.orange.lighten1,
          error: colors.red.darken4,
          info: colors.lightBlue.lighten1,
        },
      },
      cyan: {
        colors: {
          background: colors.cyan.lighten5,
          surface: colors.cyan.lighten4,
          primary: colors.cyan.base,
          secondary: colors.cyan.darken4,
          success: colors.teal.darken2,
          warning: colors.orange.lighten1,
          error: colors.red.darken4,
          info: colors.lightBlue.lighten1,
        },
      },
      teal: {
        colors: {
          background: colors.teal.lighten5,
          surface: colors.teal.lighten4,
          primary: colors.teal.base,
          secondary: colors.teal.darken4,
          success: colors.teal.darken2,
          warning: colors.orange.lighten1,
          error: colors.red.darken4,
          info: colors.lightBlue.lighten1,
        },
      },
      green: {
        colors: {
          background: colors.green.lighten5,
          surface: colors.green.lighten4,
          primary: colors.green.base,
          secondary: colors.green.darken4,
          success: colors.teal.darken2,
          warning: colors.orange.lighten1,
          error: colors.red.darken4,
          info: colors.lightBlue.lighten1,
        },
      },
      lightGreen: {
        colors: {
          background: colors.lightGreen.lighten5,
          surface: colors.lightGreen.lighten4,
          primary: colors.lightGreen.base,
          secondary: colors.lightGreen.darken4,
          success: colors.teal.darken2,
          warning: colors.orange.lighten1,
          error: colors.red.darken4,
          info: colors.lightBlue.lighten1,
        },
      },
      lime: {
        colors: {
          background: colors.lime.lighten5,
          surface: colors.lime.lighten4,
          primary: colors.lime.base,
          secondary: colors.lime.darken4,
          success: colors.teal.darken2,
          warning: colors.orange.lighten1,
          error: colors.red.darken4,
          info: colors.lightBlue.lighten1,
        },
      },
      yellow: {
        colors: {
          background: colors.yellow.lighten5,
          surface: colors.yellow.lighten4,
          primary: colors.yellow.base,
          secondary: colors.yellow.darken4,
          success: colors.teal.darken2,
          warning: colors.orange.lighten1,
          error: colors.red.darken4,
          info: colors.lightBlue.lighten1,
        },
      },
      amber: {
        colors: {
          background: colors.amber.lighten5,
          surface: colors.amber.lighten4,
          primary: colors.amber.base,
          secondary: colors.amber.darken4,
          success: colors.teal.darken2,
          warning: colors.orange.lighten1,
          error: colors.red.darken4,
          info: colors.lightBlue.lighten1,
        },
      },
      orange: {
        colors: {
          background: colors.orange.lighten5,
          surface: colors.orange.lighten4,
          primary: colors.orange.base,
          secondary: colors.orange.darken4,
          success: colors.teal.darken2,
          warning: colors.orange.lighten1,
          error: colors.red.darken4,
          info: colors.lightBlue.lighten1,
        },
      },
      deepOrange: {
        colors: {
          background: colors.deepOrange.lighten5,
          surface: colors.deepOrange.lighten4,
          primary: colors.deepOrange.base,
          secondary: colors.deepOrange.darken4,
          success: colors.teal.darken2,
          warning: colors.orange.lighten1,
          error: colors.red.darken4,
          info: colors.lightBlue.lighten1,
        },
      },
      brown: {
        colors: {
          background: colors.brown.lighten5,
          surface: colors.brown.lighten4,
          primary: colors.brown.base,
          secondary: colors.brown.darken4,
          success: colors.teal.darken2,
          warning: colors.orange.lighten1,
          error: colors.red.darken4,
          info: colors.lightBlue.lighten1,
        },
      },
      blueGrey: {
        colors: {
          background: colors.blueGrey.lighten5,
          surface: colors.blueGrey.lighten4,
          primary: colors.blueGrey.base,
          secondary: colors.blueGrey.darken4,
          success: colors.teal.darken2,
          warning: colors.orange.lighten1,
          error: colors.red.darken4,
          info: colors.lightBlue.lighten1,
        },
      },
    },
  },
});

const app = createApp(App).component("font-awesome-icon", FontAwesomeIcon);

app.use(createPinia());

const userStore = useUserStore();
onAuthStateChanged(auth, (user) => {
  console.log("onAuthStateChanged is running...");
  if (user) {
    console.log(`User: ${user.displayName} is logged in...`);
    userStore.user = user;
    userStore.isAuthenticated.next(true);
    console.log(userStore.user);
    router.push("/home");
  } else {
    console.log(" No user logged in...");
    userStore.isAuthenticated.next(false);
    userStore.user = null;
    console.log("current route: ", router.currentRoute.value);
    router.push("/login");
  }
});

app.use(router);

app.use(vuetify).mount("#app");
