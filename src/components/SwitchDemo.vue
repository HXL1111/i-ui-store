<template>
  <Switch v-model:value="value" />
</template>

<script lang="ts" setup>
import { ref } from 'vue'
// @ts-ignore
import Switch from '../lib/Switch.vue'

const value = ref(true)
</script>

<style></style>
