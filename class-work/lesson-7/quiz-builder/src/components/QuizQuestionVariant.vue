<template>

  <v-container grid-list-xl>

    <v-layout wrap>

      <v-flex class="xs12">
        <v-checkbox v-model="answer.isRight"></v-checkbox>

        <v-text-field
          v-model="answer.text"
          :counter="10"
          :rules="answerTextRules"
          label="Текст ответа"
          required></v-text-field>

      </v-flex>

    </v-layout>

  </v-container grid-list-xl>

</template>

<script>
export default {

  name: 'QuizQuestionVariant',

  props: ['answerTextRules', 'answer'],

  data: () => ({}),

  methods: {
    validate() {},
  },
};
</script>

<style lang="css">
</style>
