<template>
  <div class="icon">
    <a class="icon__link" :href="link" target="_blank" :title="title">
      <img :src="icon" :alt="title" />
    </a>
  </div>
</template>

<script setup>
defineProps({
  icon: String,
  link: String,
  title: String,
})
</script>

<style lang="scss" scoped>
.icon {
  width: 48px;
  height: 48px;
  border-radius: 4px;
  background-color: var(--color-primary);

  &__link {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }
}
</style>
