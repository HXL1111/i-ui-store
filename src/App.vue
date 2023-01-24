<script setup>
import { provide, ref } from 'vue'

const width = document.documentElement.clientWidth
const asideVisible = ref(width <= 500 ? false : true)
provide('asideVisible', asideVisible)
</script>

<template>
  <router-view />
</template>

<style scoped></style>
