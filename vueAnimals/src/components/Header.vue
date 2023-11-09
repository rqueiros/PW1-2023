<script>
import { RouterLink } from "vue-router";
</script>

<template>
  <v-app-bar title="VUEANIMALS">
    <RouterLink :to="{ name: 'home' }">Home</RouterLink>
    <span class="pr-3"></span>
    <RouterLink :to="{ name: 'about' }">About</RouterLink>
    <span class="pr-3"></span>
    <RouterLink :to="{ name: 'animals' }">Catalog</RouterLink>
    <span class="pr-3"></span>
    <RouterLink :to="{ name: 'login' }">Login</RouterLink>
    <span class="pr-3"></span>
  </v-app-bar>
</template>

<style lang="scss" scoped></style>
