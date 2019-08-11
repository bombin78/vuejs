<template>
<v-sheet class="pa-4">

  <h1>Добавление теста</h1>

  <v-divider vertical class="mx-4"></v-divider>

  <QuizForm :categories="categories" :testParams="testParams"/>

  <v-alert v-if="questions.length === 0" type="info">
    Список вопросов пуст
  </v-alert>

  <QuizQuestion
    v-if="questions.length > 0"
    v-for="question in questions"
    :key="question.id"
    :question="question"/>

  <v-toolbar>
    <v-btn
      :disabled="!valid"
      color="success"
      class="mr-4"
      @click="addQuestion"
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
    QuizQuestion,
  },

  data() {
    return {
      valid: true,
      categories: Categories.all(),
      testParams: {
        name: '',
        category: '',
        note: '',
      },
      questions: [],
    };
  },

  methods: {
    validate (){},
    addQuestion() {

      let idNewQuestion = 1;

      this.questions.forEach(question => {
        if (question.hasOwnProperty('id') && question.id >= idNewQuestion) {
          idNewQuestion = question.id + 1;
        }
      });

      this.questions.push({
        id: idNewQuestion,
        answers: [
          {
            id: 1,
            isRight: false,
            text: '',
          },
          {
            id: 2,
            isRight: false,
            text: '',
          },
        ],
      });

      console.log('this.testParams', this.testParams);
      console.log('this.questions', this.questions);
    },
  },
};
</script>

<style lang="css">
</style>
