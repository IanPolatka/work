<template>
  <div class="user">
    <h3>Lastest Post From: {{ user.name }}</h3>
    <ul v-if="posts && posts.length">
      <li v-for="post of posts">
        <h5><router-link :to="{path: '/post/'+post.id}">{{post.title.rendered}}</router-link></h5>
        <p v-html="post.content.rendered"></p>
        <hr>
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
  name: 'User',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      user: [],
      posts: [],
      errors: []
    }
  },
  created() {
    axios.get('https://camelpride.com/wp-json/wp/v2/users/' + this.$route.params.id)
    .then(response => {
      // JSON responses are automatically parsed.
      this.user = response.data
    })
    .catch(e => {
      this.errors.push(e)
    })

    axios.get('https://camelpride.com/wp-json/wp/v2/posts?author=' + this.$route.params.id)
    .then(response => {
      // JSON responses are automatically parsed.
      this.posts = response.data.slice(0,10)
    })
    .catch(e => {
      this.errors.push(e)
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
