<script setup>
import { computed } from "vue"
import { cva } from "class-variance-authority"
import { cn } from "../lib/utils"
import {useSlots} from "vue"
const props = defineProps({
    leftIcon: Object,
    rightIcon: Object,
    loading: Boolean,
    as: {
        type: [String, Object],
        default: "button"
    },
    gnClass: {
        type: String
    },
    intent: {
        type: String,
        validator: val => ["primary", "success", "danger", "warn", "dark"].includes(val),
        default: "primary"
    },
    type: {
        type: String,
        validator: val => ["default", "flat", "border", "text"].includes(val),
        default: "default"
    },
    block: {
        type: Boolean,
        default: false
    }

});
const slots = useSlots();

const returnButtonBlockClass = computed(() => {
  if(props.block) {
    return 'block'
  } else {
    return 'non_block'
  }
})


const buttonClass = computed(() => {
    return cva("inline-flex items-center justify-center  text-sm rounded-xl min-h-[32px] px-3 py-0.5 transition transform ease-in-out duration-300   ", {
        variants: {
            blocker: {
              block: 'w-full',
              non_block: 'w-32'
            }
        },
        compoundVariants: [
            // primary
            {
                intent: "primary",
                type: 'default',
                class: 'bg-[#094ED7] text-white hover:-translate-y-[10%] hover:shadow-[rgba(0,_84,_255,_0.6)_0px_17px_12px_-11px]'
            },
            {
                intent: 'primary',
                type: 'flat',
                class: 'text-[#094ED7] bg-[#094ED7] bg-opacity-20 hover:shadow-none hover:bg-opacity-40'
            },
            {
                intent: "primary",
                type: 'border',
                class: 'bg-none text-[#094ED7] border border-[#094ED7] hover:bg-[#094ED7] hover:bg-opacity-40'
            },
            // success
            {
                intent: "success",
                type: 'default',
                class: 'bg-green-700 text-white hover:-translate-y-[10%] hover:shadow-[rgba(77,_124,_15,_0.6)_0px_17px_12px_-11px]'
            },
            {
                intent: 'success',
                type: 'flat',
                class: 'text-green-700 bg-green-700 bg-opacity-20 hover:shadow-none hover:bg-opacity-40'
            },
            {
                intent: "success",
                type: 'border',
                class: 'bg-none text-green-700 border border-green-700 hover:bg-green-700 hover:bg-opacity-40'
            },
            // danger
            {
                intent: "danger",
                type: 'default',
                class: 'bg-red-700 text-white hover:-translate-y-[10%] hover:shadow-[rgba(185,_28,_28,_0.6)_0px_17px_12px_-11px]'
            },
            {
                intent: 'danger',
                type: 'flat',
                class: 'text-red-700 bg-red-700 bg-opacity-20 hover:shadow-none hover:bg-opacity-40'
            },
            {
                intent: "danger",
                type: 'border',
                class: 'bg-none text-red-700 border border-red-700 hover:bg-red-700 hover:bg-opacity-40'
            },
            // warn
            {
                intent: "warn",
                type: 'default',
                class: 'bg-amber-500 text-white hover:-translate-y-[10%] hover:shadow-[rgba(245,_158,_11,_0.6)_0px_17px_12px_-11px]'
            },
            {
                intent: 'warn',
                type: 'flat',
                class: 'text-amber-500 bg-amber-500 bg-opacity-20 hover:shadow-none hover:bg-opacity-40'
            },
            {
                intent: "warn",
                type: 'border',
                class: 'bg-none text-amber-500 border border-amber-500 hover:bg-amber-500 hover:bg-opacity-40'
            },
            // dark
            {
                intent: "dark",
                type: 'default',
                class: 'bg-slate-950 text-white hover:-translate-y-[10%] hover:shadow-[rgba(2,_6,_23,_0.6)_0px_17px_12px_-11px]'
            },
            {
                intent: 'dark',
                type: 'flat',
                class: 'text-white bg-slate-950 bg-opacity-20 hover:shadow-none hover:bg-opacity-40'
            },
            {
                intent: "dark",
                type: 'border',
                class: 'bg-none text-white border border-slate-950 hover:bg-slate-950 hover:bg-opacity-40'
            },
        ]
    })({
        intent: props.intent,
        type: props.type,
        blocker: returnButtonBlockClass
    })
})
</script>

<template>
    <component :is="props.as" :class="cn(buttonClass)">
    <!-- {{returnButtonBlockClass}} -->
        <!-- loaders -->
        <svg v-if="props.loading" class="animate-spin h-5 w-5 absolute" xmlns="http://www.w3.org/2000/svg"
            fill="none" viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path class="opacity-75" fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
            </path>
        </svg>

        <!-- left component -->
        <component :is="props.leftIcon" :class="['w-5 mr-2', props.loading && 'invisible']"
            v-if="!props.loading" />

        <!-- {{ $myPlugin.message }} -->

        <span :class="[props.loading && 'invisible']">
            <slot />
        </span>
        <!-- right component -->

        <component :is="props.rightIcon" :class="['w-5 ml-2', props.loading && 'invisible']"
            v-if="!props.loading" />

    </component>
</template>
