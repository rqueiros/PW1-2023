<template>
  <div>
    <h1>{{ animal.name }}</h1>   
    <p><img :src="animal.image" alt=""></p>    
    <p>{{ animal.desc }}</p>   
    <p><v-btn @click="$router.go(-1)"> BACK </v-btn></p>
    
  </div>
</template>

<script>
import { useAnimalStore } from "@/stores/animal";

export default {
  data() {
    return {
      store: useAnimalStore(),
      animal: null,
    };
  },
  created() {
    this.animal = this.store.getAnimal(this.$route.params.id)    
  },
};
</script>

<style lang="scss" scoped></style>
