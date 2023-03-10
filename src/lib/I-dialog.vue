<template>
  <template v-if="visible">
    <div class="i-dialog-overlay" @click="onClickOverlay"></div>
    <div class="i-dialog-wrapper">
      <div class="i-dialog">
        <header>
          <slot name="title" />
          <span class="i-dialog-close" @click="close"></span>
        </header>
        <main>
          <slot name="content" />
        </main>
        <footer>
          <Button @click="cancel">Cancel</Button>
          <Button level="main" @click="ok">OK</Button>
        </footer>
      </div>
    </div>
  </template>
</template>

<script lang="ts">
import Button from './I-button.vue'
export default {
  components: {
    Button,
  },
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
    closeOnClickOverlay: {
      type: Boolean,
      default: true,
    },
    ok: {
      type: Function,
    },
    cancel: {
      type: Function,
    },
  },
  setup(props, context) {
    const close = () => {
      context.emit('update:visible', false)
    }
    const onClickOverlay = () => {
      if (props.closeOnClickOverlay) {
        close()
      }
    }
    const ok = () => {
      if (props.ok?.() !== false) {
        close()
      }
    }
    const cancel = () => {
      context.emit('cancel')
      close()
    }
    return {
      close,
      onClickOverlay,
      ok,
      cancel,
    }
  },
}
</script>
<style lang="scss">
$radius: 4px;
$border-color: #d9d9d9;
.i-dialog {
  background: white;
  border-radius: $radius;
  box-shadow: 0 0 3px fade_out(black, 0.5);
  min-width: 15em;
  max-width: 90%;
  &-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: fade_out(black, 0.5);
    z-index: 10;
  }
  &-wrapper {
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 11;
  }
  > header {
    padding: 12px 16px;
    border-bottom: 1px solid $border-color;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 20px;
  }
  > main {
    padding: 12px 16px;
  }
  > footer {
    border-top: 1px solid $border-color;
    padding: 12px 16px;
    text-align: right;
  }
  &-close {
    position: relative;
    display: inline-block;
    width: 16px;
    height: 16px;
    cursor: pointer;
    &::before,
    &::after {
      content: '';
      position: absolute;
      height: 1px;
      background: black;
      width: 100%;
      top: 50%;
      left: 50%;
    }
    &::before {
      transform: translate(-50%, -50%) rotate(-45deg);
    }
    &::after {
      transform: translate(-50%, -50%) rotate(45deg);
    }
  }
}
</style>
