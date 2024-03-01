<template>
  <h1>新規登録</h1>
  <form>
    <input type="text" id="email" placeholder="email" v-model="email">
    <input type="password" id="password" placeholder="password" v-model="password">
    <input type="text" id="nickname" placeholder="nickname" v-model="nickname">
    <button value="新規登録" @click.prevent="handleSignUp">新規登録</button>
  </form>
  <p>既にアカウントをお持ちの方は<router-link to="/">こちら</router-link>へ</p>
</template>

<script>
import { auth, createUserWithEmailAndPassword,updateProfile } from '../firebase';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

export default{
  name: 'SignUp',
  setup() {
    const email = ref('');
    const password = ref('');
    const nickname = ref('');
    const currentUser = ref(null);
    const router = useRouter();


    const handleSignUp = async() => {
      try {
        // 入力された情報を元に、ユーザー登録する
        const credentialUser = await createUserWithEmailAndPassword(auth, email.value, password.value)

        // 登録したユーザーの情報を取得する。
        const user = credentialUser.user;

        // ユーザーデータ内のnicknameの値をdisplayNameの値として、登録する。
        await updateProfile(user, {
          displayName: nickname.value
        });

        // 現在ログイン中のユーザー情報を、上書きする
        currentUser.value = user;

        router.push("/top");
      }catch(error) {
        console.log('ユーザー登録できませんでした', error)
      }
    }
    return { email, password, nickname, handleSignUp }
  }
}
</script>

<style>

</style>

