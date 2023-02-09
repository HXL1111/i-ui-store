<template>
  <div class="i-input-wrapper">
    <input :value="modelValue" @input="onInput" :placeholder="placeholder" :disabled="disabled" class="i-input" />
    <div v-if="clearable" class="i-delete" @click="onDelete">
      <Icon name="delete" v-show="modelValue !== ''" />
    </div>
  </div>
</template>

<script lang="ts">
import Icon from '../components/Icon.vue'
export default {
  components: {
    Icon,
  },
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
    clearable: {
      type: Boolean,
    },
  },
  emits: ['update:modelValue'],
  setup(props, content) {
    const onInput = (e: any) => {
      content.emit('update:modelValue', e.target.value)
    }
    const onDelete = () => {
      content.emit('update:modelValue', '')
    }
    return { onInput, onDelete }
  },
}
</script>

<style lang="scss">
$blue: #40a9ff;
$grey: #dcdfe6;
.i-input-wrapper {
  position: relative;
  display: inline;
  > .i-input {
    padding: 10px 28px 10px 10px;
    border-radius: 6px;
    border: 1px solid $grey;
    cursor: pointer;
  }
  > .i-delete {
    position: absolute;
    right: 0;
    top: -5px;
    margin: 6px;
    cursor: pointer;
  }
}
</style>
