<template>
  <div>
    <h1>{{title}}</h1>
    <h2>{{author}}</h2>
    <p>{{content}}</p>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    author: {
      type: String
    },
    content: {
      type: String,
      required: true
    },
  },
};
</script>

<style lang="scss" scoped>
</style>