<template>

    <div class="container">

        <Alert v-if="seen" text="Это текст сообщения" />
        <button @click="toggleSeen">Показать / скрыть</button>

    </div>

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
