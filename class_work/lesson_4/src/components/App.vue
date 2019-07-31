<template>

    <Alert v-if="seen" text="Это текст сообщения" />

    <button @click="toggleSeen">Показать / скрыть</button>
    
</template>

<script>
    export default {
        name: "App",

        data () {
            return {
                seen: false
            }
        },

        methods: {
            toggleSeen () {
                this.seen = !this.seen;
            }
        }
    }
</script>
