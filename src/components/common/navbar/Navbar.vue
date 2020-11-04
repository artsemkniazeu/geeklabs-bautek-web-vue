<template src="./Navbar.html"></template>
<style scoped lang="sass" src="./Navbar.sass"></style>
<script>
import content from '@/services/data/content-service';

const { navbar } = content;

export default {
  name: 'Navbar',
  data() {
    return {
      brand: navbar.brand,
    };
  },
};
</script>
