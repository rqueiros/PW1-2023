<script>
import { useCityStore } from '@/stores/city'
export default {
  data() {
    return {
      cityStore: useCityStore(),
      username:'',
      password:''
    }
  },
  methods: {
    login() {
      try {
        this.cityStore.login(this.username, this.password)
        this.$router.push({name: 'home'})
      } catch (error) {
        alert(error.message)
      }
    }
  },
}

</script>

<template>
  <form @submit.prevent="login">
    <label for="txtUsername">USERNAME: </label>
    <input type="text" id="txtUsername" v-model="username">
    <br>
    <label for="txtPassword">PASSWORD: </label>
    <input type="password" id="txtPassword" v-model="password">
    <br>
    <input type="submit" value="LOGIN">
  </form>
</template>
