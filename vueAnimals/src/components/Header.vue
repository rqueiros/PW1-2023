
<script>
import { RouterLink, RouterView } from 'vue-router'
    export default {
        
    }
</script>

<template>
    <v-app-bar title="VUEANIMALS">
        <RouterLink to="/">Home</RouterLink>
        <span class="pr-3"></span>
        <RouterLink to="/about">About</RouterLink>
        <span class="pr-3"></span>
        <RouterLink to="/animals">Catalog</RouterLink>
        <span class="pr-3"></span>
        <RouterLink to="/login">Login</RouterLink>
        <span class="pr-3"></span>
    </v-app-bar>
</template>


<style lang="scss" scoped>

</style>