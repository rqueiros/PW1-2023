<template>
  <div>
    <form @submit.prevent="createTask">
      <input type="text" v-model="taskName" placeholder="Nova Tarefa" required/>
      <button type="submit">Adicionar</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      taskName: '',
    }
  },
  methods: {
    createTask() {
        this.$emit('addTask', { text: this.taskName, completed: false })
        this.newTask = ''
    },
  },
}
</script>
