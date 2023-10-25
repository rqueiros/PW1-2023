<template>
  <div>
    <button @click="value--" :disabled="value == minValue">-</button>
    <span>{{ value }}</span>
    <button @click="value++" :disabled="value == maxValue">+</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      minValue: 0,
      maxValue: 10,
      value: 0,
    };
  },
  created () {
    console.log("Instância Vue criada!");;
  },
  mounted () {
    console.log("Instância Vue montada!");;
  },
};
</script>

<style lang="scss" scoped>
</style>