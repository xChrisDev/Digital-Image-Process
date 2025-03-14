<script setup>
import ImageCard from './ImageCard.vue';
import { Button, InputText, Slider } from 'primevue';
import { ref } from 'vue';

const value = ref(0);
</script>

<template>
    <section>
        <div class="grid grid-cols-3">
            <div class="flex flex-col">
                <ImageCard />
            </div>
            <div class="flex flex-col">
                <ImageCard />
                <div class="flex justify-center mt-4">
                    <Button label="Grayscale" severity="secondary"  icon="pi pi-sun" />
                </div>
            </div>
            <div class="flex flex-col items-center">
                <ImageCard />
                <div class="flex gap-6 justify-center mt-4">
                    <div class="flex items-center gap-6">
                        <InputText v-model.number="value" class="w-11 text-center" disabled />
                        <Slider v-model="value" class="w-52" :min="0" :max="255" />
                    </div>
                    <Button label="Binarize" severity="contrast" icon="pi pi-sparkles" />
                </div>
            </div>
        </div>
    </section>
</template>