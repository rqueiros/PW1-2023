import { defineStore } from "pinia";
export const useAnimalStore = defineStore("animal", {
  state: () => ({
    animals: [
      {
        id: 1,
        name: "macaco",
        desc: "Termo utilizado para descrever diversos primatas pertencentes à ordem dos primatas.",
        image: "https://tinyurl.com/w5utf6u5",
      },
      {
        id: 2,
        name: "leão",
        desc: "Mamífero carnívoro pertencente à família dos felinos, conhecido cientificamente como Panthera leo.",
        image: "https://tinyurl.com/3tck98xm",
      },
      {
        id: 3,
        name: "zebra",
        desc: "Mamífero herbívoro da família dos equídeos, caracterizado pelas listras distintas e marcantes em seu corpo.",
        image: "https://tinyurl.com/yvr5shv8",
      },
      {
        id: 4,
        name: "golfinho",
        desc: " O golfinho é um mamífero marinho pertencente à ordem dos cetáceos, especificamente da família Delphinidae. Eles são conhecidos por sua natureza inteligente, habilidades sociais avançadas e pela sua agilidade na água",
        image: "https://tinyurl.com/mr3u3yje",
      },
    ],
  }),
  getters: {
    getAnimals: (state) => state.animals,
    getAnimal: (state) => (id) =>
      state.animals.find((animal) => animal.id == id),
  },
  actions: {
    remove(id) {
      this.animals = this.animals.filter((animal) => animal.id != id);
    },
    add(name, desc, image) {
      if (!this.animals.some((animal) => animal.name == name)) {
        const id = this.animals[this.animals.length - 1].id + 1;
        const newAnimal = { id, name, desc, image };
        this.animals.push(newAnimal);
      } else {
        throw Error("Animal with he same name already in he catalog!");
      }
    },
  },  
  persist: true,
});
