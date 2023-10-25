<template>
  <div>
    <button @click="show1">SHOW 1</button>
    <button @click="show2(msg)">SHOW 2</button>
    <button @click="show3">SHOW 3</button>

    <div v-on:click="showMessage">
      <button v-on:click.stop="showMessage">CLICA-ME (stop)</button>
    </div>
    <div>
      <button v-on:click.once="showMessage">CLICA-ME (once)</button>
      <br />
      <button v-on:keyup.tab="showMessage">CLICA-ME (tab)</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "Programação Web I",
    };
  },
  methods: {
    show1() {
      alert(this.msg);
    },
    show2(message) {
      alert(message);
    },
    show3(event) {
      alert(event.target.tagName);
      alert(event.type);
    },
    showMessage() {
      alert(this.msg);
    },
  },
};
</script>

<style lang="scss" scoped>
</style>