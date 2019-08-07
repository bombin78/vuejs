<template>
  <div id="app">
    <button @click="shuffle">Перемешать</button>
    <post v-for="item in posts" :post="item"></post>
  </div>
</template>

<script>
import Post from './components/Post.vue';
import _ from "lodash";

export default {
  name: 'app',
  components: {
    Post: Post
  },
  data() {
    return {
      posts: [
        { id: 1, title: "Hello World" },
        { id: 2, title: "Hey there" },
        { id: 3, title: "Blah-blah-blah" },
      ],
    };
  },
  methods: {
    shuffle() {
      this.posts = _.shuffle(this.posts);
    },
  }
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
}
</style>
