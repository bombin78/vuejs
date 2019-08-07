<template>
<div class="post">
  <h1>{{ post.title }}</h1>
  <input type="text" placeholder="Примечание">
  <button>Сохранить</button>
</div>
</template>

<script>
export default {
  name: 'Post',
  props: {
    post: Object
  }
}
</script>

<style >
.post {
  padding: 15px;
  border: 1px solid;
  margin: 15px 0;
}
</style>
