<script setup>
const props = defineProps({
    id: String,
    title: String
})
</script>

<template>
    <div class="bg-white rounded-lg border-2 border-gray-200">
        <canvas class="w-full" :id="props.id"></canvas>
        <div class="flex justify-center items-center pb-2">
            <h2 class="text-md font-semibold text-gray-800">{{ props.title }}</h2>
        </div>
    </div>
</template>
