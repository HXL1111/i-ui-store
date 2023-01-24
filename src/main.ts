import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import Home from './views/Home.vue'
import Doc from './views/Doc.vue'
import '@svgstore'
const routes = [
  { path: '/', component: Home },
  { path: '/doc', component: Doc },
]
const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

const app = createApp(App)
app.use(router)
app.mount('#app')
