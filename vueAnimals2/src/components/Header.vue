<script>
import { RouterLink } from "vue-router";
import { useUserStore } from "@/stores/user";
export default {
  data() {
    return {
      store: useUserStore()
    };
  },
  computed: {
    name() {
      return this.store.getUser?.username 
    },
    isUser() {
      return this.store.isUser
    },
    isAdmin() {
      return this.store.getUser?.type == "admin";
    },
  },
  methods: {
    logout() {
      this.store.logout();
      this.$router.push({ name: "home" });
    },
  },
};
</script>

<template>
  <v-app-bar title="VUEANIMALS2">
    <RouterLink :to="{ name: 'home' }">Home</RouterLink>
    <span class="pr-3"></span>
    <RouterLink :to="{ name: 'about' }">About</RouterLink>
    <span class="pr-3"></span>
    <RouterLink :to="{ name: 'animals' }">Catalog</RouterLink>
    <span class="pr-3"></span>
    <RouterLink :to="{ name: 'addanimal' }" v-if="isAdmin">Add animal</RouterLink>
    <RouterLink :to="{ name: 'login' }" v-if="!isUser">Login</RouterLink>
    
    <span v-else>
      Olá, {{ name }}
      <button @click="logout">logout</button>
    </span>
    <span class="pr-3"></span>
  </v-app-bar>
</template>

<style lang="scss" scoped></style>
