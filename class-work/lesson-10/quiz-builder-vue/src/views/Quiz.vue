<template>
  <base-layout>
    <v-container grid-list-xl>
      <v-layout>
        <v-flex md8>
          <v-sheet class="pa-5 elevation-2 mb-4">
            <h1 class="headline mb-2">{{ $route.meta.title }}</h1>
            <v-divider class="mb-4"></v-divider>
            <quiz-form ref="quizForm"/>
          </v-sheet>
          <v-alert v-if="currentTest.questions.length === 0" type="info">Список вопросов пуст
          </v-alert>
          <v-expansion-panels v-else v-model="questionPanels" multiple>
            <v-expansion-panel
              v-for="(question, index) in currentTest.questions"
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
            <v-spacer/>
            <v-toolbar-items>
              <v-btn @click="saveQuiz" text color="success">
                <v-icon>mdi-check-bold</v-icon>
                Сохранить тест
              </v-btn>
            </v-toolbar-items>
          </v-toolbar>
        </v-flex>
      </v-layout>
    </v-container>
  </base-layout>
</template>

<script>
import QuizForm from "../components/QuizForm.vue";
import QuizQuestion from "../components/QuizQuestion.vue";

export default {
  name: "Test",
  components: { QuizForm, QuizQuestion },
  data() {
    return {
      questionPanels: [],
    };
  },
  methods: {
    addQuestion() {

    },
    closePanel(id) {
      const index = this.questionPanels.indexOf(id);
      if (index !== -1) {
        this.questionPanels.splice(index, 1);
      }
    },
    saveQuiz() {
      // вызов метода дочернего компонента
      this.$refs.quizForm.validate();
    },
  },
  computed: {
    currentTest() {
      return this.$store.state.currentTest;
    },
  },
};
</script>
