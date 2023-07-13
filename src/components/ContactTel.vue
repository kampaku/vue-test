<template>
  <a v-if="isMobile" class="contact__button" href="tel:+7123456789">Позвонить</a>
  <div v-else class="contact">
    <span class="contact__tel">+7 (123) 45-67-89</span>
    <span class="contact__callback" @click="showModal = true">Перезвоните мне</span>
  </div>
  <teleport to="body">
    <modal-dialog :show="showModal" @close="closeModal">
      <callback-form @close="closeModal"></callback-form>
    </modal-dialog>
  </teleport>
</template>

<script setup>
import { ref } from 'vue'
import ModalDialog from './ModalDialog.vue'
import CallbackForm from './CallbackForm.vue'
import { useMediaQuery } from '../hook/useMediaQuery'

const isMobile = useMediaQuery('(max-width: 426px)')
const showModal = ref(false)
const closeModal = () => (showModal.value = false)
</script>

<style lang="scss" scoped>
.contact {
  display: grid;
  grid-template-rows: auto auto;
  width: fit-content;

  &__tel {
    font-family: Lato;
    font-size: 20px;
    font-weight: 400;
    line-height: 24px;
  }

  &__callback {
    font-family: Roboto;
    font-size: 15px;
    font-weight: 400;
    line-height: 20px;
    text-decoration-line: underline;
    color: var(--color-primary);
    text-align: end;
    cursor: pointer;
  }

  &__button {
    padding: 8px 16px;
    font-family: Roboto;
    font-size: 15px;
    line-height: 20px;
    text-decoration: none;
    color: var(--color-white);
    background-color: var(--color-primary);
  }
}
</style>
