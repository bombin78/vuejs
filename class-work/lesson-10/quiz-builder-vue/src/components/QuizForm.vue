<template>
  <v-form>
    <v-layout wrap>
      <v-flex xs12 md6>
        <v-text-field
          v-model="quiz.title"
          label="Название теста"
          required
        />
      </v-flex>
      <v-flex xs12 md6>
        <v-select
          :items="$store.state.categories"
          item-text="title"
          item-value="id"
          label="Категория"
        />
      </v-flex>
      <v-flex xs12>
        <v-textarea outlined v-model="quiz.brief" label="Примечание к тесту"/>
      </v-flex>
    </v-layout>
  </v-form>
</template>

<script>
export default {
  name: "QuizForm",
  props: {
    quiz: { type: Object, required: true },
  },
};
</script>
