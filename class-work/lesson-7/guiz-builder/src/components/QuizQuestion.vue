<template>
  <v-form v-model="valid" class="elevation-4 mb-4">
    <v-container grid-list-xl>
      <v-layout wrap>

        <v-flex class="xs12">
          <v-textarea
            name="input-7-1"
            label="Текст вопроса"
            value=""
            hint="Hint text"
          ></v-textarea>
        </v-flex>

        <QuizQuestionVariant />

        <v-flex class="xs12">
          <v-btn
            :disabled="!valid"
            color="blue lighten-2"
            class="mr-4"
            @click="validate">
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

  components: {
    QuizQuestionVariant
  },

  data: () => ({
    valid: true,
    name: '',
    nameRules: [
      v => !!v || 'Name is required',
      v => (v && v.length <= 10) || 'Name must be less than 10 characters',
    ],
  }),

  methods: {
    validate: function(){}
  }
}
</script>

<style lang="css">
</style>
