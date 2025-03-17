<script setup>
import { Button } from 'primevue';
import { drawOriginalImage } from '../services/ImageHandler';

const toggleDarkMode = () => {
    document.documentElement.classList.toggle('my-app-dark');
};

const handleFileSubmit = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith('image')) {
        const reader = new FileReader();
        reader.onload = function (e) {
            const url = e.target.result;
            drawOriginalImage(url);
        };
        reader.readAsDataURL(file);
    } else {
        console.error('El archivo seleccionado no es una imagen');
    }
};
</script>

<template>
    <nav class="flex justify-between mb-2 mt-6">
        <div class="flex items-center gap-2 px-2 bg-gradient-to-r from-blue-500 to-teal-400 text-white rounded-xl shadow-lg">
    <i class="pi pi-image" style="font-size: 28px;"></i>
    <span class="font-semibold text-xl pb-[4px]">ImagePro</span>
</div>

        <div class="flex gap-2">
            <div class="flex items-center">
                <label for="file-upload"
                    class="cursor-pointer bg-blue-400 hover:bg-blue-500 transition-colors duration-200 text-white font-semibold rounded-md py-2 px-4">
                    <i class="pi pi-upload me-2"></i>Upload
                </label>
                <input id="file-upload" type="file" accept="image/*" class="hidden" @change="handleFileSubmit" />
            </div>
            <Button icon="pi pi-moon" size="small" severity="contrast" @click="toggleDarkMode" />
        </div>
    </nav>
</template>
