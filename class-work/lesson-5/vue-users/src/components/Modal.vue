<template lang="html">
  <div class="modal">
      <div class="modal__header">
        <slot name="header"></slot>
      </div>
      <div class="modal__body">
        <slot></slot>
      </div>
  </div>
</template>

<script>
export default {
  name: "Modal"
}
</script>

<style lang="scss">
.modal {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    max-width: 60rem;
    padding: 1.5rem;
    z-index: 100;
    background: #fff;
    box-shadow: 0 0 1rem rgba(0,0,0,.2);

    &__header {
        margin-bottom: 1.5rem;
        font-size: 1.8rem;
        font-weight: bold;
        border-bottom: 1px solid;
    }
}
</style>
