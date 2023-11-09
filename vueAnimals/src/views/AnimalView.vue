<template>
  <div>
    Animal {{ $route.params.id }}
    <br>
    <v-btn @click="$router.go(-1)">
        BACK
    </v-btn>
    </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
