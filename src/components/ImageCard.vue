<script setup>
import { Image } from 'primevue';
</script>

<template>
    <div
        class="lg:max-w-md md:max-w-sm bg-white rounded-2xl shadow-lg overflow-hidden transition-transform duration-300">
        <Image src="https://primefaces.org/cdn/primevue/images/galleria/galleria10.jpg" alt="Imagen" width="100%"
            preview />

        <div class="flex justify-center items-center pb-2">
            <h2 class="text-xl font-semibold text-gray-800">Título de la Imagen</h2>
        </div>
    </div>
</template>
