<template>
  <div>
    <div v-for="(t, index) in title" :key="index">{{ t }}</div>
    <component v-for="(c, index) in defaultComponent" ::key="index" :is="c" />
  </div>
</template>

<script lang="ts">
import Tab from './Tab.vue'
export default {
  setup(props, content) {
    const defaultComponent = content.slots.default()
    defaultComponent.forEach((tag) => {
      if (tag.type !== Tab) {
        throw new Error('Tabs only supports Tab as a subComponent')
      }
    })
    const title = defaultComponent.map((tag) => tag.props.title)
    return { defaultComponent, title }
  },
}
</script>

<style lang="scss" scoped></style>
