<template>
  <div class="category-form">
      <h2>Форма добавления категории</h2>
      <input v-model="category.title" type="text">
      <input v-model="category.primary" type="checkbox">
      <button @click="add">Добавить</button>
      <p>{{message}}</p>
  </div>
</template>

<script>
export default {
    name: "CategoryForm",
    data() {
        return {
            category: {
                title: '',
                primary: false,
            },
            message: "",
        };
    },
    methods: {
        async add() {
            const cat = await this.$store.dispatch('CREATE_CATEGORY', this.category);

            this.message = `Добавили категорию ${cat.title} с id = ${cat.id}`;
            this.category.title = '';
            this.category.primary = '';

            setTimeout(() => {
                this.message = ''
            }, 2000);
        },
    },
}
</script>
