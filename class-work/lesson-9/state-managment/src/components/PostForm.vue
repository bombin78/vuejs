<template>
  <div class="post">
      <h2>Создание поста</h2>

      <label for="primaryCategories">Основная категория</label>
      <select id="primaryCategories">
          <option v-for="cat in primaryCategories" :key="cat.id">{{ cat.title }}</option>
      </select>

      <label for="secondaryCategories">Второстепенная категория</label>
      <select id="secondaryCategories">
          <option v-for="cat in secondaryCategories" :key="cat.id">{{ cat.title }}</option>
      </select>
  </div>
</template>

<script>
import{ mapGetters } from 'vuex';

export default {
    name: "PostForm",
    computed: {
      ...mapGetters(['primaryCategories','secondaryCategories']),
    }
}
</script>
