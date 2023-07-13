<template>
  <div class="calculator">
    <p class="calculator__count-step">Вопрос {{ currentStep }} из {{ maxStep }}</p>
    <progress class="calculator__step" :value="currentStep" :max="maxStep"></progress>
    <template v-for="(item, i) in questions" :key="item.question">
      <div v-if="currentStep === i + 1">
        <p class="calculator__question">{{ item.question }}</p>
        <div class="calculator__radios">
          <radio-button
            v-for="option in item.options"
            v-model="item.answer"
            :label="option"
            :value="option"
          ></radio-button>
        </div>
      </div>
    </template>
    <custom-button class="calculator__next-step" theme="primary" @click="nextStep" withArrow
      >Следующий вопрос</custom-button
    >
  </div>
</template>

<script setup>
import { ref } from 'vue'
import RadioButton from './RadioButton.vue'
const questions = ref([
  {
    question: 'Количество гостей',
    answer: '5-30',
    options: ['5-30', '30-60', '60-80', '80-100', '100-120'],
  },
  {
    question: 'Второй вопрос',
    answer: 'первый',
    options: ['первый', 'второй'],
  },
])

const currentStep = ref(1)
const maxStep = questions.value.length
const nextStep = () => {
  if (currentStep.value < maxStep) {
    currentStep.value++
  }
}
</script>

<style lang="scss" scoped>
.calculator {
  background-color: var(--color-lightgrey);
  padding: 32px 40px;
  border-radius: var(--border-radius);

  @media screen and (max-width: 426px) {
    padding: 29px 16px;
    font-size: 14px;
  }

  &__count-step {
    margin: 0;
  }

  &__step {
    appearance: none;
    width: 100%;
    height: 4px;

    &::-webkit-progress-value {
      background-color: var(--color-primary);
    }

    &::-webkit-progress-bar {
      background-color: var(--color-white);
    }

    &::-moz-progress-bar {
      background-color: var(--color-primary);
    }
  }

  &__question {
    margin: 32px 0 0;
    font-size: 24px;
    font-weight: 400;
    line-height: 32px;

    @media screen and (max-width: 426px) {
      font-size: 16px;
      line-height: 28px;
    }
  }

  &__radios {
    margin-top: 24px;
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
  }

  &__next-step {
    margin-top: 73px;

    @media screen and (max-width: 426px) {
      margin-top: 50px;
    }
  }
}
</style>
