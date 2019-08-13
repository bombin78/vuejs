<template>
  <div class="home">
    <categories-list />
    <hr>
    <post-form />
    <hr>
    <category-form />
  </div>
</template>

<script>
import CategoriesList from "../components/CategoriesList.vue";
import PostForm from "../components/PostForm.vue";
import CategoryForm from "../components/CategoryForm.vue";

export default {
  name: 'home',
  components: {
      CategoriesList,
      PostForm,
      CategoryForm,
  },
  beforeCreate() {
    this.$store.dispatch('LOAD_CATEGORIES');
  },
}
</script>
