<script setup lang="ts">
import SampleInputs from '../components/Guene/GnInput/SampleInputs.vue';
import SampleButtons from "../components/Guene/GnButton/SampleButtons.vue"
import SampleAlert from "../components/Guene/GnAlert/SampleAlert.vue"

import SampleCards from "../components/Guene/GnCard/SampleCards.vue"
import SampleSliders from "../components/Guene/GnSlider/SampleSliders.vue"
import SampleToasts from "../components/Guene/GnToast/SampleToasts.vue"

import SampleDialog from "../components/Guene/GnDialog/SampleDialog.vue"


import Logo from '../components/Logo.vue'
import { BeakerIcon } from '@heroicons/vue/24/solid'
</script>

<template>
  <main class="gn-bg-[#1B2127] gn-min-h-screen gn-space-y-2 gn-p-4">
    <Logo></Logo>
    <!--<SampleInputs>
    </SampleInputs>-->
    <SampleDialog></SampleDialog>
    <SampleToasts></SampleToasts>
    <SampleSliders></SampleSliders>
    <SampleAlert></SampleAlert>
    <SampleCards></SampleCards>
    <SampleButtons></SampleButtons>
  </main>
</template>
