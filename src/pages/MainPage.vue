<script setup>
import Histogram from '../components/Histogram.vue';
import ImagesContainer from '../components/ImagesContainer.vue';
import Navbar from '../components/Navbar.vue';
import Sidebar from '../components/Sidebar.vue';
</script>

<template>
    <div class="w-[80%]">
        <Navbar />
        <div class="flex mt-6 gap-4 flex-col lg:flex-row">
            <Sidebar class="w-full lg:w-1/4" />
            <ImagesContainer class="w-full" />
        </div>

        <Histogram class="my-4" />
    </div>
</template>