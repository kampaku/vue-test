<template>
  <div class="tabs">
    <div class="tabs__titles">
      <span
        :class="['tabs__title', { tabs__title_active: selectedTitle === tab }]"
        v-for="tab in tabTitles"
        :key="tab"
        @click="selectTab(tab)"
        >{{ tab }}</span
      >
    </div>
    <slot></slot>
  </div>
</template>

<script setup>
import { defineSlots, ref, provide } from 'vue'
const slots = defineSlots()
const tabTitles = ref(slots.default().map((tab) => tab.props.title))
const selectedTitle = ref(tabTitles.value[0])
const selectTab = (tab) => (selectedTitle.value = tab)
provide('selectedTitle', selectedTitle)
</script>

<style lang="scss" scoped>
.tabs {
  display: flex;
  flex-direction: column;

  &__titles {
    display: flex;
    gap: 2px;

    @media screen and (max-width: 1024px) {
      align-self: center;
    }
  }

  &__title {
    padding: 14px 32px 26px;
    margin-bottom: -16px;
    font-family: Roboto;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
    color: var(--color-input);
    background-color: var(--color-platinum);
    border-top-left-radius: var(--border-radius);
    border-top-right-radius: var(--border-radius);
    cursor: pointer;

    &_active {
      color: var(--color-dark);
      background-color: var(--color-lightgrey);
    }
  }
}
</style>
