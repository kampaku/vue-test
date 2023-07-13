<template>
  <label :class="['radio', { radio_active: isChecked }]">
    <input
      class="radio__input"
      type="radio"
      :checked="isChecked"
      @change="onChange"
      :value="value"
    />
    <span class="radio__button"></span>
    <span class="radio__label">{{ label }}</span>
  </label>
</template>

<script setup>
import { computed, toRefs } from 'vue'

const props = defineProps({
  label: String,
  value: String,
  modelValue: String,
})
const { label, modelValue, value } = toRefs(props)
const emit = defineEmits(['update:modelValue'])
const isChecked = computed(() => modelValue.value === value.value)
function onChange(e) {
  emit('update:modelValue', e.target.value)
}
</script>

<style lang="scss" scoped>
.radio {
  display: inline-flex;
  align-items: center;
  gap: 16px;
  padding: 12px 32px 12px 12px;
  border-radius: var(--border-radius-s);
  background-color: var(--color-white);
  cursor: pointer;

  &_active {
    border: 1px solid var(--color-primary);
    box-shadow: 0px 8px 16px 0px rgba(34, 35, 36, 0.1);
  }

  &__label {
    color: var(--color-input);
  }

  &__input {
    position: absolute;
    appearance: none;
    clip: rect(0 0 0 0);
    accent-color: blueviolet;

    &:checked + .radio__button {
      box-shadow: 0 0 0 2px var(--color-primary);
    }

    &:checked + .radio__button::after {
      background: var(--color-primary);
    }

    &:checked ~ .radio__label {
      color: #000000;
    }
  }

  &__button {
    position: relative;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    box-shadow: 0 0 0 2px var(--color-grey);

    &::after {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 6px;
      height: 6px;
      border-radius: 50%;
      content: '';
    }
  }
}
</style>
