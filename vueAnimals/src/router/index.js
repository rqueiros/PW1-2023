import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import LoginView from '../views/LoginView.vue'
import AnimalListView from '../views/AnimalListView.vue'
import AnimalView from '../views/AnimalView.vue'
import PageNotFoundView from '../views/PageNotFoundView.vue'


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
    },
    {
      path: "/:pathMatch(.*)*",
      name: "pagenotfound",
      component: PageNotFoundView,
    },
  ],
});

export default router
