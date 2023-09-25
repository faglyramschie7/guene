<script setup>
import { computed } from "vue"
import { cva } from "class-variance-authority"
import { cn } from "../lib/utils"
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
    }

});


const buttonClass = computed(() => {
    return cva("gn-inline-flex gn-items-center gn-justify-center  gn-text-sm gn-rounded-xl gn-min-h-[32px] gn-px-3 gn-py-0.5 gn-transition gn-transform gn-ease-in-out gn-duration-300   ", {
        variants: {
            intent: {
            },
        },
        compoundVariants: [
            // primary
            {
                intent: "primary",
                type: 'default',
                class: 'gn-bg-[#094ED7] gn-text-white hover:gn--translate-y-[10%] hover:gn-shadow-[rgba(0,_84,_255,_0.6)_0px_17px_12px_-11px]'
            },
            {
                intent: 'primary',
                type: 'flat',
                class: 'gn-text-[#094ED7] gn-bg-[#094ED7] gn-bg-opacity-20 hover:gn-shadow-none hover:gn-bg-opacity-40'
            },
            {
                intent: "primary",
                type: 'border',
                class: 'gn-bg-none gn-text-[#094ED7] gn-border gn-border-[#094ED7] hover:gn-bg-[#094ED7] hover:gn-bg-opacity-40'
            },
            // success
            {
                intent: "success",
                type: 'default',
                class: 'gn-bg-green-700 gn-text-white hover:gn--translate-y-[10%] hover:gn-shadow-[rgba(77,_124,_15,_0.6)_0px_17px_12px_-11px]'
            },
            {
                intent: 'success',
                type: 'flat',
                class: 'gn-text-green-700 gn-bg-green-700 gn-bg-opacity-20 hover:gn-shadow-none hover:gn-bg-opacity-40'
            },
            {
                intent: "success",
                type: 'border',
                class: 'gn-bg-none gn-text-green-700 gn-border gn-border-green-700 hover:gn-bg-green-700 hover:gn-bg-opacity-40'
            },
            // danger
            {
                intent: "danger",
                type: 'default',
                class: 'gn-bg-red-700 gn-text-white hover:gn--translate-y-[10%] hover:gn-shadow-[rgba(185,_28,_28,_0.6)_0px_17px_12px_-11px]'
            },
            {
                intent: 'danger',
                type: 'flat',
                class: 'gn-text-red-700 gn-bg-red-700 gn-bg-opacity-20 hover:gn-shadow-none hover:gn-bg-opacity-40'
            },
            {
                intent: "danger",
                type: 'border',
                class: 'gn-bg-none gn-text-red-700 gn-border gn-border-red-700 hover:gn-bg-red-700 hover:gn-bg-opacity-40'
            },
            // warn
            {
                intent: "warn",
                type: 'default',
                class: 'gn-bg-amber-500 gn-text-white hover:gn--translate-y-[10%] hover:gn-shadow-[rgba(245,_158,_11,_0.6)_0px_17px_12px_-11px]'
            },
            {
                intent: 'warn',
                type: 'flat',
                class: 'gn-text-amber-500 gn-bg-amber-500 gn-bg-opacity-20 hover:gn-shadow-none hover:gn-bg-opacity-40'
            },
            {
                intent: "warn",
                type: 'border',
                class: 'gn-bg-none gn-text-amber-500 gn-border gn-border-amber-500 hover:gn-bg-amber-500 hover:gn-bg-opacity-40'
            },
            // dark
            {
                intent: "dark",
                type: 'default',
                class: 'gn-bg-slate-950 gn-text-slate-400 hover:gn--translate-y-[10%] hover:gn-shadow-[rgba(2,_6,_23,_0.6)_0px_17px_12px_-11px]'
            },
            {
                intent: 'dark',
                type: 'flat',
                class: 'gn-text-slate-400 gn-bg-slate-950 gn-bg-opacity-20 hover:gn-shadow-none hover:gn-bg-opacity-40'
            },
            {
                intent: "dark",
                type: 'border',
                class: 'gn-bg-none gn-text-slate-400 gn-border gn-border-slate-950 hover:gn-bg-slate-950 hover:gn-bg-opacity-40'
            },
        ]
    })({
        intent: props.intent,
        type: props.type
    })
})
</script>

<template>
    <component :is="props.as" :class="cn(buttonClass)" class="gn-w-32">


        <!-- loaders -->
        <svg v-if="props.loading" class="gn-animate-spin gn-h-5 gn-w-5 gn-absolute" xmlns="http://www.w3.org/2000/svg"
            fill="none" viewBox="0 0 24 24">
            <circle class="gn-opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path class="gn-opacity-75" fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
            </path>
        </svg>

        <!-- left component -->
        <component :is="props.leftIcon" :class="['gn-w-5 gn-w-5 gn-mr-2', props.loading && 'gn-invisible']"
            v-if="!props.loading" />

        <!-- {{ $myPlugin.message }} -->

        <span :class="[props.loading && 'gn-invisible']">
            <slot />
        </span>
        <!-- right component -->

        <component :is="props.rightIcon" :class="['gn-w-5 gn-w-5 gn-ml-2', props.loading && 'gn-invisible']"
            v-if="!props.loading" />

    </component>
</template>