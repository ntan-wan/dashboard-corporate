<template>
  <div class="card card-custom">
    <div class="card-body">
      <slot></slot>
      <div class="card-title"><slot name="title" /></div>
      <div class="card-subtitle"><slot name="subtitle" /></div>
      <div class="card-text"><slot name="text" /></div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.card-custom {
  border: none;
}
</style>
