<template src="./Gallery.html"></template>
<style scoped lang="sass" src="./Gallery.sass"></style>
<script>
import content from '@/services/data/content-service';

const { home } = content;
const { gallery } = home;
const { title, items } = gallery;

export default {
  name: 'Gallery',
  data() {
    return {
      title,
      items,
    };
  },
};
</script>
