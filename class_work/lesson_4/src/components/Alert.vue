<template>
    <div class="alert" :class="alertClass">
        {{ text }}
    </div>
</template>

<script>
    export default {
        name: "Alert",

        props: ['text', 'type'],

        computed: {
            alertClass () {
                return {
                    "alert--success": this.type = "success",
                    "alert--danger": this.type = "danger"
                }
            }
        }
    }
</script>

<style lang="scss">
    $colorDanger: red;
    $colorSuccess: green;

    .alert {
        padding: 15px;
        border: 1px solid;

        &--success {
            color: $colorDanger
        }

        &--danger {
            color: $colorSuccess
        }
    }
</style>
