<template>
  <TopNav />
  <div class="banner">
    <h1>i UI</h1>
    <h2>一个厉害的 Vue UI 框架</h2>
    <h3>助力设计开发者「更灵活」地搭建出「更美」的产品，让用户「快乐工作」～</h3>
    <p class="actions">
      <a href="https://github.com" class="github">Github</a>
      <router-link to="/doc" class="start">开始</router-link>
    </p>
    <div class="features">
      <ul>
        <li>
          <Icon name="vue" />
          <h2>基于 Vue 3</h2>
          <p>骄傲地使用了 Vue 3 Composition API</p>
        </li>
        <li>
          <Icon name="ts" />
          <h2>基于 TypeScript</h2>
          <p>源代码采用 TypeScript 书写 (非严格检查)</p>
        </li>
        <li>
          <Icon name="easy" />
          <h2>代码易读</h2>
          <p>每个组件的源代码都极其简洁</p>
        </li>
      </ul>
    </div>
  </div>
</template>
<script lang="ts">
import Icon from '../components/Icon.vue'
import TopNav from '../components/TopNav.vue'
export default {
  components: { TopNav, Icon },
}
</script>
<style lang="scss" scoped>
$blue: #1693f6;
$fff: #fff;
.banner {
  padding: 48px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  > h1 {
    font-size: 100px;
    color: $blue;
    padding-top: 48px;
    text-align: center;
  }

  > h3,
  h2 {
    padding: 8px 0;
    text-align: center;
  }
  > .actions {
    padding: 32px 0;
    display: flex;
    flex-direction: row;
    a {
      margin: 0 8px;
      background: #fff;
      display: flex;
      justify-content: center;
      align-items: center;
      $h: 58px;
      height: $h;
      line-height: $h;
      border-radius: 8px;
      padding: 8px 24px;
      font-size: 24px;
      &:hover {
        cursor: pointer;
      }
      &.github {
        background: $blue;
        color: $fff;
        box-shadow: 0 20px 30px rgba(0, 0, 0, 0.2);
        &:hover {
          background: darken($color: $blue, $amount: 2.5);
        }
      }
      &.start {
        color: $blue;
        border: 1px solid $blue;
        &:hover {
          background: darken($color: $fff, $amount: 2.5);
        }
      }
    }
  }
  .features {
    margin: 64px auto;
    padding: 0 16px;
    @media (min-width: 800px) {
      width: 800px;
      > ul {
        > li {
          width: 50%;
        }
      }
    }
    @media (min-width: 1200px) {
      width: 1200px;
      > ul {
        > li {
          width: 33.3333%;
        }
      }
    }
    > ul {
      display: flex;
      flex-wrap: wrap;
      > li {
        margin: 16px 0;
        display: grid;
        justify-content: start;
        align-content: space-between;
        grid-template-areas:
          'icon title'
          'icon text';
        grid-template-columns: 80px auto;
        grid-template-rows: 1fr auto;
        > .icon {
          grid-area: icon;
          width: 64px;
          height: 64px;
        }
        > h2 {
          grid-area: title;
          font-size: 28px;
        }
        > p {
          grid-area: text;
        }
      }
    }
  }
}
</style>
