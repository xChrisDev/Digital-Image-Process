<script setup>
import ImageCard from './ImageCard.vue';
import { InputText, Slider, Card, ToggleSwitch } from 'primevue';
import { setThreshold } from '../services/ImageHandler';
import { ref } from 'vue';

const value = ref(128);
const checked = ref(false);

const handleSlider = () => {
    if (checked.value) {
        const canvas_og = document.getElementById("ctx-og");
        const canvas_gray = document.getElementById("ctx-gs");
        const ctx_gray = canvas_gray.getContext("2d", { willReadFrequently: true });
        const canvas_bin = document.getElementById("ctx-bin");
        const ctx_bin = canvas_bin.getContext("2d", { willReadFrequently: true });

        canvas_bin.width = canvas_og.width;
        canvas_bin.height = canvas_og.height;

        let data = ctx_gray.getImageData(0, 0, canvas_og.width, canvas_og.height).data;

        for (let i = 0; i < data.length; i += 4) {
            let pixelValue = data[i] > value.value ? 255 : 0;
            data[i] = pixelValue;
            data[i + 1] = pixelValue;
            data[i + 2] = pixelValue;
        }

        let binarizeImageData = new ImageData(data, canvas_og.width, canvas_og.height);
        ctx_bin.putImageData(binarizeImageData, 0, 0);
    } else {
        setThreshold(value.value);
    }
};
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
            <div class="grid lg:grid-cols-3 md:grid-cols-1 gap-8">
                <ImageCard id="ctx-og" title="Original" />
                <ImageCard id="ctx-gs" title="Grayscale" />
                <ImageCard id="ctx-bin" title="Binarized" />
            </div>
            <div class="mt-10">
                <h2 class="mb-2 font-bold text-xl">Binarization threshold</h2>
                <div class="flex items-center gap-4">
                    <InputText v-model.number="value" class="w-14 text-center font-semibold" disabled />
                    <Slider v-model="value" class="w-full" :min="0" :max="255" @change="handleSlider" />
                    <div class="flex items-center gap-2">
                        <p class="font-medium text-sm text-end">SliderMode</p>
                        <div class="flex justify-center">
                            <ToggleSwitch v-model="checked" />
                        </div>
                    </div>
                </div>
            </div>
        </template>
    </Card>
</template>