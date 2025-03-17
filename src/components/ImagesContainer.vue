<script setup>
import ImageCard from './ImageCard.vue';
import { InputText, Slider, Card } from 'primevue';
import { ref } from 'vue';

const value = ref(0);
</script>

<template>
    <Card>
        <template #title>
            Images
        </template>
        <template #subtitle>
            This section shows the results after the operations with the images.
        </template>
        <template #content>
            <div class="grid lg:grid-cols-3 md:grid-cols-1 gap-3">
                <ImageCard id="ctx-og" title="Original" />
                <ImageCard id="ctx-gs" title="Grayscale" />
                <ImageCard id="ctx-bin" title="Binarized" />
            </div>
            <div class="mt-6">
                <h2 class="mb-2 font-bold text-xl">Binarization threshold</h2>
                <div class="flex items-center gap-4">
                    <InputText v-model.number="value" class="w-14 text-center font-semibold" disabled />
                    <Slider v-model="value" class="w-full" :min="0" :max="255" />
                </div>
            </div>
        </template>
    </Card>
</template>