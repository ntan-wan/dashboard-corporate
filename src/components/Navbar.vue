<script setup>
import Logo from '@/components/Logo.vue';
</script>

<template>
  <nav>
    <div class="section-left"><Logo /></div>
    <div class="section-right"><i class="icon icon-menu-dots"></i></div>
  </nav>
</template>

<style scoped lang="scss">
nav {
  background-color: white;
  height: 74px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 20px;
  .section-left {
  }
  .section-right {
  }
}
</style>
