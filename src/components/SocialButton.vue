<template>
  <div class="social">
    <a class="social__link" :href="link" target="_blank">
      <img :src="icons[props.type]" />
    </a>
  </div>
</template>

<script setup>
import FB from '../assets/images/socials/FB.svg'
import VK from '../assets/images/socials/VK.svg'
import WhatsApp from '../assets/images/socials/WhatsApp.svg'

const icons = {
  FB,
  VK,
  WhatsApp
}

const socials = {
  FB: 'https://facebook.com/',
  VK: 'https://vk.com/',
  WhatsApp: 'https://wa.com/',
}
const props = defineProps({
  type: {
    required: true,
    type: String,
    validator(val) {
      return ['FB', 'VK', 'WhatsApp'].includes(val)
    },
  },
})

const link = socials[props.type]
</script>

<style lang="scss" scoped>
.social {
  width: 52px;
  height: 52px;
  border-radius: var(--border-radius);
  background-color: var(--color-grey);

  &__link {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }
}
</style>
