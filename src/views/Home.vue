<template>
  <default-layout>
    <div class="home">
      <img alt="Vue logo" src="../assets/logo.png" />
      <HelloWorld msg="Welcome to Your Vue.js App" />
    </div>
    <span>ABC</span>
  </default-layout>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue';
import DefaultLayout from '@/layouts/default';

export default {
  name: 'Home',
  components: {
    HelloWorld,
    DefaultLayout,
  },
};
</script>
