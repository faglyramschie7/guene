<script setup lang="ts">
import SampleInputs from '../components/Guene/GnInput/SampleInputs.vue';
import SampleButtons from "../components/Guene/GnButton/SampleButtons.vue"
import SampleAlert from "../components/Guene/GnAlert/SampleAlert.vue"

import SampleCards from "../components/Guene/GnCard/SampleCards.vue"
import SampleSliders from "../components/Guene/GnSlider/SampleSliders.vue"
import SampleToasts from "../components/Guene/GnToast/SampleToasts.vue"

import SampleDialog from "../components/Guene/GnDialog/SampleDialog.vue"
import SampleSwitch from "../components/Guene/GnSwitch/SampleSwitch.vue"


import Logo from '../components/Logo.vue'
</script>

<template>
  <main class=" min-h-screen space-y-2 p-4">
    <Logo></Logo>
    <!--<SampleInputs>
    </SampleInputs>-->

    <SampleSwitch></SampleSwitch>
    <!-- <SampleDialog></SampleDialog>
    <SampleToasts></SampleToasts>
    <SampleSliders></SampleSliders>
    <SampleAlert></SampleAlert>
    <SampleCards></SampleCards>
    <SampleButtons></SampleButtons> -->
  </main>
</template>
