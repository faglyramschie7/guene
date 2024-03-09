<template>
  <div :class="cn(msgClass)">
    <slot />
    hello
  </div>
</template>

<script setup>
import {computed} from "vue"
import {cva} from "class-variance-authority"
import {cn} from "../lib/utils"
const props = defineProps({
  position: {
    type: String,
    validator: val => ['topRight', 'bottomRight', 'bottomLeft'].includes(val),
    default: 'bottomLeft'
  }
})

const msgClass = computed(() => {
  return cva("", {
    variants: {
      position: {
        topRight: 'top-0 right-0',
        bottomLeft: 'bottom-0 left-0',
        bottomRight: 'bottom-0 right-0'

      }
    }
  })({
      position: props.position
  })
})

</script>
