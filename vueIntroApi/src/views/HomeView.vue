<script>
import { useDogStore } from "@/stores/dog";
export default {
  data() {
    return {
      dogStore: useDogStore(),
      breed: "",
      dogImage: "",
    };
  },
  created() {
    try {
      this.dogStore.fetchDogBreeds();
    } catch (error) {
      alert(error.message);
    }
  },
};
</script>

<template>
  <div>
    <h1>RANDOM DOGS APP</h1>
    <form action="">
      <label for="sltBreeds">BREEDS: </label>
      <select id="sltBreeds" v-model="breed" @change="dogStore.fetchDogImageByBreed(breed)">
        <option
          :value="dogBreed"
          v-for="dogBreed in dogStore.getDogBreeds"
          :key="dogBreed"
        >
          {{ dogBreed }}
        </option>
      </select>
    </form>
    <p>
      <img :src="dogStore.getDogImage" alt="" />
    </p>
    
  </div>
</template>
