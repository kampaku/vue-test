<template>
  <div class="banket-cost">
    <h3 class="banket-cost__title">Рассчитайте стоимость вашего банкета</h3>
    <p v-if="isMobile" class="banket-cost__subtitle">
      Ответьте на 5 вопросов и получите горку из шампанского в подарок
    </p>
    <div class="banket-cost__wrapper">
      <calculator v-if="!isMobile || start"></calculator>
      <banquet-banner v-if="!start || !isMobile" @start-calculate="start = true"></banquet-banner>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Calculator from './Calculator.vue'
import BanquetBanner from './BanquetBanner.vue'
import { useMediaQuery } from '../hook/useMediaQuery'
const isMobile = useMediaQuery('(max-width: 426px)')
const start = ref(false)
</script>

<style lang="scss" scoped>
.banket-cost {
  max-width: var(--container-width);
  width: 100%;
  padding: 0 20px;

  @media screen and (max-width: 1024px) {
    padding: 0;
  }

  &__title {
    font-family: P052;
    margin: 0;
    font-size: 40px;
    font-weight: 700;
    line-height: 48px;

    @media screen and (max-width: 426px) {
      padding: 0 16px;
      font-size: 20px;
      line-height: 28px;
    }
  }

  &__subtitle {
    padding: 0 16px;
    font-size: 14px;
    line-height: 20px;
  }

  &__wrapper {
    margin-top: 13px;
    display: grid;
    grid-template-columns: 7fr 5fr;
    gap: 20px;

    @media screen and (max-width: 1024px) {
      grid-template-columns: 1fr;
    }
  }
}
</style>
