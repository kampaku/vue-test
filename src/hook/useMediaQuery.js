import { onMounted, onUnmounted, ref } from 'vue'

export function useMediaQuery(query) {
  let media = window.matchMedia(query)

  const matches = ref(media.matches)
  const update = (e) => {
    matches.value = e.matches
  }

  onMounted(() => {
    media.addEventListener('change', update)
  })

  onUnmounted(() => media.removeEventListener('change', update))

  return matches
}
