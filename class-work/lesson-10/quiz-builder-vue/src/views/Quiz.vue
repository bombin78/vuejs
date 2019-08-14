<template>
<v-container grid-list-xl>
  <v-layout>
    <v-flex md8>
      <v-sheet class="pa-5 elevation-2 mb-4">
        <h1 class="headline mb-2">Добавление теста</h1>
        <v-divider class="mb-4"></v-divider>
        <quiz-form :quiz="quiz"></quiz-form>
      </v-sheet>
      <v-alert v-if="quiz.questions.length === 0" type="info">Список вопросов пуст</v-alert>
      <v-expansion-panels v-else v-model="questionPanels" multiple>
        <v-expansion-panel
          v-for="(question, index) in quiz.questions"
          :key="question.id"
          class="mb-5"
        >
          <v-expansion-panel-header>
            Вопрос №{{ index + 1 }}
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <quiz-question
              @save="closePanel(index)"
              :question="question"
              class="mb-4"
            />
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
      <v-toolbar tag="div" class="elevation-2 mb-6">
        <v-toolbar-items>
          <v-btn @click="addQuestion" text>
            <v-icon>mdi-plus</v-icon>
            Добавить вопрос
          </v-btn>
        </v-toolbar-items>
        <v-spacer />
        <v-toolbar-items>
          <v-btn text color="success">
            <v-icon>mdi-check-bold</v-icon>
            Сохранить тест
          </v-btn>
        </v-toolbar-items>
      </v-toolbar>
    </v-flex>
  </v-layout>
</v-container>
</template>

<script>
import QuizForm from "../components/QuizForm.vue";
import QuizQuestion from "../components/QuizQuestion.vue";

const questionTemplate = {
  text: "Текст вопроса",
  variants: [
    {
      id: "_1",
      text: "Вариант ответа один",
      isAnswer: false,
    },
    {
      id: "_2",
      text: "Вариант ответа второй",
      isAnswer: false,
    },
  ],
};

export default {
  name: "Test",
  components: { QuizForm, QuizQuestion },
  data() {
    return {
      quiz: {
        title: "",
        category: null,
        brief: "",
        questions: [],
      },
      questionPanels: [],
    };
  },
  methods: {
    addQuestion() {
      const question = JSON.parse(JSON.stringify(questionTemplate));
      const id = this.quiz.questions.length + 1;
      question.id = `_${id}`;
      this.questionPanels.push(this.quiz.questions.length);
      this.quiz.questions.push(question);
    },
    closePanel(id) {
      const index = this.questionPanels.indexOf(id);
      if (index !== -1) {
        this.questionPanels.splice(index, 1);
      }
    },
  },
};
</script>
