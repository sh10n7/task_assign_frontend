<template>
  <h1>タスク管理アプリ</h1>
  <span>こんにちは{{ displayName }}さん</span>
  <button @click="handleSignOut">ログアウト</button>
  <form class="task-form">
    <label for="content">タスク内容</label>
    <textarea type="text" id="content" placeholder="content" v-model="task.content"></textarea>
    <label for="assignee">対応者</label>
    <select v-model="task.assigneeId" id="assignee">
      <option value="0">user0</option>
      <option value="1">user1</option>
      <option value="2">user2</option>
    </select>
    <button @click.prevent="addTask">保存</button>
  </form>
  <TaskList :tasks="tasks"/>
</template>

<script>
import TaskList from './TaskList.vue'
import { auth, signOut } from '../firebase';
import { computed, onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';
import  apiClient  from '../api/axios'

export default {
  name: 'TopComp',
  components: {
    TaskList
  },
  setup() {
    const currentUser = auth.currentUser;
    const displayName = computed(() => currentUser.displayName);
    const router = useRouter();
    const task = ref({
      content: '',
      makerId: '',
      assigneeId: ''
    })
    const tasks = ref([]);

    onMounted(async() => {
      try {
        const response = await apiClient.get('tasks');
        console.log(response)
        tasks.value = response.data;
      }catch(error) {
        console.log("データの取得ができませんでした", error);
      }
    })

    const handleSignOut = async () => {
      await signOut(auth);
      router.push("/");
    };

    const addTask = async () => {
      try {
        // markerIdに現在ログイン中のユーザー情報を代入
        task.value.makerId = currentUser.uid
        await apiClient.post('/task', task.value);

        // 取得したtaskデータをtasksの配列内にpush
        tasks.value.push(task.value);
      
        // 入力フォームのリセット
        task.value = { content: '', makerId: '', assigneeId: ''};
      }catch(error) {
        console.log("タスク保存中にエラーが発生しました", error);
      }
    }

    return { displayName, task, tasks, handleSignOut, addTask }
  }
}
</script>

<style scoped>
.task-form{
  display: flex;
  flex-direction: column;
  width: 240px;
  margin-top: 16px;
}

#content{
  margin-bottom: 8px;
}
button {
  width: 120px;
  margin-top: 8px;
}
</style>

