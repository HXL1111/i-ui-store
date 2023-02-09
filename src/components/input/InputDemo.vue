<template>
  <h1>Input 示例</h1>
  <Input1Demo />
  <Input2Demo />
  <Input3Demo />
  <Input4Demo />
  <Demo :component="Input1Demo" />
</template>

<script lang="ts">
import Demo from '../Demo.vue'
import Input2Demo from './Input2.demo.vue'
import Input1Demo from './Input1.demo.vue'
import Input3Demo from './input3.demo.vue'
import Input4Demo from './input4.demo.vue'
export default {
  components: {
    Demo,
    Input2Demo,
    Input3Demo,
    Input4Demo,
  },
  setup() {
    return {
      Input1Demo,
      Input2Demo,
      Input3Demo,
      Input4Demo,
    }
  },
}
</script>
