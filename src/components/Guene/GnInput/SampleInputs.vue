<template>
    <div class="gn-flex-row">
       <GnInput>
        <GnMessage position="topRight">This is a message</GnMessage>
        <template #state-msg-warn>
          Hello World
        </template>

      </GnInput>
    </div>
</template>

<script setup lang="ts">
import GnInput from './GnInput.vue';
import GnMessage from '../GnMessage/GnMessage.vue';
</script>

<style scoped></style>
