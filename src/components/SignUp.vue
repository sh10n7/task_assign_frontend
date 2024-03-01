<template>
  <h1>新規登録</h1>
  <form>
    <input type="text" id="email" placeholder="email">
    <input type="password" id="password" placeholder="password">
    <input type="text" id="nickname" placeholder="nickname">
    <button value="新規登録">新規登録</button>
  </form>
  <p>既にアカウントをお持ちの方は<router-link to="/">こちら</router-link>へ</p>
</template>
<script>

export default {
  name: 'SignUp',
}
</script>

<style>

</style>

