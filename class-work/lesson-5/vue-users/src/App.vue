<template>
<div class="app">
  <h1>Список пользователей</h1>
  <button @click="showModal" type="button" name="button">Добавить пользователя</button>

  <div class="users">
    <Alert v-if="users.length === 0" text="Список пользователей пуст" />
  </div>
  <Modal v-if="modalIsVisible">
    <template #header>
      Это содержимое нашего заголовка
    </template>
    <Alert text="Это содержимое нашего окна" />
  </Modal>
</div>
</template>

<script>
import Alert from './components/Alert.vue';
import Modal from './components/Modal.vue';

export default {

  name: 'app',

  components: {
    Alert,
    Modal
  },

  data() {
    return {
      users: [],
      modalIsVisible: false
    }
  },

  methods: {
    showModal() {
      this.modalIsVisible = true;
    }
  }
};
</script>

<style lang="scss">
.app {
    max-width: 90rem;
    margin: 0 auto;
}

.users {
    padding-top: 1.5rem;
}
</style>
