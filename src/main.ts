import './lib/i-lib.scss'
import './style.css'
import { createApp } from 'vue'
import App from './App.vue'
import { router } from './router';
import 'github-markdown-css'

const app = createApp(App)
app.use(router)
app.mount('#app')
