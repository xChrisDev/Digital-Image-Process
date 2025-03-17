<script setup>
import { Button, Card } from 'primevue';
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
                <Button class="w-full" label="Grayscale" severity="secondary" icon="pi pi-sun" iconPos="top"/>
                <Button class="w-full" label="Binarize" severity="contrast" icon="pi pi-sparkles" iconPos="top"/>
                <Button class="w-full" label="Graph" severity="danger" icon="pi pi-chart-line" iconPos="top"/>
            </div>
        </template>
    </Card>
</template>