<template>
<v-list-item class="pa-0">
  <v-list-item-action>
    <v-checkbox v-model="variant.isAnswer" />
  </v-list-item-action>
  <v-list-item-content>
    <v-list-item-title>
      <v-text-field v-model="variant.text" />
    </v-list-item-title>
  </v-list-item-content>
  <v-list-item-action v-if="showAction">
    <v-btn @click="$emit('removeVariant', variant)" fab text><v-icon>mdi-close</v-icon></v-btn>
  </v-list-item-action>
</v-list-item>
</template>

<script>
export default {
  name: "QuizQuestionVariant",
  props: {
    variant: {
      type: Object,
      required: true,
    },
    showAction: {
      type: Boolean,
      required: true,
    },
  },
};
</script>

<style scoped>

</style>
