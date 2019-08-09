<template>
<v-sheet class="pa-4">

  <h1>Добавление теста</h1>

  <v-divider vertical class="mx-4"></v-divider>

  <QuizForm :categories="categories"/>

  <v-alert type="info">
    Список вопросов пуст
  </v-alert>

  <QuizQuestion/>

  <v-toolbar>
    <v-btn
      :disabled="!valid"
      color="success"
      class="mr-4"
      @click="validate"
      text>
        <v-icon>mdi-plus</v-icon>
        <span class="mr-2">Добавить вопрос</span>
    </v-btn>
  </v-toolbar>

</v-sheet>
</template>

<script>
import Categories from '../services/Categories.js';
import QuizForm from '../components/QuizForm.vue';
import QuizQuestion from '../components/QuizQuestion.vue';

export default {
  name: 'Quiz',

  components: {
    QuizForm,
    QuizQuestion
  },

  data() {
    return {
      categories: Categories.all(),
      questions: [],
    };
  },
}
</script>

<style lang="css" scoped>
</style>
