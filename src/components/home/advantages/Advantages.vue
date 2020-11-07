<template src="./Advantages.html"></template>
<style scoped lang="sass" src="./Advantages.sass"></style>
<script>
import content from '@/services/data/content-service';

const { home } = content;
const { advantages } = home;
const { title, items } = advantages;
export default {
  name: 'Advantages',
  data() {
    return {
      title,
      items,
    };
  },
};
</script>
