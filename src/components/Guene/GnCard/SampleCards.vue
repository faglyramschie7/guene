<script lang="ts" setup>
import GnCard from './GnCard.vue';
import GnButton from '../GnButton/GnButton.vue'
</script>


<template>
  <div class="gn-flex">
    <GnCard>
      <template #image>
       <img src="https://placehold.co/400" alt="">
      </template>
      <template #callout-top-left>
        <div class="gn-px-2 gn-w-auto gn-bg-black gn-rounded-lg gn-text-white">
          test
        </div>
      </template>

      <template #title>
        <h1 class="gn-text-lg gn-font-bold">This is the titles</h1>
      </template>
      <template #subtitle>
        i am the subtitle
      </template>
      <template #description>
        i am the description
      </template>
      <template #button>
        <div class="gn-w-full">
          <GnButton block>
           Hello World
          </GnButton>

        </div>
      </template>
    </GnCard>
  </div>
</template>
