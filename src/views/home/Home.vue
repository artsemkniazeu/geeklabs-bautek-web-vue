<template src="./Home.html"></template>
<style scoped lang="sass" src="./Home.sass"></style>
<script>
import DefaultLayout from '@/layouts/default';
import Intro from '@/components/home/intro/Intro.vue';
import Products from '@/components/home/products/Products.vue';
import Advantages from '@/components/home/advantages/Advantages.vue';
import Gallery from '@/components/home/gallery/Gallery.vue';

export default {
  name: 'Home',
  components: {
    DefaultLayout,
    Intro,
    Products,
    Advantages,
    Gallery,
  },
};
</script>
