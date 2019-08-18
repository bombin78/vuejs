<template>
  <v-form v-model="valid" class="elevation-4 mb-4">
    <v-container grid-list-xl>
      <v-layout wrap>

        <v-flex class="xs6">
          <v-text-field
            v-model="testParams.name"
            :counter="10"
            :rules="nameRules"
            label="Название теста"
            required></v-text-field>
        </v-flex>

        <v-flex class="xs6">
          <v-select
            v-model="testParams.category"
            :items="categories"
            item-text="title"
            item-value="id"
            :rules="[v => !!v || 'Item is required']"
            label="Категория"
            required></v-select>
        </v-flex>

        <v-flex class="xs12">
          <v-textarea
            name="input-7-1"
            label="Примечание к тексту"
            v-model="testParams.note"
            hint="Hint text"
          ></v-textarea>
        </v-flex>

      </v-layout>
    </v-container>
  </v-form>
</template>

<script>

export default {

  name: 'QuizQuestion',

  props: ['categories', 'testParams'],

  data: () => ({
    valid: true,
    nameRules: [
      v => !!v || 'Name is required',
      v => (v && v.length <= 10) || 'Name must be less than 10 characters',
    ],
  }),

  // methods: {
  // validate () {
  //   if (this.$refs.form.validate()) {
  //     this.snackbar = true
  //   }
  // },
  // reset () {
  //   this.$refs.form.reset()
  // },
  // resetValidation () {
  //   this.$refs.form.resetValidation()
  // },
  // },
};
</script>

<style lang="css">
</style>
