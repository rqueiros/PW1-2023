<template>
  <div>
    <ul>
      <li v-for="product in products" :key="product.id">
        {{ product.name }} -  ${{ product.price }}
        <button @click="selectProduct(product)">Selecionar</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    products: {
      type: Array,
      required: true,
    },
  },
  methods: {
    selectProduct(product) {
      this.$emit("product-selected", product);
    },
  },
};
</script>

<style lang="scss" scoped>
</style>