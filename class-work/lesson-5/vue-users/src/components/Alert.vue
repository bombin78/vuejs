<template>
    <div class="alert" :class="alertClass">
        {{ text }}
    </div>
</template>

<script>
    export default {
        name: "Alert",

        props: {
            text: {
                type: String,
                required: true
            },
            type:{
                type: String,
                default: 'info'
            }
        },

        computed: {
            alertClass () {
                return {
                    "alert--success": this.type === "success",
                    "alert--danger": this.type === "danger",
                    "alert--info": this.type === "info"
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

        &--info {
            color: #0f466e;
        }
    }
</style>
