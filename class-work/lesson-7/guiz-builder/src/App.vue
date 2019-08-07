<template>
<v-app>
  <v-app-bar clipped-left color="green accent-4" dark app>
    <v-app-bar-nav-icon @click="toggleDrawer"></v-app-bar-nav-icon>
    <v-toolbar-title class="headline text-uppercase">
      <span class="mr-2">Конструктор</span>
      <span class="font-weight-light">тестов</span>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn to="/about" class="mr-2" text>
      <span class="mr-2">Справочник</span>
      <v-icon>mdi-help</v-icon>
    </v-btn>
    <v-btn text>
      <span class="mr-2">Выход</span>
      <v-icon>mdi-logout</v-icon>
    </v-btn>
  </v-app-bar>

  <v-navigation-drawer clipped v-model="drawerIsVisible" app>
    <v-list>

      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>
            Навигация
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list-item
        v-for="link in navigationLinks"
        :key="link.title"
        link :to="link.href"
        color="green">
        <v-list-item-icon>
          <v-icon>{{link.icon}}</v-icon>
          </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>
            {{link.title}}
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>

    </v-list>
  </v-navigation-drawer>

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

  data () {
    return {
      drawerIsVisible: true,
      navigationLinks: [
        {title: 'Список тестов', href: '/', icon: 'mdi-playlist-check'},
        {title: 'Добавление теста', href: '/quis', icon: 'mdi-plus-circle-outline'},
        {title: 'Список категорий', href: '/categories', icon: 'mdi-format-list-bulleted'},
        {title: 'Справочник', href: '/about', icon: 'mdi-help'},
      ],
    }
  },

  methods: {
    toggleDrawer() {
      this.drawerIsVisible = !this.drawerIsVisible;
    },
  },
};
</script>
