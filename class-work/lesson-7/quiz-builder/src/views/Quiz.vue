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
import QuizForm from '../components/QuizForm.vue';
import QuizQuestion from '../components/QuizQuestion.vue';

export default {
  name: 'Test',

  components: { QuizForm, QuizQuestion,},

  data() {
    return {
      questionPanels: [],
    };
  },

  methods: {
    addQuestion() {},
    closePanel(id) {
      const index = this.questionPanels.indexOf(id);
      if (index !== -1) {
        this.questionPanels.splise(index, 1);
      }
    },
    computed: {
      currentTest() {
        return this.$store.state.currentTest;
      },
    },
  },
};
</script>

<style lang="css">
</style>
