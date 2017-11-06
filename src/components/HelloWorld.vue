<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <ul v-if="posts && posts.length">
      <li v-for="post of posts">
        <small>{{ post.date | moment("LL") }}</small>
        <p><router-link :to="{path: '/post/'+post.id}">{{post.title.rendered}}</router-link></p>
        <p v-html="post.excerpt.rendered"></p>
      </li>
    </ul>

    <ul v-if="errors && errors.length">
      <li v-for="error of errors">
        {{error.message}}
      </li>
    </ul>
  </div>
</template>

<script>

import axios from 'axios'

export default {
  name: 'Hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      posts: []
    }
  },
  created: function() {
    this.loadPost();
  },
  // created() {
  //   axios.get('https://camelpride.com/wp-json/wp/v2/posts/')
  //   .then(response => {
  //     // JSON responses are automatically parsed.
  //     this.posts = response.data.slice(0, 10)
  //   })
  //   .catch(e => {
  //     this.errors.push(e)
  //   })
  // }
  methods: {
    loadPost: function () {
      this.posts = 'Loading...';
      var vm = this;
      axios.get('https://camelpride.com/wp-json/wp/v2/posts/')
      .then(response => {
        vm.posts = response.data
      })
      .catch(function (error) {
        console.log(error);
      });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

a {
  color: #42b983;
}
</style>
