<template>
  <div>
    <h2>Lista de Produtos</h2>
    <Catalog
      :products="productList"
      @product-selected="handlerProductSelected"
    />
    <h3>{{ message }}</h3>
  </div>
</template>

<script>
import Catalog from "./Catalog.vue";
export default {
  components: {
    Catalog,
  },
  data() {
    return {
      productList: [],
      message: "",
    };
  },
  created() {
    this.productList = [
      { id: 1, name: "p1", price: 100 },
      { id: 2, name: "p2", price: 250 },
      { id: 3, name: "p3", price: 72 },
    ];
  },
  methods: {
    handlerProductSelected(product) {
      // Implemente a lógica necessária para lidar com o produto selecionado
      // Por exemplo, atualização do estado, exibição de informações, etc.
      this.message = `Produto selecionado: ${product.name}`;
    },
  },
};
</script>

<style lang="scss" scoped>
</style>