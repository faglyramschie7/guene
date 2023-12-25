<template>
  <GnToast>
    <template #header>
      Notification
    </template>
    <template #body>
      you have a notification preview these changes.
    </template>
    <template #footer>
      <GnButton>
        Close
      </GnButton>
    </template>

  </GnToast>
</template>

<script lang="ts" setup>
import GnToast from "./GnToast.vue"
import GnButton from "../GnButton/GnButton.vue"
</script>
