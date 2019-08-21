<template>
  <v-form>
    <v-layout wrap>
      <v-flex xs12 md6>
        <v-text-field
          v-model="title"
          label="Название теста"
          v-validate="'required|max:120'"
          data-vv-name="title"
          data-vv-as="название"
          @blur="$validator.validate('title')"
          :error-messages="errors.collect('title')"
        />
      </v-flex>
      <v-flex xs12 md6>
        <v-select
          :items="categories"
          item-text="title"
          item-value="id"
          label="Категория"
          v-model="category"
          v-validate="'required'"
          data-vv-name="category"
          data-vv-as="категория"
          @blur="$validator.validate('category')"
          :error-messages="errors.collect('category')"
        />
      </v-flex>
      <v-flex xs12>
        <v-textarea
          outlined
          v-model="brief"
          label="Примечание к тесту"
          v-validate="'required'"
          data-vv-name="brief"
          data-vv-as="примечание"
          @blur="$validator.validate('brief')"
          :error-messages="errors.collect('brief')"
        />
      </v-flex>
    </v-layout>
  </v-form>
</template>

<script>
import { mapState } from "vuex";
import { CHANGE_CURRENT_TEST_DATA } from "../store/actions.type";

function mapTwoWayStateBindings(...props) {
  const data = {};

  props.forEach((prop) => {
    data[prop] = {
      get() {
        return this.$store.state.currentTest[prop];
      },
      set(value) {
        this.$store.dispatch(CHANGE_CURRENT_TEST_DATA, { [prop]: value });
      },
    };
  });

  return data;
}

export default {
  name: "QuizForm",
  computed: {
    ...mapState(["categories"]),
    ...mapTwoWayStateBindings("title", "brief", "category"),
  },
  methods: {
    validate() {
      return this.$validator.validateAll();
    },
  },
};
</script>
