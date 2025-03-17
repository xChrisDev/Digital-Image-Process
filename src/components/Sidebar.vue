<script setup>
import { Button, Card } from 'primevue';
import { onMounted } from 'vue';
import { drawGrayScaleImage, drawBinarizedImage, graphHistogram } from '../services/ImageHandler';

onMounted(() => {
    document.getElementById('gray').disabled = true
    document.getElementById('binary').disabled = true
    document.getElementById('graph').disabled = true
})
</script>

<template>
    <Card>
        <template #title>
            Options
        </template>
        <template #subtitle>
            Select the operation you want to perform on the selected image.
        </template>
        <template #content>
            <div class="flex flex-wrap gap-2">
                <Button class="w-full" id="gray" label="Grayscale" severity="primary" icon="pi pi-sun"
                    @click="drawGrayScaleImage" />
                <Button class="w-full" id="binary" label="Binarize" severity="contrast" icon="pi pi-sparkles"
                    @click="drawBinarizedImage" />
                <Button class="w-full" id="graph" label="Graph" severity="danger" icon="pi pi-chart-line"
                    @click="graphHistogram" />
            </div>
        </template>
    </Card>
</template>