<template>
    <div class="logo">
        <RouterLink to="/dashboard">
           <img src="src\assets\images\logos\logo.svg" alt="logo" />
        </RouterLink>
    </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import { RouterLink } from 'vue-router';
const primary = ref('rgb(var(--v-theme-primary))');
const secondary = ref('rgb(var(--v-theme-secondary))');
</script>
