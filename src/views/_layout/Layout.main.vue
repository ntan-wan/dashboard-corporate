<script setup>
import Navbar from '@/components/Navbar.vue';
</script>

<template>
  <div class="layout-main">
    <div><Navbar /></div>
    <slot></slot>
  </div>
</template>

<style scoped lang="scss">
.layout-main {
  height: 100%;
}
</style>
