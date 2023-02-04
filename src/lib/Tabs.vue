<template>
  <div class="i-tabs">
    <div class="i-tabs-nav" ref="container">
      <div
        class="i-tabs-nav-item"
        :class="{ selected: t === selected }"
        v-for="(t, index) in title"
        :ref="
          (el:HTMLDivElement) => {
            if (t === selected) selectedItem = el
          }
        "
        :key="index"
        @click="select(t)"
      >
        {{ t }}
      </div>
      <div class="i-tabs-nav-indicator" ref="indicator"></div>
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
import { onMounted, onUpdated, ref } from 'vue'
import Tab from './Tab.vue'
export default {
  props: {
    selected: {
      type: String,
    },
  },
  setup(props, content) {
    const defaultComponent = content.slots.default()
    const selectedItem = ref<HTMLDivElement>(null)
    const indicator = ref<HTMLDivElement>(null)
    const container = ref<HTMLDivElement>(null)
    const x = () => {
      const { width } = selectedItem.value.getBoundingClientRect()
      indicator.value.style.width = width + 'px'
      const { left: left1 } = container.value.getBoundingClientRect()
      const { left: left2 } = selectedItem.value.getBoundingClientRect()
      const left = left2 - left1
      indicator.value.style.left = left + 'px'
    }
    onMounted(x)
    onUpdated(x)
    defaultComponent.forEach((tag) => {
      if (tag.type !== Tab) {
        throw new Error('Tabs only supports Tab as a subComponent')
      }
    })
    const title = defaultComponent.map((tag) => tag.props.title)
    const select = (title) => {
      content.emit('update:selected', title)
    }
    return { defaultComponent, title, select, selectedItem, indicator, container }
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
      transition: all 500ms;
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
