<template>
  <div class="i-tabs">
    <div class="i-tabs-nav">
      <div
        class="i-tabs-nav-item"
        :class="{ selected: t === selected }"
        v-for="(t, index) in title"
        :key="index"
        @click="select(t)"
      >
        {{ t }}
      </div>
      <div class="i-tabs-nav-indicator"></div>
    </div>
    <div class="i-tabs-content">
      <component
        class="i-tabs-content-item"
        :class="{ selected: c.props.title === selected }"
        v-for="(c, index) in defaultComponent"
        :key="index"
        :is="c"
      />
    </div>
  </div>
</template>

<script lang="ts">
import Tab from './Tab.vue'
export default {
  props: {
    selected: {
      type: String,
    },
  },
  setup(props, content) {
    const defaultComponent = content.slots.default()
    defaultComponent.forEach((tag) => {
      if (tag.type !== Tab) {
        throw new Error('Tabs only supports Tab as a subComponent')
      }
    })
    const title = defaultComponent.map((tag) => tag.props.title)
    const select = (title) => {
      content.emit('update:selected', title)
    }
    return { defaultComponent, title, select }
  },
}
</script>

<style lang="scss">
$blue: #40a9ff;
$color: #333;
$border-color: #d9d9d9;
.i-tabs {
  &-nav {
    display: flex;
    color: $color;
    border-bottom: 1px solid $border-color;
    position: relative;
    &-item {
      padding: 8px 0;
      margin: 0 16px;
      cursor: pointer;
      &:first-child {
        margin-left: 0;
      }
      &.selected {
        color: $blue;
      }
    }
    &-indicator {
      position: absolute;
      height: 3px;
      background: $blue;
      left: 0;
      bottom: -1px;
      width: 100px;
    }
  }
  &-content {
    padding: 8px 0;
    &-item {
      display: none;
    }
    > .selected {
      display: block;
    }
  }
}
</style>
