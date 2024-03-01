<template>
  <div>
    <ul class="task-lists"> 
      <li class="task-list" v-for="task in addTaskInfo" :key="task.id">
        <p class="task-title">作成者:{{ task.content }}</p>
        <p>タイトル:{{ task.makerName }}</p>
        <p>担当者:{{ task.assigneeName }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import { computed } from 'vue';

export default {
  name: 'TaskList',
  props: {
    tasks: Array,
    users: Array
  },
  setup(props) {
    // markerIdと一致するユーザー名を探す処理
    const addTaskInfo = computed(() => {
      return props.tasks.map(task => {
        // makerIdに基づいてユーザー情報の検索
        const maker = props.users.find(user => user.uid === task.makerId);
        // makerUserが存在すれば、userのdisplayNameを表示させ、存在しなければ「不明なユーザー」を表示させる
        const makerName = maker ? maker.displayName : '不明なユーザー';

        // assigneeIdからdisplayNameを検索
        const assignee = props.users.find(user => user.uid === task.assigneeId);
        const assigneeName = assignee ? assignee.displayName : '不明なユーザー';

        // 元のtask配列を保持しながら、makerNameとassigneeNameの値をtask配列に追加する。
        // 新規でtask配列ができるため、task.makeNameや, task.assigneeNameで名前を取り出すことが可能。
        return {...task, makerName, assigneeName };
      });
    });
    return { addTaskInfo }
  }
}
</script>

<style>
ul {
  list-style: none;
  padding: 0;
}

.task-list{
  border: 1px solid #333;
}
</style>

