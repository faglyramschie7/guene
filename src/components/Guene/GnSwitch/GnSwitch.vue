<template>
    <div class="flex justify-center">
        <div class="w-full flex justify-center my-2">
            <div class="bg-dark relative rounded-full cursor-pointer min-w-80 w-80 h-8 px-1 
             " @click="toggleSwitch()">
                <!-- <div class="absolute top-0 -left-[100%] w-[200%] h-8 bg-primary flex justify-center items-center transition-all duration-500 ease-in-out"
                    :class="is_active ? '-translate-x-[0%]' : '-translate-x-[100%]'">
                </div> -->
                <div class="transition-all duration-500 ease-in-out h-auto items-center flex relative text-white"
                    :class="is_active ? '-translate-x-[0%]' : '-translate-x-[100%]'">

                    <div class="absolute top-0 w-full h-8 flex justify-center items-center bg-green-500 bg-opacity-50">
                        On
                    </div>

                    <div class="absolute top-0 left-[100%]
                         -translate-x-[50%] h-8 w-5 z-10 flex items-center ">
                        <div class="w-5 h-5 rounded-full bg-slate-50">
                        </div>
                    </div>
                    <div class="absolute top-0 w-full h-8 left-[100%] flex justify-center items-center bg-red-500 bg-opacity-50">
                        Off
                    </div>

                </div>
            </div>
        </div>

    </div>
</template>

<script setup lang="ts">
import { ref } from "vue"

const is_active = ref(false)


const toggleSwitch = () => {
    if (is_active.value) {
        is_active.value = false
    } else {
        is_active.value = true
    }
}
</script>

<style scoped></style>