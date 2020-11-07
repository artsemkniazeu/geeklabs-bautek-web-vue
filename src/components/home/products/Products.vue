<template src="./Products.html"></template>
<style scoped lang="sass" src="./Products.sass"></style>
<script>
import content from '@/services/data/content-service';

const { home } = content;
const { products } = home;
const { title, items } = products;
export default {
  name: 'Products',
  data() {
    return {
      title,
      items,
      publicPath: process.env.BASE_URL,
    };
  },
  methods: {
    image(url) {
      return `${this.publicPath}${url}`;
    },
    getUrl(tag) {
      return `/products/${tag}`;
    },
  },
};
</script>
