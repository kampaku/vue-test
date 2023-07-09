<template>
  <header class="header">
    <div class="header__wrapper">
      <div class="header__logo">
        <logo />
      </div>
      <div class="header__info">
        <location class="header__location" city="г. Ставрополь," street="ул. Пушкина 272"></location>
        <div class="header__messangers">
          <messanger-button :icon="Telegram" link="https://t.me/+7123456789" title="Telegram"></messanger-button>
          <messanger-button :icon="WhatsApp" link="https://wa.me/7123456789" title="WhatsApp"></messanger-button>
        </div>
        <contact-tel></contact-tel>
      </div>
    </div>
    <div class="header__menu">
      <app-menu></app-menu>
    </div>
  </header>
</template>

<script setup>
import Logo from './Logo.vue'
import Location from './Location.vue'
import Telegram from '../assets/images/socials/Telegram.svg'
import WhatsApp from '../assets/images/socials/WhatsApp.svg'
import MessangerButton from './MessangerButton.vue'
import ContactTel from './ContactTel.vue'
import AppMenu from './AppMenu.vue'
</script>

<style lang="scss" scoped>
.header {
  max-width: var(--container-width);
  font-family: Lato;
  width: 100%;
  padding: 12px 20px;
  flex-direction: column;
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.05);
  backdrop-filter: blur(16px);

  &__wrapper {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &__messangers {
    display: flex;
    gap: 8px;
    margin-left: 48px;
  }

  &__info {
    margin-left: auto;
    display: flex;
    gap: 48px;
  }

  &__menu {
    margin-top: 20px;
    display: flex;
    justify-content: center;
  }
}
</style>
