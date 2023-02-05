<template>
  <div class="topNav">
    <div class="logo"><Icon name="logo" /><span>i UI</span></div>
    <ul class="menu">
      <li @click="onSelect('菜单1')" :class="{ selected: selectedMenu === '菜单1' }">菜单1</li>
      <li @click="onSelect('菜单2')" :class="{ selected: selectedMenu === '菜单2' }">菜单2</li>
    </ul>
    <span @click="asideToggle" class="toggleAside"></span>
  </div>
</template>
<script lang="ts">
import { inject, ref, Ref } from 'vue'
import Icon from './Icon.vue'

export default {
  setup() {
    const selectedMenu = ref('菜单1')
    const asideVisible = inject<Ref<boolean>>('asideVisible')!
    const asideToggle = () => {
      asideVisible.value = !asideVisible.value
    }
    const onSelect = (menu: string) => {
      selectedMenu.value = menu
    }
    return { asideToggle, onSelect, selectedMenu }
  },
  components: { Icon },
}
</script>
<style lang="scss" scoped>
$blue: #25a4ad;
.topNav {
  min-height: 54px;
  outline: 1px solid #e7e7e7;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;
  background: #fff;
  > .logo {
    max-width: 6em;
    margin-right: auto;
    display: flex;
    align-items: center;
    > .icon {
      height: 32px;
      width: 32px;
    }
    > span {
      padding-left: 16px;
    }
  }
  > .menu {
    display: flex;
    white-space: nowrap;
    flex-wrap: nowrap;
    > li {
      margin: 0 1em;
      &.selected {
        position: relative;
        &::after {
          content: '';
          display: block;
          position: absolute;
          bottom: -6px;
          left: 0;
          width: 100%;
          height: 100%;
          height: 4px;
          background: $blue;
        }
      }
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
    display: none;
  }
  @media (max-width: 500px) {
    > .menu {
      display: none;
    }
    > .logo {
      margin: 0 auto;
    }
    > .toggleAside {
      display: block;
    }
  }
}
</style>
