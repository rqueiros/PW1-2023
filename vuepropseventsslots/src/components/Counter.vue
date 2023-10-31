<template>
    <div>
        <h1>{{count}}</h1>
        <button @click="increment">INC</button>
        <button @click="reset">RES</button>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                count: 0
            }
        },
        methods: {
            increment() {
                this.count++
            },
            reset() {
                this.count=0
                this.$emit('resetEvent', this.count)
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>