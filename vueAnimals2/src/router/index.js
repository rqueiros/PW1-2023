import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import LoginView from '../views/LoginView.vue'
import AnimalListView from '../views/AnimalListView.vue'
import AnimalView from '../views/AnimalView.vue'
import AddAnimalView from "../views/AddAnimalView.vue";
import PageNotFoundView from '../views/PageNotFoundView.vue'
import { useUserStore } from "@/stores/user";



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      component: AboutView,
    },
    {
      path: "/login",
      name: "login",
      component: LoginView,
    },
    {
      path: "/animals",
      name: "animals",
      component: AnimalListView,
    },
    {
      path: "/animals/:id",
      name: "animal",
      component: AnimalView,
      meta: { requiresAuth: true },
    },
    {
      path: "/addanimal",
      name: "addanimal",
      component: AddAnimalView,
      meta: { requiresAuth: true },
    },
    {
      path: "/:pathMatch(.*)*",
      name: "pagenotfound",
      component: PageNotFoundView,
    },
  ],
});

router.beforeEach((to, from) => {
  // instead of having to check every route record with
  // to.matched.some(record => record.meta.requiresAuth)
  if (to.meta.requiresAuth && !useUserStore().isUser) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    return {
      path: "/login",
      // save the location we were at to come back later
      query: { redirect: to.fullPath },
    };
  }
});

export default router
