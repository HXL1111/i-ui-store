<template>
  <div>
    <h1>Switch 组件示例</h1>
    <Demo :component="Switch1Demo" />
    <Demo :component="Switch2Demo" />
  </div>
</template>

<script lang="ts">
import Demo from './Demo.vue'
import Switch1Demo from './Switch1.demo.vue'
import Switch2Demo from './Switch2.demo.vue'
import 'prismjs'
import 'prismjs/themes/prism.css'
const Prism = (window as any).Prism

export default {
  components: {
    Demo,
  },
  setup() {
    return { Switch1Demo, Switch2Demo, Prism }
  },
}
</script>

<style lang="scss"></style>
