<script setup>
import AuthenticatedLayout from './layouts/AuthenticatedLayout.vue'
import { RouterView } from 'vue-router'
</script>

<template>
  <AuthenticatedLayout>
    <RouterView />
  </AuthenticatedLayout>
</template>


