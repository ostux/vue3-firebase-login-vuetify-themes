import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import LoadingView from "@/views/LoadingView.vue";
import { useUserStore } from "@/store/userStore";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "loading",
      component: LoadingView,
      beforeEnter: async (to, from) => {
        const userStore = useUserStore();
        const authenticated = await userStore.isAuthenticated.value;
        if (!authenticated) {
          return { name: "login" };
        }
        return true;
      },
    },
    {
      path: "/home",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("@/views/AboutView.vue"),
    },
    {
      path: "/login",
      name: "login",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("@/views/LoginView.vue"),
    },
  ],
});

router.beforeEach(async (to, from) => {
  console.log("from: ", from.name, "to: ", to.name);

  // loading always ok to show
  if (to.name === "loading") {
    return true;
  }

  const userStore = useUserStore();
  const authenticated = await userStore.isAuthenticated.value;

  console.log("authenticated? ", authenticated);

  // only show login page if not authenticated
  if (to.name === "login" && !authenticated) {
    return true;
  }

  // if authenticated we are ok with the rest
  if (authenticated) {
    return true;
  }

  // no go...
  return (to.name = "login");
});

export default router;
