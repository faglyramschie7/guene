<script lang="ts" setup>
import GnCard from './GnCard.vue';
import GnButton from '../GnButton/GnButton.vue'
</script>


<template>
  <div class="flex">
    <GnCard>
      <template #image>
       <img src="https://placehold.co/400" alt="">
      </template>
      <template #callout-top-left>
        <div class="px-2 w-auto bg-black rounded-lg text-white">
          test
        </div>
      </template>

      <template #title>
        <h1 class="text-lg font-bold">This is the titles</h1>
      </template>
      <template #subtitle>
        i am the subtitle
      </template>
      <template #description>
        i am the description
      </template>
      <template #button>
        <div class="w-full">
          <GnButton block>
           Hello World
          </GnButton>

        </div>
      </template>
    </GnCard>
  </div>
</template>
