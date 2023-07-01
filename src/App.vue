<script setup>
import LayoutMain from '@/views/_layout/layout.main.vue';
</script>

<template>
  <component :is="LayoutMain">
    <router-view></router-view>
  </component>
</template>
