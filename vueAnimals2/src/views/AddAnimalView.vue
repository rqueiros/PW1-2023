<template>
  <v-sheet width="300" class="mx-auto">
    <v-form @submit.prevent="add">
      <v-text-field v-model="name" label="name"></v-text-field>
      <v-text-field v-model="desc" label="description"></v-text-field>
      <v-text-field v-model="image" label="image"></v-text-field>
      <v-btn type="submit" block class="mt-2">Add animal</v-btn>
    </v-form>
  </v-sheet>
</template>

<script>
import { useAnimalStore } from "@/stores/animal";
export default {
  data() {
    return {
      store: useAnimalStore(),
      name: "",
      desc: "",
      image:""
    };
  },
  methods: {
    add() {
      try {
        this.store.add(this.name, this.desc, this.image)
        this.$router.push({ name: "animals" });
      } catch (error) {
         alert(`Error: ${error.message}`); 
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
