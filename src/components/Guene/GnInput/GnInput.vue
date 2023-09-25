<template>
    <div class="gn-w-full gn-py-5">
        <div class="gn-relative">
            <input type="text" v-model="input_value"
                :class="`gn-text-white gn-bg-slate-700 gn-rounded-xl gn-p-2 focus:gn-none gn-w-full focus:gn-scale-[${scale_length}] ${padding_left} gn-transition-all gn-duration-300 gn-outline-none gn-border-none`"
                @focus="is_Focused = true" @blur="is_Focused = false">
            <div
                :class="`gn-absolute gn-top-[50%] gn-left-[20px] gn-transform gn--translate-x-1/2 gn--translate-y-1/2 gn-w-[28px] gn-h-[28px] gn-rounded-md gn-flex gn-items-center gn-justify-center gn-text-white  gn-transition-all gn-duration-300 gn-p-2 gn-bg-slate-800/20 ${button_translate}`">
                <svg fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42">
                    </path>
                </svg>
            </div>
            <div
                :class="`gn-absolute gn-top-[50%] gn-left-[80px] gn-transform gn--translate-x-1/2 gn--translate-y-1/2  gn-transition-all gn-duration-300 gn-p-2 ${placeholder_translate}`">
                Label
            </div>
        </div>

        <p class="gn-text-red-600 gn-pl-[2] gn-text-xs gn-mt-2 gn-pl-5">
            State
        </p>
    </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
let scale_length = 1.01
let icons = ref(2)
let padding_left = icons.value !== 0 ? `gn-pl-[${icons.value * 25}px]` : `gn-pl-10`
let is_Focused = ref(false)
let input_value = ref('')
const button_translate = computed(() => {
    return is_Focused.value ? 'gn-bg-gray-800/100 gn--translate-y-[18px] gn--translate-x-1/2 gn-left-[5px] gn-scale-[1.3] gn-text-white gn-drop-shadow-md ' : ''
})

const placeholder_translate = computed(() => {
    return is_Focused.value ? 'gn-translate-y-[-55px]  gn-translate-x-[-85px] gn-text-white gn-drop-shadow-md gn-text-sm' : input_value.value.length > 0 ? 'gn-pl-5 gn-translate-y-[-55px]  gn-translate-x-[-85px] gn-text-white gn-drop-shadow-md gn-text-sm' : 'gn-text-gray-600'
})

</script>

<style scoped></style>