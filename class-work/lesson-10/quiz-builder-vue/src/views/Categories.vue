<template>
  <base-layout>
    <v-simple-table class="elevation-2 ma-3">
      <thead>
      <tr>
        <th class="text-left">Название</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="cat in $store.state.categories" :key="cat.id">
        <td>{{ cat.title }}</td>
      </tr>
      </tbody>
    </v-simple-table>
  </base-layout>
</template>

<script>
export default {
  name: "Home",
};
</script>
