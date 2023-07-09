<template>
  <div class="app">
    <app-header />
  </div>
</template>

<script setup>
import AppHeader from './components/AppHeader.vue'
</script>

<style lang="scss" scoped>
.app {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
}
</style>
