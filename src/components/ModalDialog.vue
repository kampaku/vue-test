<template>
  <Transition name="modal">
    <div v-if="show" class="modal" @click="onClose">
      <div @click.stop class="modal__container">
        <div class="modal__header">
          <button class="modal__close" @click="onClose">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z"
                fill="#18191B"
              />
            </svg>
          </button>
        </div>

        <div class="modal__body">
          <slot>default body</slot>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup>
const props = defineProps({
  show: Boolean,
})

const emit = defineEmits(['close'])

const onClose = () => {
  emit('close')
}
</script>

<style lang="scss" scoped>
.modal {
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: rgba(24, 25, 27, 0.9);

  &__container {
    min-height: 100px;
    min-width: 300px;
    border-radius: var(--border-radius);
    background-color: var(--color-white);
  }

  &__header {
    display: flex;
    padding: 14px 14px 0 0;
  }

  &__close {
    margin-left: auto;
    border: 0;
    background-color: transparent;
    cursor: pointer;
  }

  &__body {
    padding: 0px 80px 60px 40px;
  }
}
</style>
