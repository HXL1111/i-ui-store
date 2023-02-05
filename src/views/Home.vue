<template>
  <TopNav />
  <div class="banner">
    <h1>i UI</h1>
    <h3>助力设计开发者「更灵活」地搭建出「更美」的产品，让用户「快乐工作」～</h3>
    <p class="actions">
      <a href="https://github.com" class="github">Github</a>
      <router-link to="/doc" class="start">开始</router-link>
    </p>
    <ul class="features">
      <li class="vue">
        <Icon name="vue" />
      </li>
      <li class="ts">
        <Icon name="ts" />
      </li>
      <li class="easy">
        <Icon name="easy" />
      </li>
    </ul>
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
  padding: 32px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  > h1 {
    font-size: 100px;
    color: $blue;
    padding-top: 32px;
  }
  > h3 {
    padding: 8px 0;
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
      width: 215px;
      border-radius: 8px;
      padding: 0 8px;
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
    > .vue {
    }
    > .ts {
    }
    > .easy {
    }
  }
}
</style>
