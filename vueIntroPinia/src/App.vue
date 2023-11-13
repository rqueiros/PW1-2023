<script>
import { useCounterStore } from "@/stores/counter";
export default {
  data() {
    return {
      store: useCounterStore(),
    };
  },
};
</script>

<template>
  <div>

    <button @click="store.increment">CLICA-ME</button>
    <h1>{{ store.count }}</h1>
  <h2>{{ store.doubleCount }}</h2>
    <h2>{{ store.doubleCountPlusOne }}</h2>


    
    <h2>{{ store.getUserById(2).name }}</h2>
  
  </div>
</template>