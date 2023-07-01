<script setup>
import { computed } from 'vue';
import avatarDefault from '@/assets/img/avatar-default.png';

const props = defineProps({
  pImgSrc: { type: String, default: avatarDefault },
  small: { type: Boolean, default: true },
  large: { type: Boolean, default: false },
});
const avatarStyles = computed(() => ({
  'avatar-small': !props.large,
  'avatar-large': props.large,
}));
</script>

<template>
  <div class="avatar" :class="avatarStyles"><img :src="pImgSrc" /></div>
</template>

<style scoped lang="scss">
.avatar {
  border-radius: 50%;
  width: fit-content;
  img {
    width: 100%;
    border-radius: 50%;
    object-fit: contain;
  }
  &.avatar-small {
    width: 50px;
    height: 50px;
  }
  &.avatar-large {
    width: 120px;
    height: 120px;
  }
}
</style>
