<script setup>
const props = defineProps({
  outline: { type: Boolean, default: false },
});
</script>

<template>
  <button class="btn btn-custom" :class="{ outline: outline }">
    <span class="btn-custom-label"><slot /></span>
  </button>
</template>

<style scoped lang="scss">
.btn-custom {
  border-radius: 100px;

  .btn-custom-label {
    font-weight: 600;
  }
  &.outline {
    background-color: white;
    color: #3899ec;
  }
  &:hover {
    background-color: #d6e6fe;
  }
}
</style>
