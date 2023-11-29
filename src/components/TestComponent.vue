<script setup lang="ts">

import type {HeaderMenu} from "@/modules/HeaderMenu.ts"; // The problem still exists
import {ref} from "vue";

const menu = ref<HeaderMenu>({
  id: 0,
  text: 'string',
  target: 'string',
  isOthersLink: false,
})

</script>

<template>
  <div class="test-component">
    <h1>This is a test component</h1>
    <p>{{ menu }}</p>
  </div>
</template>

<style scoped>

</style>