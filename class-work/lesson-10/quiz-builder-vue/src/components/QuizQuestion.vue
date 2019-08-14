<template>
  <v-form>
    <v-layout wrap>
      <v-flex xs12 class="pb-0">
        <v-textarea label="Текст вопроса" required></v-textarea>
      </v-flex>
      <v-flex xs12 class="pb-0">
        <v-list>
          <quiz-question-variant
            v-for="variant in question.variants"
            @removeVariant="removeVariant"
            :variant="variant"
            :key="variant.id"
            :show-action="question.variants.length > 2"
          />
        </v-list>
      </v-flex>
      <v-flex>
        <v-btn @click="addVariant" color="info" class="mr-2">Добавить вариант ответа</v-btn>
        <v-btn @click="$emit('save', question)">Сохранить вопрос</v-btn>
      </v-flex>
    </v-layout>
  </v-form>
</template>

<script>
import QuizQuestionVariant from "./QuizQuestionVariant.vue";

const variantTemplate = {
  id: "",
  text: "Это вариант ответа",
  isAnswer: false,
};

export default {
  name: "QuizQuestion",
  components: { QuizQuestionVariant },
  props: {
    question: {
      type: Object,
      required: true,
    },
  },
  computed: {},
  methods: {
    addVariant() {
      const variant = Object.assign({}, variantTemplate);
      const id = this.question.variants.length + 1;
      variant.id = `_${id}`;
      this.question.variants.push(variant);
    },
    removeVariant(variant) {
      const index = this.question.variants.indexOf(variant);
      this.question.variants.splice(index, 1);
    },
  },
};
</script>
