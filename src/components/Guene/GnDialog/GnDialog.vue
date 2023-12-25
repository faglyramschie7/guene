<script lang="ts" setup>
import {ref} from "vue"

const dialog = ref<HTMLDialogElement>()

const visible = ref(false);

const showDialog = () => {
  dialog.value?.showModal();
  visible.value = true;
}

defineExpose({
  show: showDialog,
  close: (returnVal?: string):void => dialog.value?.close(returnVal),
  visible
})


</script>



<template>
  <Teleport to="body">
    <dialog ref="dialog" @close="visible = false">
      <form method="dialog" v-if="visible">
        <slot name="body"></slot>
      </form>
    </dialog>
  </Teleport>
</template>
