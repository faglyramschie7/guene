<script lang="ts" setup>
import {computed} from "vue"
import {cva} from "class-variance-authority"
import {cn} from "../lib/utils"

const props = defineProps({
  gnClass: {
    type: String
  },
  size: {
    type: String,
    default: "md"
  }
})


</script>

<template>
  <div class="h-full">
    <!-- type 1 -->
    <div class="relative w-[250px]">
      <!-- image -->
      <div class="w-full h-[250px] overflow-hidden z-10 bg-black rounded-xl relative">
        <slot name="image" />
        <div class="absolute px-1 py-1 top-0 left-0 z-1 w-full">
          <slot name="callout-top-left"/>
        </div>
      </div>
      <!-- body -->

      <div class="w-full relative h-[150px] bg-gray-950 z-1 mt-[-20px] rounded-xl text-white pt-[25px] px-2">
        <div>
          <slot name="title"/>
        </div>
        <div>
          <slot name="subtitle" />
        </div>
        <div>
          <slot name="description"/>
        </div>
        <div class="w-full">
          <slot name="button" />
        </div>
      </div>
      <!--- end of body -->

    </div>
  </div>
</template>
