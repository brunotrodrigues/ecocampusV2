<script setup>
  import { Nav, Footer } from 'vue-router'
</script>

<template>
  <div>
    <Nav />
    <Footer />
    <RouterView />
  </div>

  
</template>

<style>
@import "@/assets/base.css";
</style>
