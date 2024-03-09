<template>
    <div>
        <div class="space-y-5">
            <div class="flex-wrap space-x-2">
                <GnButton loading>Primary</GnButton>
                <GnButton>Primary</GnButton>
                <GnButton type="flat">Flat</GnButton>
                <GnButton type="border">Border</GnButton>


            </div>
        </div>
        <div class="space-y-5">
            <div class="flex-wrap space-x-2">
                <GnButton loading intent="success" block>Success</GnButton>
                <GnButton intent="success">Success</GnButton>
                <GnButton intent="success" type="flat">Flat</GnButton>
                <GnButton intent="success" type="border">Border</GnButton>
            </div>
        </div>
        <div class="space-y-5">
            <div class="flex-wrap space-x-2">
                <GnButton loading intent="danger">Danger</GnButton>
                <GnButton intent="danger">Danger</GnButton>
                <GnButton intent="danger" type="flat">Flat</GnButton>
                <GnButton intent="danger" type="border">Border</GnButton>
            </div>
        </div>
        <div class="space-y-5">
            <div class="flex-wrap space-x-2">
                <GnButton loading intent="warn">Warn</GnButton>
                <GnButton intent="warn">Warn</GnButton>
                <GnButton intent="warn" type="flat">Flat</GnButton>
                <GnButton intent="warn" type="border">Border</GnButton>
            </div>
        </div>
        <div class="space-y-5">
            <div class="flex-wrap space-x-2">
                <GnButton loading intent="dark">Dark</GnButton>
                <GnButton intent="dark">Dark</GnButton>
                <GnButton intent="dark" type="flat">Flat</GnButton>
                <GnButton intent="dark" type="border">Border</GnButton>
            </div>
        </div>
    </div>
</template>

<script setup>
import GnButton from '@/components/Guene/GnButton/GnButton.vue';

</script>

<style lang="scss" scoped></style>
