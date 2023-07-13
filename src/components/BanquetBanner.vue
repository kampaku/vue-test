<template>
  <div class="banner">
    <custom-button v-if="isMobile" class="banner__button" @click="$emit('startCalculate')" withArrow
      >Начать</custom-button
    >
    <span v-else class="banner__text"
      >Ответьте на 5 вопросов и получите горку из шампанского в подарок</span
    >
    <img class="banner__image" src="../assets/images/bottle.png" alt="bottle" />
  </div>
</template>

<script setup>
import { useMediaQuery } from '../hook/useMediaQuery'
const isMobile = useMediaQuery('(max-width: 426px)')
const emit = defineEmits(['startCalculate'])
</script>

<style lang="scss" scoped>
.banner {
  min-height: 369px;
  padding: 32px 40px;
  background:
    url('../assets/images/фон.svg') top right no-repeat,
    var(--color-lightgrey);
  position: relative;
  border-radius: var(--border-radius);
  display: grid;
  grid-template-columns: repeat(5, 1fr);

  &__image {
    position: absolute;
    right: 0;
    bottom: 0;
    width: 300px;

    @media screen and (max-width: 1024px) {
      width: 280px;
    }
  }

  &__text {
    grid-column: 1 / 5;
    align-self: end;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: 32px;
  }

  &__button {
    align-self: end;
  }
}
</style>
