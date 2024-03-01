<template>
  <div>
    <ul class="task-lists"> 
      <li class="task-list" v-for="task in tasks" :key="task.id">
        <p class="task-title">{{ task.content }}</p>
        <p>{{ task.makerId }}</p>
        <p>{{ task.assigneeId }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'TaskList',
  props: {
    tasks: Array
  },
  setup() {

  }
}
</script>

<style>
ul {
  list-style: none;
  padding: 0;
}
</style>

