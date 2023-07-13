<template>
  <ul class="menu">
    <li v-for="item in menuItems" :key="item">
      {{ item }}
    </li>
  </ul>
</template>

<script setup>
import { ref } from 'vue'
const menuItems = ref([
  'Расчёт стоимости',
  'О нас',
  'Выездная регистрация',
  'Схемы залов',
  'Меню',
  'Галерея',
  'Отзывы',
  'Контакты',
])
</script>

<style lang="scss" scoped>
.menu {
  list-style-type: none;
  padding: 0;
  margin: 0;
  font-size: 16px;
  font-weight: 400;
  line-height: 28px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  max-width: 1318px;
  width: 100%;
}
</style>
