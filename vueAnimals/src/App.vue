<script>
import { RouterLink, RouterView } from "vue-router";
import Header from "./components/Header.vue";
export default {
  components: {
    Header,
  },
  created() {
    if (!localStorage.animals) {
      const animals = [
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
      ];
      localStorage.animals = JSON.stringify(animals);
    }
    if (!localStorage.users) {
      const users = [
        { username: "rui", password: "12345", type:"admin" },
        { username: "maria", password: "54321", type:"guest" },
      ];
      localStorage.users = JSON.stringify(users);
    }
  },
};
</script>

<template>
  <v-app>
    <Header />
    <v-main class="d-flex align-center justify-center" >
      <RouterView />
    </v-main>
  </v-app>
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
