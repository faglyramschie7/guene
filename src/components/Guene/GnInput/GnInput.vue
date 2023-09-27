<template>
    <div class="gn-relative">
      <span :class="cn(stateMsgClass)">
        <span class="gn-text-red-700">
          <slot name="state-msg-danger"/>
        </span>
        <span class="gn-text-amber-500">
          <slot name="state-msg-warn"/>
        </span>
        <span class="gn-text-green-700">
          <slot name="state-msg-success"/>
        </span>
        <span class="gn-text-white">
          <slot name="state-msg-primary" />
        </span>
      </span>
      <div class="gn-w-full gn-p-5">
        <input class="gn-w-full gn-bg-slate-700 gn-rounded-xl gn-p-2 focus:gn-none gn-outline-none gn-border-none"/>
      </div>
    </div>
</template>

<script setup>
import { computed } from "vue"
import { cva } from "class-variance-authority"
import { cn } from "../lib/utils"

const props = defineProps({
  as: {
    type: [String, Object],
    default: 'input'
  },
  state: {
    type: String,
    validator: val => ["primary", "success", "danger", "warn", "dark"].includes(val),
    default: "primary"
  },
  stateMsgPosition: {
    type: String,
    validator: val => ["topRight", "bottomRight", "bottomLeft"].includes(val),
    default: "bottomLeft"
  },
  hover: {
    type: String,
    validator: val => ["scale", "translateTop"].includes(val),
    default: "translateTop"
  },
})


const stateMsgClass = computed(() => {
  return cva("gn-px-5 gn-absolute gn-text-xs", {
    variants: {
      stateMsgPosition: {
        topRight: 'gn-top-0 gn-right-0',
        bottomLeft: 'gn-bottom-0 gn-left-0',
        bottomRight: 'gn-bottom-0 gn-right-0'
      },
      state: {
        primary: 'gn-text-white',
        success: 'gn-text-green-700',
        danger: 'gn-text-red-700',
        warn: 'gn-text-amber-500'
      }
    }
  })({
    stateMsgPosition: props.stateMsgPosition,
    state: props.state
  })
})


</script>

<style scoped></style>
