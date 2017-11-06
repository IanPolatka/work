<template>
  <div class="post">
    <ul>
      <li>
        <small>{{ post.date | moment("LL") }}</small>
        <h3>{{post.title.rendered}}</h3>
        <p v-html="post.content.rendered"></p>
        <hr>
        <p><router-link :to="{path: '/user/'+post.author}">{{user.name}}</router-link></p>
      </li>
    </ul>

  <ul>
    <li v-for="error of errors">
      {{error.message}}
    </li>
  </ul>
  </div>
</template>

<script>

import axios from 'axios'

export default {
  name: 'Post',
  data () {
    return {
      post: [],
      user: [],
      errors: []
    }
  },
  created () {
    this.loadPost()
  },
  watch: {
    'params.id': 'loadPost'
  },
  methods: {
    loadPost: function() {
      this.post = 'Loading...';
      var vm = this;
      axios.get('https://camelpride.com/wp-json/wp/v2/posts/' + this.$route.params.id)
      .then(response => {
        vm.post = response.data
        axios.get('https://camelpride.com/wp-json/wp/v2/users/' + this.post.author).then(
          response => vm.user = response.data
        );
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
