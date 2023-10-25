<template>
    <div>
        <h1>{{productName}}</h1>
        <div>{{productAvailability ? "DISPONÍVEL" : "NÃO DISPONÍVEL"}}</div>
        <button @click="productPrice=1200">PREÇO ORIGINAL</button>
        <button @click="buy" :disabled="!productAvailability">COMPRAR</button>
        <div v-html="productDesc"></div>
        <img :src="productImage" alt="">
        <span v-if="productPrice<1000">{{productPrice}}</span>
    </div>
</template>

<script>
export default {
    data() {
        return {
            productName: "Dell XPS",
            productDesc: "Processador i7<br>Disco SSD 256GB<br> Monitor Samsung 21'",
            productImage: "https://tinyurl.com/2p9dnx68",
            productPrice: 1200,
            productAvailability: true
        }
    },
    methods: {
        buy() {
            this.productAvailability = false
        }
    },
}
</script>

<style lang="scss" scoped>

</style>