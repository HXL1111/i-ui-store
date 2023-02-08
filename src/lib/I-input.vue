<template>
  <div>
    <input :value="modelValue" @input="onInput" :placeholder="placeholder" :disabled="disabled" class="i-input" />
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
    disabled: {
      type: Boolean,
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

<style lang="scss">
$blue: #40a9ff;
$grey: #dcdfe6;

.i-input {
  padding: 8px;
  border-radius: 6px;
  border: 1px solid $grey;
  cursor: pointer;
  &:focus,
  &:hover {
    outline: 1px solid $blue;
  }
}
</style>
