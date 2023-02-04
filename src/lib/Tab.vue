<template>
  <div>
    <slot />
  </div>
</template>

<script lang="ts">
export default {
  props: {
    title: {
      type: String,
    },
  },
}
</script>

<style lang="scss" scoped></style>
