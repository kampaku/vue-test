<template>
  <button
    :class="[
      'button',
      { button_theme_primary: theme === 'primary' },
      { button_theme_outline: theme === 'outline' },
      { button_arrow: withArrow },
    ]"
  >
    <slot></slot>
    <svg v-if="withArrow && theme === 'primary'" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path
        d="M3 13L17.17 13L13.59 16.59L15 18L21 12L15 6L13.59 7.41L17.17 11L3 11L3 13Z"
        fill="white"
      />
    </svg>
  </button>
</template>

<script setup>
defineProps({
  theme: {
    default: 'primary',
    type: String,
  },
  withArrow: Boolean
})
</script>

<style lang="scss" scoped>
.button {
  padding: 14px 32px;
  font-family: inherit;
  border: 0;
  border-radius: var(--border-radius-s);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;

  &_theme {
    &_primary {
      color: var(--color-white);
      background-color: var(--color-primary);
    }

    &_outline {
      color: var(--color-primary);
      background-color: var(--color-white);
      border: 2px solid var(--color-primary);
    }
  }

  &_arrow {
    padding: 14px 24px 14px 32px;
  }
}
</style>
