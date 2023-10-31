<script setup>
//import BlogPosts from './components/BlogPosts.vue'
//import CounterManager from './components/CounterManager.vue'
import Layout from "./components/Layout.vue";
</script>

<template>
  <Layout>
    <template #header>
      HEADER
    </template>
    <template #default>
      CONTENT
    </template>
    <template #footer>
      FOOTER
    </template>
  </Layout>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
