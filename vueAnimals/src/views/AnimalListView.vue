<template>
  <v-container>
    <v-row>
      <v-col v-for="animal in animals" :key="animal.id" cols="4">
        <v-card class="mx-auto" max-width="1400">
          <v-img
            class="align-end text-white"
            height="200"
            :src="animal.image"
            cover
          >
            <v-card-title>{{ animal.name }}</v-card-title>
          </v-img>

          <v-card-subtitle class="pt-4"> animal </v-card-subtitle>

          <v-card-text>
            <div>{{ animal.desc }}</div>
          </v-card-text>

          <v-card-actions>
            <router-link :to="{ name: 'animal', params: { id: animal.id } }" tag="b-btn">
              See more
            </router-link>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { RouterLink } from "vue-router";
export default {
  data() {
    return {
      animals: JSON.parse(localStorage.animals),
    };
  },
};
</script>

<style lang="scss" scoped></style>
