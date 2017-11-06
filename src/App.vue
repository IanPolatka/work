<template>
  <div id="app">
    <img src="./assets/logo.png">
    <hr>
      <router-link :to="{path: '/'}">Home</router-link>
    <hr>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>



</style>
