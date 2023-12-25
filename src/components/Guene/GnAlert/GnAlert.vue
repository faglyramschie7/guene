<script setup>
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

const alertClass = computed(() =>{
  return cva("gn-px-5 gn-py-4 gn-relative",{
    variants: {
      intent: {
        primary: "gn-bg-[#094ED7] gn-border-l-4 gn-border-[#000000] gn-border-opacity-20 gn-text-white"
      },
      rounded: {
        xl: "gn-rounded-xl",
        lg: "gn-rounded-lg",
        sm: "gn-rounded-sm",

      }
    }
  })({
      intent: props.intent,
      rounded: props.rounded
    })
})


</script>

<template>
  <div :class="[cn(alertClass),gnClass]">
    <div class="gn-absolute gn-text-white gn-top-0 gn-right-0 gn-mr-3 gn-mt-2 gn-z-30 gn-w-5 gn-h-5">
      <svg fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
       <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path>
      </svg>
    </div>
    <div class="gn-text-lg gn-font-bold gn-py-1">
      <slot name="header">
      </slot>
    </div>
    <div class="gn-py-1">
      <slot name="body">
      </slot>
    </div>
    <div class="gn-w-full gn-py-1">
      <slot name="footer"></slot>
    </div>
  </div>
</template>
