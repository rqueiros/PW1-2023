import { defineStore } from 'pinia'

export const useCityStore = defineStore('city', {
  state: () => ({
    userLoggged: null,
    users: [
      { "id": 1, "username": "dinis", "password": "12345", "favorites": [] },
      { "id": 2, "username": "artur", "password": "12345", "favorites": [] },
      { "id": 3, "username": "rita", "password": "12345", "favorites": [] }
    ]

  }),
  getters: {
    doubleCount: (state) => state.count * 2,
  },
  actions: {
    login(username, password) {
      const user = this.users.find(user => user.username == username && user.password == password)
      if (user) {
        this.userLoggged = user
      } else {
        throw new Error("User not found!")
      }
    },
  }
})