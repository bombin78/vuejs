<template>
  <v-container>
    <v-row justify="center">
      <v-col md="6" lg="4">
        <v-sheet class="pa-5 elevation-2 ma-3">
          <h1 class="headline mb-2">Вход в панель конструктора</h1>
          <v-divider class="mb-4"></v-divider>
          <v-form>
            <v-text-field
              label="Ваш email"
              v-model="email"
              v-validate="'required|email'"
              data-vv-name="email"
              data-vv-as="email"
              @blur="$validator.validate('email')"
              :error-messages="errors.collect('email')"
            />
            <v-text-field
              type="password"
              label="Ваш пароль"
              v-model="pass"
              v-validate="'required|min:6|max:30'"
              data-vv-name="password"
              data-vv-as="пароль"
              @blur="$validator.validate('password')"
              :error-messages="errors.collect('password')"
            />
            <v-layout class="mt-4">
              <v-btn color="info">Войти</v-btn>
              <v-spacer></v-spacer>
              <v-btn :to="{ name: 'register' }">Регистрация</v-btn>
            </v-layout>
          </v-form>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
    export default {
        name: "Login",
        data() {
            return {
                pass: "",
                email: "",
            };
        },
        beforeCreate() {
            if (this.$store.state.user.id) {
                this.$router.push({ name: "home" });
            }
        },
    };
</script>
