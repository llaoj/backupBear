<script setup>
import StickyNavbar from '../components/StickyNavbar.vue'
import Footer from '../components/Footer.vue';
</script>
<template>
    <div class="page">
        <StickyNavbar></StickyNavbar>
        <div class="page-wrapper">
            <slot></slot>
            <Footer></Footer>
        </div>
    </div>
</template>