<template>
  <div class="layout">
    <TopNav class="nav" toggle-menu-button-visible />
    <div class="content">
      <aside v-if="asideVisible">
        <h2>文档</h2>
        <ol>
          <li>
            <router-link to="/doc/intro">介绍</router-link>
          </li>
          <li>
            <router-link to="/doc/install">安装</router-link>
          </li>
          <li>
            <router-link to="/doc/get-started">开始使用</router-link>
          </li>
        </ol>
        <h2>组件列表</h2>
        <ol>
          <li>
            <router-link to="/doc/button">Button 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/switch">Switch 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/dialog">Dialog 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/tabs">Tabs 组件</router-link>
          </li>
        </ol>
      </aside>
      <main @click="closeAside"><router-view /></main>
    </div>
  </div>
</template>

<script lang="ts">
import { inject, Ref } from 'vue'
import TopNav from '../components/TopNav.vue'
export default {
  components: { TopNav },
  setup() {
    const asideVisible = inject<Ref<boolean>>('asideVisible')
    const closeAside = () => {
      asideVisible.value = false
    }
    return { asideVisible, closeAside }
  },
}
</script>
<style lang="scss" scoped>
$blue: #abd7fa;
$aside-index: 10;
.layout {
  display: flex;
  flex-direction: column;
  height: 100vh;
  > .nav {
    flex-shrink: 0;
  }
  > .content {
    flex-grow: 1;
    padding-top: 60px;
    padding-left: 156px;
    @media (max-width: 500px) {
      padding-left: 0;
    }
  }
}
.content {
  display: flex;
  > aside {
    flex-shrink: 0;
    position: fixed;
    top: 0;
    left: 0;
    padding-top: 70px;
    height: 100%;
  }
  > main {
    flex-grow: 1;
    padding: 16px;
    background: #f7f8fa;
  }
}
aside {
  background: white;
  width: 150px;
  padding: 16px 0;
  box-shadow: 2px 0px 9px 1px rgba(0, 0, 0, 0.2);
  z-index: $aside-index;
  > h2 {
    margin-bottom: 4px;
    padding: 0 16px;
  }
  > ol {
    > li {
      > a {
        display: block;
        padding: 4px 16px;
        text-decoration: none;
      }
      .router-link-active {
        background: $blue;
        border-radius: 8px;
      }
    }
  }
}
main {
  overflow: auto;
}
</style>
