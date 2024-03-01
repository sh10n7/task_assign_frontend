<template>
  <div>
    <ul class="task-lists"> 
      <li class="task-list">
        <p class="task-title">タスク内容</p>
        <p>タスク作成者</p>
        <p>タスク担当者</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'TaskList',
}
</script>

<style>
ul {
  list-style: none;
  padding: 0;
}
</style>

