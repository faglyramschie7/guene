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
  <div class="gn-h-full">
    <!-- type 1 -->
    <div class="gn-relative gn-w-[250px]">
      <!-- image -->
      <div class="gn-w-full gn-h-[250px] gn-overflow-hidden gn-z-10 gn-bg-black gn-rounded-xl gn-relative">
        <slot name="image" />
        <div class="gn-absolute gn-px-1 gn-py-1 gn-top-0 gn-left-0 gn-z-1 gn-w-full">
          <slot name="callout-top-left"/>
        </div>
      </div>
      <!-- body -->

      <div class="gn-w-full gn-relative gn-h-[150px] gn-bg-gray-950 gn-z-1 gn-mt-[-20px] gn-rounded-xl gn-text-white gn-pt-[25px] gn-px-2">
        <div>
          <slot name="title"/>
        </div>
        <div>
          <slot name="subtitle" />
        </div>
        <div>
          <slot name="description"/>
        </div>
        <div class="gn-w-full">
          <slot name="button" />
        </div>
      </div>
      <!--- end of body -->

    </div>
  </div>
</template>
