<template>
<v-app>

  <v-navigation-drawer v-model="showDrawer" app clipped>
    <!-- <v-list> -->

    <v-list-item>
      <v-list-item-content>
        <v-list-item-title>
          Навигация
        </v-list-item-title>
      </v-list-item-content>
    </v-list-item>

    <v-divider></v-divider>

    <v-list-item v-for="link in menu" :to="link.route" :key="link.title" exact link color="green">
      <v-list-item-icon>
        <v-icon>{{link.icon}}</v-icon>
      </v-list-item-icon>
      <v-list-item-content>
        <v-list-item-title>{{link.title}}</v-list-item-title>
      </v-list-item-content>
    </v-list-item>

    <!-- </v-list> -->
  </v-navigation-drawer>

  <v-app-bar color="green accent-5" app dark clipped-left>
    <v-app-bar-nav-icon @click="toggleDrawer"></v-app-bar-nav-icon>
    <v-toolbar-title>
      <router-link :to="{ name: 'home' }" tag="span" class="headline text-uppercase toolbar-title">
        <span class="mr-2">Конструктор</span>
        <span class="font-weight-light">тестов</span>
      </router-link>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn :to="{ name: 'about' }" class="mr-2" text>
      Справочник <v-icon>mdi-help</v-icon>
    </v-btn>
    <v-btn text>
      Выход <v-icon>mdi-logout</v-icon>
    </v-btn>
  </v-app-bar>

  <v-content>
    <v-container>
      <router-view />
    </v-container>
  </v-content>
</v-app>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      showDrawer: true,
      menu: [{
        title: 'Список тестов',
        icon: 'mdi-playlist-check',
        route: {
          name: 'home',
        },
      },
      {
        title: 'Добавление теста',
        icon: 'mdi-plus',
        route: {
          name: 'quiz',
        },
      },
      {
        title: 'Список категорий',
        icon: 'mdi-library-books',
        route: {
          name: 'categories',
        },
      },
      {
        title: 'Справочник',
        icon: 'mdi-help',
        route: {
          name: 'about',
        },
      },
      ],
    };
  },
  methods: {
    toggleDrawer() {
      this.showDrawer = !this.showDrawer;
    },
    beforeCreate() {
      this.$store.dispath('LOAD_CATEGORIES').catch(console.log);
    },
  },
};
</script>

<style>
.toolbar-title {
  cursor: pointer;
}
</style>
