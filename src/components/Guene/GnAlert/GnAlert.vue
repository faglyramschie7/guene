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
  return cva("px-5 py-4 relative",{
    variants: {
      intent: {
        primary: "bg-[#094ED7] border-l-4 border-[#000000] border-opacity-20 text-white"
      },
      rounded: {
        xl: "rounded-xl",
        lg: "rounded-lg",
        sm: "rounded-sm",

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
    <div class="absolute text-white top-0 right-0 mr-3 mt-2 z-30 w-5 h-5">
      <svg fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
       <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path>
      </svg>
    </div>
    <div class="text-lg font-bold py-1">
      <slot name="header">
      </slot>
    </div>
    <div class="py-1">
      <slot name="body">
      </slot>
    </div>
    <div class="w-full py-1">
      <slot name="footer"></slot>
    </div>
  </div>
</template>
