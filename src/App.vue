<template>
  <div class="app">
    <app-header />
    <banquet-cost class="app__banquet"></banquet-cost>
    <hall-schemas class="app__schemas"></hall-schemas>
    <app-footer class="app__footer"></app-footer>
  </div>
</template>

<script setup>
import AppHeader from './components/AppHeader.vue'
import BanquetCost from './components/BanquetCost.vue'
import HallSchemas from './components/HallSchemas.vue';
import AppFooter from './components/AppFooter.vue';
</script>

<style lang="scss" scoped>
.app {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;

  &__banquet {
    margin-top: 24px;
  }

  &__schemas {
    margin-top: 32px;
  }

  &__footer {
    margin-top: 32px;

    @media screen and (max-width: 376px) {
      margin-top: 24px;
    }
  }
}
</style>
