<template>
    <div>
        <h2>Peso: {{weight}} kgs</h2>
    </div>
</template>

<script>
export default {
    data() {
        return {
            weight: 72
        }
    },
    created() {
        console.log('[created]');
    },
    beforeCreate() {
        console.log('[beforeCreate]');
    },
    mounted() {
        console.log('[mounted]');
    },
    beforeMount() {
        console.log('[beforeMount]');
    },
    updated() {
        console.log('[updated]');
    },
    beforeUpdate() {
        console.log('[beforeUpdate]');
    },
    destroyed() {
        console.log('[destroyed]');
    },
    beforeDestroy() {
        console.log('[beforeDestroy]');
    }
}

</script>