<template>
  <h1>タスク管理アプリ</h1>
  <p>こんにちは{{ displayName }}さん</p>
  <button @click="handleSignOut">ログアウト</button>
  <form>
    <input type="text" id="content" placeholder="content" v-model="content">
    <select>
      
    </select>
    <button value="新規登録" @click.prevent="handleSignUp">新規登録</button>
  </form>
  <TaskList />
</template>

<script>
import TaskList from './TaskList.vue'
import { auth, signOut } from '../firebase';
import { computed } from 'vue';
import { useRouter } from 'vue-router';

export default {
  name: 'TopComp',
  components: {
    TaskList
  },
  setup() {
    const currentUser = auth.currentUser;
    const displayName = computed(() => currentUser.displayName);
    const router = useRouter();
    

    const handleSignOut = async () => {
      await signOut(auth);
      router.push("/");
    };

    return { displayName, handleSignOut }
  }
}
</script>

<style>

</style>

