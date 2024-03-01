<template>
  <h1>ログイン</h1>
  <form>
    <input type="text" id="email" placeholder="email">
    <input type="password" id="password" placeholder="password">
    <button>ログイン</button>
  </form>
  <p>アカウント作成がお済みでない場合は、<router-link to="/signup">こちら</router-link></p>
</template>

<script>

export default {
  name: 'SignIn',
}
</script>

<style>

</style>

