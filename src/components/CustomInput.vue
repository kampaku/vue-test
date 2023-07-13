<template>
  <label class="input">
    <span class="input__label" v-if="label">
      {{ label }}
    </span>
    <input v-if="mask" v-maska :data-maska="mask" class="input__input" :value="modelValue" @input="onChange" type="text" :required="required" />
    <input v-else class="input__input" :value="modelValue" @input="onChange" type="text" :required="required" />
  </label>
</template>

<script setup>
import { vMaska } from "maska"
const props = defineProps({
  modelValue: [String, Number],
  label: String,
  required: Boolean,
  mask: String
})

const emit = defineEmits(['update:modelValue'])

const onChange = (e) => {
  emit('update:modelValue', e.target.value)
}
</script>

<style lang="scss" scoped>
.input {
  display: grid;
  grid-template-rows: auto auto;
  gap: 5px;

  &__label {
    font-family: Roboto;
    font-size: 12px;
    line-height: 15px;
    color: var(--color-grey);
  }

  &__input {
    padding: 16px;
    font-family: Roboto;
    font-size: 14px;
    line-height: 20px;
    color: var(--color-dark);
    border: 0;
    background-color: var(--color-platinum);
  }
}
</style>
