<template>
  <div class="card">
    <h4 class="card__title">{{ title }}</h4>
    <div class="card__list">
      <div class="card__item">
        <span class="card__info">площадь</span>
        <span class="card__spec">{{ floorspace }} кв. метров</span>
      </div>
      <div class="card__item">
        <span class="card__info">вместимость</span>
        <span class="card__spec">до {{ capacity }} человек</span>
      </div>
      <div class="card__item">
        <span class="card__info">фуршет</span>
        <span class="card__spec">до {{ buffet }} человек</span>
      </div>
    </div>
    <div class="card__buttons">
      <custom-button>Забронировать</custom-button>
      <custom-button theme="outline">Посмотреть галерею</custom-button>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  floorspace: String,
  capacity: String,
  buffet: String,
})
</script>

<style lang="scss" scoped>
.card {
  max-width: 536px;
  padding: 40px 40px 48px 40px;
  background-color: var(--color-white);
  border-radius: var(--border-radius);
  box-shadow: 0px 8px 16px 0px rgba(34, 35, 36, 0.1);

  @media screen and (max-width: 426px) {
    padding: 24px 16px;
  }

  &__title {
    margin: 0;
    font-family: P052;
    font-size: 32px;
    font-weight: 700;
    line-height: 32px;

    @media screen and (max-width: 426px) {
      font-size: 20px;
      line-height: 28px;
    }
  }

  &__list {
    margin-top: 24px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
  }

  &__item {
    display: contents;
  }

  &__item:not(:last-child)::after {
    content: '';
    width: 100%;
    height: 2px;
    background-color: var(--color-platinum);
    grid-column: 1 / -1;
  }

  &__info {
    grid-column: 1 / 2;
    font-size: 16px;
    font-weight: 400;
    line-height: 28px;
    color: var(--color-grey);

    @media screen and (max-width: 426px) {
      font-size: 14px;
      line-height: 20px;
    }
  }

  &__spec {
    grid-column: 2 / 3;
    font-size: 16px;
    font-weight: 400;
    line-height: 28px;
    color: var(--color-dark);

    @media screen and (max-width: 426px) {
      font-size: 14px;
      line-height: 20px;
    }
  }

  &__buttons {
    margin-top: 32px;
    display: flex;
    gap: 16px;

    @media screen and (max-width: 426px) {
      flex-direction: column;
      align-content: center;
    }
  }
}
</style>
