<template>
  <div class="topNav">
    <div class="logo" @click="asideToggle">i UI</div>
    <ul class="menu">
      <li>菜单1</li>
      <li>菜单2</li>
    </ul>
    <span class="toggleAside"></span>
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
  min-height: 54px;
  outline: 1px solid #e7e7e7;
  display: flex;
  justify-content: center;
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
  > .toggleAside {
    display: inline-block;
    width: 24px;
    height: 24px;
    background: red;
    position: absolute;
    left: 16px;
    top: 50%;
    transform: translateY(-50%);
  }
  @media (max-width: 500px) {
    > .menu {
      display: none;
    }
    > .logo {
      margin: 0 auto;
    }
  }
}
</style>
