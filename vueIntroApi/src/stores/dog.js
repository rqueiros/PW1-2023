import { defineStore } from "pinia";
import * as api from "../api/api";

const DOG_API_BASE_URL = 'https://dog.ceo/api';
const OTHER_API_BASE_URL = 'https://other-api.com';


export const useDogStore = defineStore("dog", {
  state: () => ({
    dogBreeds: [],
    dogImage:""
  }),
  getters: {
    getDogBreeds: (state) => state.dogBreeds,
    getDogImage: (state) => state.dogImage
  },
  actions: {
    async fetchDogBreeds() {
      try {
        const data = await api.get(DOG_API_BASE_URL, 'breeds/list/all');
        this.dogBreeds = Object.keys(data.message);
      } catch (error) {
        console.error("Error in store fetching dog breeds:", error);
        throw error;
      }
    },
    async fetchDogImageByBreed(breed) {      
      try {
        const data = await api.get(DOG_API_BASE_URL,`breed/${breed}/images/random`);
        this.dogImage = data.message;        
      } catch (error) {
        console.error("Error in store fetching dog breeds:", error);
        throw error;
      }
    },
  },
});
