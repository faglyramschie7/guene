<script lang="ts" setup>
import {computed} from "vue"
import {cva} from "class-variance-authority"
import {cn} from "../lib/utils"
import {useSlots} from "vue"

const props = defineProps({
  intent: {
    type: String,
    validator: val => ["primary", "success", "danger", "warn", "dark"].includes(val),
    default: "primary"
  },
  type: {
    type: String,
    validator: val => ["default", "flat", "shadow", "gradient"].includes(val),
    default: "default"
  },
  rounded: {
    type: String,
    validator: val => ["none","xs", "sm", "md", "lg"].includes(val),
    default: "none"
  },
  gnClass: {
    type: String
  }
})



</script>

<template>
  <div class="gn-relative gn-w-full">
    <!-- <input type="range" class="gn-w-full gn-appearance-none gn-bg-transparent [&::-webkit-slider-runnable-track]:gn-rounded-full [&::-webkit-slider-runnable-track]:gn-bg-slate-600 [&::-webkit-slider-thumb]:gn-appearance-none [&::-webkit-slider-thumb]:gn-h-[15px] [&::-webkit-slider-thumb]:gn-w-[15px] [&::-webkit-slider-thumb]:gn-rounded-full [&::-webkit-slider-thumb]:gn-bg-blue-500"/> -->

    <input type="range" class="">
  </div>
</template>

<style scoped>
input {
  --c: orange; /* color */
  --g: 8px; /* gap */
  --l: 5px; /* line thinkness */
  --s: 30px; /* thumbsize */

  width: 100%;
  height: var(--s);
  appearance: none;
  background: none;
  cursor: pointer;
  overflow: hidden;
}


/* Chromium, Edge, Safari, Opera */
/* chromium */
input[type="range" i]::-webkit-slider-thumb{
  height: var(--s);
  aspect-ratio: 1;
  border-radius: 50%;
  box-shadow: 0 0 0 var(--l) inset var(--c);
  border-image-source: linear-gradient(90deg,var(--c) 50%,#ababab 0);
  border-image-slice: 1;
  border-image-width: 0 100vw;
  border-image-outset: 0 calc(100vw + var(--g));
  clip-path:
    polygon(
       0     calc(50% + var(--l)/2),
      -100vw calc(50% + var(--l)/2),
      -100vw calc(50% - var(--l)/2),
       0     calc(50% - var(--l)/2),
       0 0,100% 0,
       100%  calc(50% - var(--l)/2),
       100vw calc(50% - var(--l)/2),
       100vw calc(50% + var(--l)/2),
       100%  calc(50% + var(--l)/2),
       100% 100%,0 100%);
  -webkit-appearance: none;
  appearance: none;
}
/* Firefox */
input[type="range"]::-moz-range-thumb {
  height: var(--s);
  width: var(--s);
  background: none;
  border-radius: 50%;
  box-shadow: 0 0 0 var(--l) inset var(--c);
  -moz-appearance: none;
  appearance: none;
}

</style>
