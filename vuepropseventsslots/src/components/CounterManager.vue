<template>
    <div>
        <h1>{{message}}</h1>
        <Counter @resetEvent="reset"/>
    </div>
</template>

<script>
    import Counter from './Counter.vue';
    export default {
        components: {
            Counter,
        },
        data() {
            return {
                message: ""
            }
        },
        methods: {
            reset(value) {
                this.message = `The counter was restarted and is now ${value}`
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>