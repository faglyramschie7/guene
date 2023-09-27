<template>
  <div class="gn-flex-row">
    <GnInput class="" state-msg-position="topRight" icon-position="right">
      <template #icon> f </template>
      <template #state-msg-danger> Hello World </template>
    </GnInput>
  </div>
</template>

<script setup lang="ts">
import GnInput from "./GnInput.vue";
</script>

<style scoped></style>
