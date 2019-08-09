<template>
  <v-form v-model="valid">
    <v-container grid-list-xl>
      <v-layout wrap>

        <v-flex class="xs12">
          <v-checkbox
            v-model="firstAnswer"
            :rules="[v => !!v || 'You must agree to continue!']"
            label="Do you agree?"
            required></v-checkbox>
        </v-flex>

        <v-flex class="xs12">
          <v-checkbox
            v-model="secondAnswer"
            :rules="[v => !!v || 'You must agree to continue!']"
            label="Do you agree?"
            required></v-checkbox>
        </v-flex>

      </v-layout>
    </v-container>
  </v-form>
</template>

<script>
export default {

  name: 'QuizQuestionVariant',

  data: () => ({
    valid: true,
    firstAnswer: false,
    secondAnswer: false,
  }),

  methods: {
    validate: function(){}
  }
}
</script>

<style lang="css">
</style>
