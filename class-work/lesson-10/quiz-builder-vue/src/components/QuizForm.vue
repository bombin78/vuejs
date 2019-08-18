<template>
  <v-form>
    <v-layout wrap>
      <v-flex xs12 md6>
        <v-text-field
          v-model="title"
          label="Название теста"
          required
        />
      </v-flex>
      <v-flex xs12 md6>
        <v-select
          :items="categories"
          item-text="title"
          item-value="id"
          label="Категория"
          v-model="category"
        />
      </v-flex>
      <v-flex xs12>
        <v-textarea outlined v-model="brief" label="Примечание к тесту"/>
      </v-flex>
    </v-layout>
  </v-form>
</template>

<script>
import { mapState } from "vuex";

const mapTwoWayStateBindihgs = function (...props) {
  const data = {};
  for (let prop of props) {
    data[prop] = {
      get() {
        return this.$store.state.currentTest.prop;
      },
      set(value) {
        this.$store.dispatch("CHANGE_CURRENT_TEST_DATA", { [prop]: value });
      },
    };
  }
  return data;
};

export default {
  name: "QuizForm",
  computed: {
    ...mapState(["categories"]),
    ...mapTwoWayStateBindihgs("title", "brief", "category"),
  },
};
</script>
