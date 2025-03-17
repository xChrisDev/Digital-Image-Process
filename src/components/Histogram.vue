<script setup>
import { Card } from 'primevue';
</script>

<template>
    <Card>
        <template #title>
            Histogram
        </template>
        <template #subtitle>
            This section shows the histogram of the color variability found in the grayscale image.
        </template>
        <template #content>
            <div class="relative w-full h-[400px]">
                <canvas class="w-full h-full" id="histogram"></canvas>
            </div>
        </template>
    </Card>
</template>
