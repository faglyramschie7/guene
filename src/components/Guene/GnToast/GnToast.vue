<script lang="ts" setup>
</script>

<template>
  <Teleport to="body">
   <div class="absolute top-0 right-0 min-w-[250px] bg-slate-600 text-white rounded-lg mx-2 p-2">

    <div class="relative">

    <!-- close -->
      <div class="w-full flex items-center justify-end">
        <div class="w-5 h-5">
          <svg fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </div>
      </div>
    <!-- header -->
      <div class="w-full text-lg font-bold">
        <slot name="header"></slot>
      </div>
    <!-- body -->

      <div class="w-full">
        <slot name="body"></slot>
      </div>
    <!-- footer -->

      <div class="w-full">
        <slot name="footer"></slot>
      </div>





    </div>
   </div>
  </Teleport>
</template>
