<template>
  <h1>Input 示例</h1>
  <Input v-model="input" placeholder="请输入内容" />
</template>

<script lang="ts">
import { ref } from 'vue'
import Input from '../lib/Input.vue'

export default {
  components: {
    Input,
  },
  setup() {
    const input = ref<string>('')
    return { input }
  },
}
</script>

<style lang="scss" scoped></style>
