<template>
  <v-sheet width="300" class="mx-auto">
    <v-form @submit.prevent="login">
      <v-text-field v-model="username" label="Username"></v-text-field>

      <v-text-field v-model="pass" label="Password"></v-text-field>

      <v-btn type="submit" block class="mt-2">Login</v-btn>
    </v-form>
  </v-sheet>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      pass: "",
    };
  },
  methods: {
    login() {
      const user = JSON.parse(localStorage.users).find(
        (user) => user.username == this.username && user.password == this.pass
      );
      if (user) {
        localStorage.loggedUser = JSON.stringify(user);
        this.$router.push({ name: "animals" });
      } else {
        alert("Invalid User!");
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
