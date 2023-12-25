<template>
  <div class="gn-font-poppins">
    <GnAlert rounded="xl" gnClass="gn-bg-gradient-to-tl gn-from-sky-500 gn-to-blue-600">
      <template #header>
        Welcome to Guene UI
      </template>
      <template #body>
          Guene is a framework for designers to easily make turn their ideas into reality in the snap of an eye..
      </template>
      <template #footer>
        <GnButton intent="dark" type="flat" :block="true">
          Close
        </GnButton>
      </template>
    </GnAlert>
  </div>
</template>

<script setup>
import GnAlert from "@/components/Guene/GnAlert/GnAlert.vue"
import GnButton from "@/components/Guene/GnButton/GnButton.vue"
</script>
