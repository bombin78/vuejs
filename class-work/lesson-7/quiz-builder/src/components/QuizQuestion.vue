<template>
<v-form v-model="valid" class="elevation-4 mb-4">
  <v-container grid-list-xl>
    <v-layout wrap>

      <h2 class="px-3 pt-5 pb-3">{{`Вопрос ${question.id}`}}</h2>

      <v-flex class="xs12">
        <v-textarea
          name="input-7-1"
          label="Текст вопроса"
          v-model="question.text"
          :rules="questionTextRules"
          hint="Hint text"></v-textarea>
      </v-flex>

      <QuizQuestionVariant
        v-for="answer in question.answers"
        :key="answer.id"
        :answerTextRules="answerTextRules"
        :answer="answer"/>

      <v-flex class="xs12">
        <v-btn
          color="blue lighten-2"
          class="mr-4"
          @click="addVariant">
          <span class="white--text">Добавить вариант ответа</span>
        </v-btn>
      </v-flex>

    </v-layout>
  </v-container>
</v-form>
</template>

<script>
import QuizQuestionVariant from './QuizQuestionVariant.vue';

export default {

  name: 'QuizQuestion',

  props: ['question'],

  components: {
    QuizQuestionVariant
  },

  data: () => ({
    valid: true,
    name: '',
    questionTextRules: [
      v => !!v || 'Question is required',
      v => (v && v.length <= 10) || 'Text of question must be less than 10 characters',
    ],
    answerTextRules: [
      v => !!v || 'Answer is required',
      v => (v && v.length <= 10) || 'Text of answer must be less than 10 characters',
    ],
  }),

  methods: {
    addVariant () {

      let idNewQuestion = 1;

      this.question.answers.forEach(answer => {
        if (answer.id >= idNewQuestion) {
          idNewQuestion = answer.id + 1;
        }
      });

      this.question.answers.push({
        id: idNewQuestion,
        isRight: false,
        text: '',
      });
    },
  }
}
</script>

<style lang="css">
</style>
