<template lang="html">
  <main class="dogs">
      <h1>Фотографии собак</h1>
      <p>Сюда позднее добавим фотографии собак</p>
      <img v-for="image in images" :src="image" :key="image" alt="">
  </main>
</template>

<script>
import axios from 'axios';
export default {
  name: 'Dogs',

  data() {
    return {
      images: []
    }
  },

  // Эта функция выполняется каждый раз перед отрисовкой компонента на странице
  async beforeMount() {
    const response = await axios.get('https://dog.ceo/api/breeds/image/random/3');
    this.images = response.data.message;
  },
};
</script>

<style lang="css" scoped>
  .dogs {
    border: 2px solid;
    padding: 15px
  }
</style>
