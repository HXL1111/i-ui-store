<template>
  <div class="topNav">
    <router-link to="/" class="logo"><Icon name="logo" /><span>i UI</span> </router-link>

    <router-link to="/doc" class="menu">文档</router-link>
    <span v-if="toggleMenuButtonVisible" @click="asideToggle" class="toggleAside"><Icon name="menu" /></span>
  </div>
</template>
<script lang="ts">
import { inject, ref, Ref } from 'vue'
import Icon from './Icon.vue'

export default {
  props: {
    toggleMenuButtonVisible: {
      type: Boolean,
      default: false,
    },
  },
  setup() {
    const selectedMenu = ref('菜单1')
    const asideVisible = inject<Ref<boolean>>('asideVisible')!
    const asideToggle = () => {
      asideVisible.value = !asideVisible.value
    }

    return { asideToggle, selectedMenu }
  },
  components: { Icon },
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
    cursor: pointer;
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
    padding-right: 32px;
    color: #0a8df6;
    cursor: pointer;
  }
  > .toggleAside {
    display: inline-block;
    width: 24px;
    height: 24px;
    position: absolute;
    left: 16px;
    top: 50%;
    transform: translateY(-50%);
    display: none;
    > .icon {
      width: 24px;
      height: 24px;
    }
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
