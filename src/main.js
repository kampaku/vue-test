import { createApp } from 'vue'
import './assets/fonts/font.scss'
import './style.scss'
import App from './App.vue'
import CustomButton from './components/CustomButton.vue'

const app = createApp(App)

app.component('custom-button', CustomButton)
app.mount('#app')
