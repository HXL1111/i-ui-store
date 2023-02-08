<template>
  <h1>Input 示例</h1>
  <Input1Demo />
  <Input2Demo />
</template>

<script lang="ts">
import Demo from '../Demo.vue'
import Input2Demo from './Input2.demo.vue'
import Input1Demo from './Input1.demo.vue'
export default {
  components: {
    Demo,
    Input1Demo,
    Input2Demo,
  },
  setup() {
    return {
      Input1Demo,
      Input2Demo,
    }
  },
}
</script>
