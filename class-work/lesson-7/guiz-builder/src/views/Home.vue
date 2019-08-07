<template>
<v-sheet class="pa-4">
  <h1>Главная страница</h1>
  <v-data-table :headers="tableHeaders" :items="tests">

    <template #top>
      <v-toolbar flat>
        <v-toolbar-title>Списик тестов</v-toolbar-title>
        <v-divider vertical class="mx-4"></v-divider>
        <v-spacer />
        <v-btn color="primary">Добавить текст</v-btn>
      </v-toolbar>
    </template>

    <template #item.action>

      <v-btn color="green" text>
        <v-icon>mdi-pencil</v-icon>
        <span>Изменить</span>
      </v-btn>

      <v-btn text>
        <v-icon>mdi-delete</v-icon>
        <span>Удалить</span>
      </v-btn>

    </template>
  </v-data-table>
</v-sheet>
</template>

<script>
import Tests from '../services/Tests';

export default {

  name: 'Home',

  data() {
    return {
      tests: Tests.all(),
      tableHeaders: [
        {
          text: 'Название теста',
          value: 'title',
          width: 300,
        },
        {
          text: 'Описание',
          value: 'brief',
          sortable: false,
        },
        {
          text: 'Действия',
          value: 'action',
          width: 400,
          sortable: false,
        },
      ],
    };
  },

};
</script>
