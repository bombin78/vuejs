<template>
  <base-layout>
    <v-data-table
      :headers="headers"
      :items="tests"
      :items-per-page="itemsPerPage"
      class="elevation-2 ma-3"
    >
      <template #top>
        <v-toolbar flat color="white">
          <v-toolbar-title>Список тестов</v-toolbar-title>
          <v-divider class="mx-4" inset vertical></v-divider>
          <v-spacer></v-spacer>
          <v-btn :to="{ name: 'quiz' }" color="primary" dark class="mb-2">Добавить тест</v-btn>
        </v-toolbar>
      </template>
      <template #item.action="{ item }">
        <v-btn :to="{ name: 'quiz-edit', params: { id: item.id } }" text small color="success">
          <v-icon>mdi-pencil</v-icon>
          Изменить
        </v-btn>
        <v-btn text small>
          <v-icon>mdi-delete</v-icon>
          Удалить
        </v-btn>
      </template>
    </v-data-table>
  </base-layout>
</template>

<script>

export default {
  name: "Home",
  data() {
    return {
      itemsPerPage: 10,
      headers: [
        { text: "Название", value: "title" },
        {
          text: "Действия", value: "action", sortable: false, width: 300,
        },
      ],
    };
  },
  computed: {
    tests() {
      return this.$store.state.tests;
    },
  },
};
</script>
