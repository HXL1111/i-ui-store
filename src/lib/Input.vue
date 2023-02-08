<template>
  <div>
    <input :value="modelValue" @input="onInput" :placeholder="placeholder" />
  </div>
</template>

<script lang="ts">
export default {
  props: {
    modelValue: {
      type: String,
    },
    placeholder: {
      type: String,
    },
  },
  emits: ['update:modelValue'],
  setup(props, content) {
    const onInput = (e: any) => {
      content.emit('update:modelValue', e.target.value)
    }
    return { onInput }
  },
}
</script>

<style lang="scss" scoped></style>
