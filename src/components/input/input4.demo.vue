<template>
  <div><Input v-model="input" placeholder="请输入内容" show-password /></div>
</template>

<script lang="ts">
import { ref } from 'vue'
import Input from '../../lib/I-input.vue'

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
