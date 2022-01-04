<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import Header from './components/Header.vue';
import Content from './components/Content.vue';

</script>

<template>
  <Header/>
  <Content/>
</template>

<style>
*, *::before, *::after{
  margin: 0;
  padding:0;
  outline: none;
  border: none
}

#app{
  font-family: 'Nunito Sans', sans-serif;
  min-height: 100vh;
}
</style>
