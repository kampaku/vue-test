<template>
  <footer class="footer">
    <div class="footer__row">
      <logo></logo>
      <div class="footer__socials">
        <span class="footer__socials-title">Мы в соц. сетях</span>
        <social-button type="FB"></social-button>
        <social-button type="VK"></social-button>
        <social-button type="WhatsApp"></social-button>
      </div>
    </div>
    <p class="footer__copyright">© Hotel Stavropol, 2020</p>
  </footer>
</template>

<script setup>
import Logo from './Logo.vue'
import SocialButton from './SocialButton.vue'
</script>

<style lang="scss" scoped>
.footer {
  padding: 48px 20px 0;
  max-width: var(--container-width);
  width: 100%;
  border-radius: 20px 20px 0 0;
  background-color: var(--color-darkgrey);
  color: var(--color-white);

  &__row {
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media screen and (max-width: 376px) {
      flex-direction: column;
      align-items: flex-start;
      gap: 40px;
    }
  }

  &__socials {
    display: grid;
    max-width: fit-content;
    row-gap: 16px;
    column-gap: 20px;
    grid-template-rows: auto auto;
    grid-template-columns: repeat(3, 1fr);
  }

  &__socials-title {
    font-size: 20px;
    line-height: 24px;
    grid-column: 1 / 4;
  }

  &__copyright {
    margin: 40px 0 4px;
    font-size: 14px;
    line-height: 20px;

    @media screen and (max-width: 376px) {
      margin-top: 60px;
    }
  }
}
</style>
