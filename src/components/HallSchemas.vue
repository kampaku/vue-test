<template>
  <div class="hall-schema">
    <h3 class="hall-schema__title">Схемы залов</h3>
    <tabs-wrapper class="hall-schema__tabs">
      <tabs-item title="Зал Первый">
        <div class="hall-schema__card">
          <img src="../assets/images/зал.png" alt="схема зала" />
          <HallSpecCard
            class="hall-schema__info"
            floorspace="160"
            capacity="100"
            buffet="200"
            title="Просторный зал с панорамным видом на город"
          />
        </div>
      </tabs-item>
      <tabs-item title="Зал Второй">
        <div class="hall-schema__card">
          <img src="../assets/images/зал.png" alt="схема зала" />
          <HallSpecCard
            class="hall-schema__info"
            floorspace="160"
            capacity="100"
            buffet="200"
            title="Тесный зал с ужасным видом на пустырь"
          />
        </div>
      </tabs-item>
    </tabs-wrapper>
  </div>
</template>

<script setup>
import TabsWrapper from './TabsWrapper.vue'
import TabsItem from './TabsItem.vue'
import HallSpecCard from './HallSpecCard.vue'
</script>

<style lang="scss" scoped>
.hall-schema {
  max-width: var(--container-width);
  padding: 0 20px;
  width: 100%;

  @media screen and (max-width: 426px) {
    padding: 0;
  }

  &__title {
    font-family: P052;
    margin: 0;
    font-size: 40px;
    font-weight: 700;
    line-height: 48px;

    @media screen and (max-width: 1024px) {
      text-align: center;
    }
    @media screen and (max-width: 426px) {
      font-size: 20px;
      line-height: 28px;
    }
  }

  &__tabs {
    margin-top: 32px;

    @media screen and (max-width: 1024px) {
      margin-top: 16px;
    }
  }

  &__card {
    display: grid;
    place-items: center;
    grid-template-columns: 1fr 1fr;

    @media screen and (max-width: 1024px) {
      grid-template-columns: 1fr;
      gap: 16px;
    }
  }

  &__info {
    justify-self: right;

    @media screen and (max-width: 1024px) {
      justify-self: initial;
    }
  }
}
</style>
