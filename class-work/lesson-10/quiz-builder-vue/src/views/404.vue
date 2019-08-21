<template>
  <base-layout>
    <v-sheet class="pa-5 elevation-2 ma-3">
      <h1 class="headline mb-2">404 not found</h1>
      <v-divider class="mb-4"></v-divider>
      <p>Запрашиваемая страница не найдена. </p>
      <v-btn :to="{ name: 'home' }" color="info">Вернуться на главную</v-btn>
    </v-sheet>
  </base-layout>
</template>
