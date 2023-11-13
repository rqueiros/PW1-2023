<script>
import { RouterLink } from "vue-router";
export default {
  data() {
    return {
      user: localStorage.loggedUser ? JSON.parse(localStorage.loggedUser) : null 
    }
  },
  methods: {
    logout() {
      localStorage.removeItem("loggedUser")
       this.$router.push({ name: "home" });
       location.reload(); 
    }
  },
}
</script>

<template>
  <v-app-bar title="VUEANIMALS">
    <RouterLink :to="{ name: 'home' }">Home</RouterLink>
    <span class="pr-3"></span>
    <RouterLink :to="{ name: 'about' }">About</RouterLink>
    <span class="pr-3"></span>
    <RouterLink :to="{ name: 'animals' }">Catalog</RouterLink>
    <span class="pr-3"></span>
    <RouterLink :to="{ name: 'login' }" v-if="!user">Login</RouterLink>
    <span v-else>
      Olá, {{ user.username }} 
      <button @click="logout">logout</button>
    </span>
    <span class="pr-3"></span>
  </v-app-bar>
</template>

<style lang="scss" scoped></style>
