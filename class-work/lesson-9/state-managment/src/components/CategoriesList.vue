<template>
<div class="categiries">
    <h2>Список категорий</h2>
    <input v-model="onlyPrimary" type="checkbox">
    <label for="onlyPrimary">Только основные категории</label>
    <ul>
        <li v-for="cat in filteredCategories" :key="cat.id">{{ cat.title }}</li>
    </ul>
</div>
</template>

<script>
import{ mapGetters } from 'vuex';

export default {

    name: "CategoriesList",

    data() {
        return {
            onlyPrimary: false,
        };
    },
    computed: {
        ...mapGetters(['primaryCategories']),
        filteredCategories() {
            if(this.onlyPrimary){
                return this.primaryCategories;
            }
            return this.$store.state.categories;
        },
    },
}
</script>
