<template>
  <div>
    <h1>{{ animal.name }}</h1>   
    <p><img :src="animal.image" alt=""></p>    
    <p>{{ animal.desc }}</p>   
    <p><v-btn @click="$router.go(-1)"> BACK </v-btn></p>
    
  </div>
</template>

<script>
export default {
  data() {
    return {
      animal: 0,
    };
  },
  created() {
    this.animal = JSON.parse(localStorage.animals).find(
      (animal) => animal.id == this.$route.params.id
    );
  },
};
</script>

<style lang="scss" scoped></style>
