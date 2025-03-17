<script setup>
import { Button } from 'primevue';


const toggleDarkMode = () => {
    document.documentElement.classList.toggle('my-app-dark');
}

</script>

<template>
    <nav class="flex justify-between mb-2 mt-6">
        <div class="flex items-center gap-1 px-2">
            <i class="pi pi-image" style="font-size: 20px;"></i>
            <span class="font-medium text-lg">I-Pro</span>
        </div>
        <div class="flex gap-2">
            <Button label="Upload" severity="info" size="small" icon="pi pi-upload" />
            <Button icon="pi pi-moon" size="small" severity="contrast" @click="toggleDarkMode" />
        </div>
    </nav>
</template>