<script setup>
import { Button } from 'primevue';
</script>

<template>
    <section class="w-full flex justify-between p-4">
        <Button label="Upload Image" severity="info" size="small" />
        <div class="flex gap-2">
            <Button label="Grayscale" severity="secondary"  size="small"/>
            <Button label="Binarize Image" severity="contrast"  size="small"/>
            <Button label="Graph" severity="help" size="small" />
        </div>
    </section>
</template>