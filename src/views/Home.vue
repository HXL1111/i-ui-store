<template>
  <TopNav />
  <div class="banner">
    <h1>i UI</h1>
    <h2>一个很厉害的 UI 框架</h2>
    <p class="actions">
      <a href="https://github.com" class="github">Github</a>
      <router-link to="/doc" class="start">开始</router-link>
    </p>
  </div>
</template>
<script lang="ts">
import TopNav from '../components/TopNav.vue'
export default {
  components: { TopNav },
}
</script>
<style lang="scss" scoped>
.banner {
  padding: 100px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  > .actions {
    padding: 8px 0;
    a {
      margin: 0 8px;
      background: #fff;
      display: inline-block;
      $h: 28px;
      height: $h;
      line-height: $h;
      border-radius: calc($h/2);
      padding: 0 8px;
      &:hover {
        cursor: pointer;
      }
      &.github {
        background: #42b883;
        &:hover {
          background: #33a06f;
        }
      }
      &.start {
        background: #f1f1f1;
        &:hover {
          background: #e5e5e5;
        }
      }
    }
  }
}
</style>
