<template>
  <div class="callback">
    <div class="callback__col">
      <h2 class="callback__title">Оставьте заявку</h2>
      <p class="callback__subtitle">Скоро с вами свяжется администратор</p>
      <p class="callback__policy">
        Нажимая на кнопку «Отправить», Вы соглашаетесь с <a href="/">Политикой конфиденциальности</a>
      </p>
    </div>
    <div class="callback__col">
      <form class="callback__form" @submit.prevent="onSubmit">
        <custom-input label="Ваше имя" v-model="name" required></custom-input>
        <custom-input label="Ваш номер телефона" v-model="tel" mask="+7(###)###-##-##" required></custom-input>
        <custom-button>Забронировать</custom-button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import CustomInput from './CustomInput.vue';
const name = ref('')
const tel = ref('')
const emit = defineEmits(['close'])
const onSubmit = () => emit('close')
</script>

<style lang="scss" scoped>
.callback {
  display: grid;
  grid-template-columns: 1fr 1fr;
  place-content: center;
  gap: 20px;
  max-width: 702px;

  &__col {
    display: flex;
    flex-direction: column;
  }

  &__title {
    margin: 0;
    font-family: P052;
    font-size: 32px;
    font-weight: 700;
    line-height: 32px;
    color: var(--color-primary);
  }

  &__subtitle {
    font-size: 16px;
    line-height: 28px;
    color: var(--color-grey);
  }

  &__policy {
    margin-top: auto;
    font-family: Roboto;
    font-size: 12px;
    line-height: 15px;
    color: var(--color-grey);

    a {
      color: inherit;
    }
  }

  &__form {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
}
</style>
