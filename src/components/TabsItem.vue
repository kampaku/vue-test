<template>
  <div v-show="selectedTitle === title" class="tab-item">
    <slot></slot>
  </div>
</template>

<script setup>
import { inject } from 'vue'
defineProps({
  title: {
    required: true,
    type: String,
  },
})

const selectedTitle = inject('selectedTitle')
</script>

<style lang="scss" scoped>
.tab-item {
  padding: 12px 56px 0;
  background-color: var(--color-lightgrey);
  border-radius: var(--border-radius);

  @media screen and (max-width: 426px) {
    padding: 16px;
  }
}
</style>
