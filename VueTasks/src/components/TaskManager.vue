<template>
  <div>
    <h1>Lista de Tarefas</h1>
    <TaskForm @addTask="addTask" />
    <TaskList :tasks="tasks" @completeTask="completeTask" />
  </div>
</template>

<script>
import TaskForm from './TaskForm.vue'
import TaskList from './TaskList.vue'

export default {
  components: {
    TaskForm,
    TaskList
  },
  data() {
    return {
      tasks: [],
    }
  },
  methods: {
    addTask(newTask) {
      this.tasks.push(newTask)
    },
    completeTask(index) {
      if (this.tasks[index].completed) {
        alert(`Task ${this.tasks[index].text} completed with success!` )  
      } else {
        alert(`Task ${this.tasks[index].text} was not completed!` )  
      }
      
      
    },
  },
}
</script>