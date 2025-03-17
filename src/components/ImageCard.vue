<script setup>
const props = defineProps({
    id: String,
    title: String
});

</script>

<template>
    <div class="bg-white rounded-lg border-2 border-gray-300">
        <canvas :id="props.id" class="w-full h-full rounded-md"></canvas>
        <div class="flex justify-center items-center pb-2 pt-1">
            <h2 class="text-md font-semibold">{{ props.title }}</h2>
        </div>
    </div>
</template>