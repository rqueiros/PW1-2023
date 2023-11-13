import { defineStore } from "pinia";

export const useCounterStore = defineStore("counter", {
  state: () => ({    
    users: [
      { id: 1, name: "joao" },
      { id: 2, name: "rita" },
    ],
  }),
  getters: {
    getUserById: (state) => (userId) => state.users.find(user=>user.id == userId),    
  }
});



