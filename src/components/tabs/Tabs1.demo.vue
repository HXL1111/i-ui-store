<demo>
  常规用法
</demo>
<template>
  <Tabs v-model:selected="selected">
    <Tab title="导航1">内容1</Tab>
    <Tab title="导航2">内容2</Tab>
  </Tabs>
</template>

<script lang="ts">
import Tabs from '../../lib/I-tabs.vue'
import Tab from '../../lib/i-tab.vue'
import { ref } from 'vue'
export default {
  components: {
    Tab,
    Tabs,
  },
  setup() {
    const selected = ref('导航1')
    return { selected }
  },
}
</script>
