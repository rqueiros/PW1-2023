<template>
    <div>
        <h1>BLOGPOSTS</h1>
        <CardPost 
            title="MyTitle" 
            author="MyAuthor"
            content="MyContent"/>
            <CardPost 
            title="MyTitle2" 
            author="MyAuthor2"
            content="MyContent2"/>
            
    </div>
</template>

<script>
    import CardPost from './CardPost.vue';
    export default {
        components: {
            CardPost,
        },
    }
</script>

<style lang="scss" scoped>

</style>