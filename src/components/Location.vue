<template>
  <div class="location">
    <img class="location__icon" src="../assets/images/icons/map-pin.svg" alt="map pin" />
    <span class="location__city">{{ city }}</span>
    <span class="location__street">{{ street }}</span>
  </div>
</template>

<script setup>
defineProps({
  city: String,
  street: String,
})
</script>

<style lang="scss" scoped>
.location {
  display: grid;
  grid-template-columns: min-content 1fr;
  grid-template-rows: auto auto;
  column-gap: 16px;
  font-family: Lato;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;

  &__icon {
    grid-row: 1 / 3;
    grid-column: 1;
    align-self: center;
  }

  &__city {
    grid-row: 1;
    grid-column: 2;
  }

  &__street {
    grid-row: 2;
    grid-column: 2;
  }
}
</style>
