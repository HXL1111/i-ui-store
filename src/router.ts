import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Home from './views/Home.vue'
import Doc from './views/Doc.vue'
import Intro from './views/Intro.vue';
import GetStarted from './views/GetStarted.vue'
import Install from './views/Install.vue'
import InputDemo from './components/input/InputDemo.vue'
import SwitchDemo from './components/switch/SwitchDemo.vue'
import ButtonDemo from './components/button/ButtonDemo.vue';
import DialogDemo from './components/dialog/DialogDemo.vue'
import TabsDemo from './components/tabs/TabsDemo.vue'
const routes = [
  { path: '/', component: Home },
  {
    path: '/doc',
    component: Doc,
    children: [
      { path: '', redirect: '/doc/intro' },
      { path: "intro", component: Intro },
      { path: "get-started", component: GetStarted },
      { path: "install", component: Install },
      { path: 'switch', component: SwitchDemo },
      { path: 'button', component: ButtonDemo },
      { path: 'dialog', component: DialogDemo },
      { path: 'tabs', component: TabsDemo },
      { path: 'input', component: InputDemo },
    ]
  },
] as RouteRecordRaw[]
export const router = createRouter({
  history: createWebHashHistory(),
  routes,
})
