<template>
  <NavBar />
  <div class="wrapper">
    <div class="container">
      <router-view />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import NavBar from './components/NavBar.vue';
</script>

<style lang="scss" scoped>
.wrapper {
  width: 100%;
  padding: 16px;

  .container {
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
    background-color: white;
    border-radius: 8px;
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.3);
    overflow: hidden;
  }
}
</style>
