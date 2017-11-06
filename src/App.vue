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

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;

  width: 50%;
  margin: auto;

}

ul {
  padding: 0;
  margin: 0;
}

li {
  list-style: none;
  border: 1px solid #ddd;
  margin-bottom: 20px;
  padding: 20px;
  border-radius: 4px;
  box-shadow: 0 1px 1px rgba(0,0,0,.1);
}

li:hover {
  background: #fafafa;
}

</style>
