<template>
    <div id="intro">
        <h2>First name: {{firstName}}</h2>
        <h2>Last name: {{lastName}}</h2>
        <h2>Age: {{age}}</h2>
        <h2>Full name: {{fullName()}}</h2>
    </div>
</template>

<script>
export default {
    data() {
        return {
            firstName: "",
            lastName: "",
            age: 0

        }
    },
    methods: {
        fullName() {
            return `${this.firstName} ${this.lastName}`
        }
    },
}
</script>