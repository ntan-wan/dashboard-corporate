<template>
  <div class="card card-custom">
    <div class="h7 card-header card-header-custom">{{ header }}</div>
    <div class="card-body">
      <div class="row g-1">
        <div class="col-12" :class="{ 'col-sm-6': img }">
          <slot name="content" />
        </div>
        <div v-if="img" class="col col-sm-6">
          <img :src="img" class="w-100" />
        </div>
        <div class="col-12 card-link">
          <slot name="link" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  header: { type: String, default: 'Header' },
  img: { type: String },
});
</script>

<style scoped lang="scss">
.card-custom {
  border: 10px;
  .card-header-custom {
    background-color: white;
  }
  .card-link {
    color: #0f62e6;
  }
}
</style>
