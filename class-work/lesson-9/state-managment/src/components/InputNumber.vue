<template>
    <div class="input-number">
        <button @click="dec">-</button>
        <!-- <input :value="realValue" type="text"> -->
        <input v-model="realValue" type="text">
        <button @click="inc">+</button>
    </div>
</template>

<script>
    export default {
        name: 'InputNumber',
        props: {
            value: {
                type: Number,
                default: 0,
            },
        },
        data() {
            return {
                // копируем входные значения в собственный state
                realValue: this.value,
            };
        },
        methods: {
            inc() {
                this.realValue++;
                //this.$emit('updated', this.realValue);
                //this.$emit('input', this.realValue);
            },
            dec() {
                this.realValue--;
                //this.$emit('updated', this.realValue);
                //this.$emit('input', this.realValue);
            },
        },
        watch: {
            realValue(newValue) {
              this.$emit('input', newValue);
            },
        },
    }
</script>
