<template>
  <div class="topNav">
    <div class="logo" @click="asideToggle">LOGO</div>
    <ul class="menu">
      <li>菜单1</li>
      <li>菜单2</li>
    </ul>
  </div>
</template>
<script lang="ts">
import { inject, Ref } from 'vue'

export default {
  setup() {
    const asideVisible = inject<Ref<boolean>>('asideVisible')!
    const asideToggle = () => {
      asideVisible.value = !asideVisible.value
    }
    return { asideToggle }
  },
}
</script>
<style lang="scss" scoped>
.topNav {
  outline: 1px solid #e7e7e7;
  display: flex;
  align-items: center;
  padding: 16px;
  position: relative;
  z-index: 10;
  background: #fff;
  > .logo {
    max-width: 6em;
    margin-right: auto;
  }
  > .menu {
    display: flex;
    white-space: nowrap;
    flex-wrap: nowrap;
    > li {
      margin: 0 1em;
    }
  }
}
</style>
