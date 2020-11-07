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
      fullPath: '',
      hash: '',
    };
  },
  mounted() {
    this.fullPath = this.$route.fullPath;
    this.hash = this.$route.hash;
  },
  watch: {
    $route(to) {
      this.fullPath = to.fullPath;
      this.hash = this.$route.hash;
    },
  },
};
</script>
