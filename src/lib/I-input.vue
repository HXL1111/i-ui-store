<template>
  <div class="i-input-wrapper">
    <input
      :value="modelValue"
      @input="onInput"
      :placeholder="placeholder"
      :disabled="disabled"
      class="i-input"
      :type="isPassword"
    />
    <div v-if="clearable || showPassword" class="i-delete">
      <Icon name="delete" @click="onDelete" v-show="clearable && modelValue !== ''" />
      <Icon name="eyes" v-show="showPassword" @click="onShow" />
    </div>
  </div>
</template>

<script lang="ts">
import { computed, ref, watch } from 'vue'
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
    showPassword: {
      type: Boolean,
    },
  },
  emits: ['update:modelValue', 'update:showPassword'],
  setup(props, content) {
    let isText = ref(true)
    const isPassword = computed(() => {
      return isText.value && props.showPassword ? 'password' : 'text'
    })

    const onInput = (e: any) => {
      content.emit('update:modelValue', e.target.value)
    }
    const onDelete = () => {
      content.emit('update:modelValue', '')
    }
    const onShow = () => {
      isText.value = !isText.value
    }
    return { onInput, onDelete, isPassword, onShow }
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
    color: #8e9092;
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
