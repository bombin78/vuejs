<template lang="html">
    <main class="dogs-limit">
        <h1>Фотографии собак</h1>
        <input :v-model="imagesCount" type="text">
        <button @click='showImages'>Показать</button>
        <img v-for="image in images" :src="image" :key="image" alt="">
    </main>
</template>

<script>
import axios from 'axios';

const getImages = async function(limit = 3) {
  const response = await axios.get(`https://dog.ceo/api/breeds/image/random/${limit}`);
  return response.data.message;
};

export default {
  name: 'DogsLimit',

  data() {
    return {
      images: [],
      imagesCount: 3,
    };
  },

  methods: {
    async showImages() {
      this.images = await getImages(this.imagesCount);
    },
  },

  beforeMount() {
    this.showImages();
  },
}
</script>

<style lang="css" scoped>
  .dogs-limit {
    border: 2px solid;
    padding: 15px
  }
</style>
