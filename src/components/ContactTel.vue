<template>
  <div class="contact">
    <span class="contact__tel">+7 (123) 45-67-89</span>
    <span class="contact__callback">Перезвоните мне</span>
  </div>
</template>

<script setup></script>

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
}
</style>
