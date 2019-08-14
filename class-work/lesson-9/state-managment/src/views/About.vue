<template>
<div class="about">
    <h1>This is an about page</h1>
    <!-- <input-number @updated="a = $event" :value="a" />
    <input-number @updated="b = $event" :value="b" /> -->
    <input-number v-model="a" />
    <input-number v-model="b" />
    <!-- <button @click="add">Сложить</button> -->
    <p>Результат: {{ result }}</p>
</div>
</template>
<script>
import InputNumber from '../components/InputNumber.vue';
export default {
  components: {InputNumber},
  data() {
    return {
      //result: 0,
      a: 1,
      b: 3,
    };
  },
  computed: {
    result() {
      return this.a + this.b;
    },
  },
  // methods: {
  //   add(){
  //     this.result = this.a + this.b;
  //   },
  // },
}
</script>
