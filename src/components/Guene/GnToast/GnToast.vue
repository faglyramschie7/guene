<script lang="ts" setup>
</script>

<template>
  <Teleport to="body">
   <div class="gn-absolute gn-top-0 gn-right-0 gn-min-w-[250px] gn-bg-slate-600 gn-text-white gn-rounded-lg gn-mx-2 gn-p-2">

    <div class="gn-relative">

    <!-- close -->
      <div class="gn-w-full gn-flex gn-items-center gn-justify-end">
        <div class="gn-w-5 gn-h-5">
          <svg fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </div>
      </div>
    <!-- header -->
      <div class="gn-w-full gn-text-lg gn-font-bold">
        <slot name="header"></slot>
      </div>
    <!-- body -->

      <div class="gn-w-full">
        <slot name="body"></slot>
      </div>
    <!-- footer -->

      <div class="gn-w-full">
        <slot name="footer"></slot>
      </div>





    </div>
   </div>
  </Teleport>
</template>
