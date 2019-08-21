<template>
  <v-app>
    <router-view/>
  </v-app>
</template>
<script>
export default {
  name: "App",
  mounted() {
    const preloader = document.querySelector(".preloader");
    preloader.style.display = "none";
  },
};
</script>
