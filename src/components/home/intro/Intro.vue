<template src="./Intro.html"></template>
<style scoped lang="sass" src="./Intro.sass"></style>
<script>
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import content from '@/services/data/content-service';

const { home } = content;
const { intro } = home;
const { slides } = intro;

export default {
  name: 'Intro',
  components: {
    Splide,
    SplideSlide,
  },
  data() {
    return {
      options: {
        rewind: true,
        perPage: 1,
        gap: '1rem',
        cover: true,
      },
      slides,
      publicPath: process.env.BASE_URL,
    };
  },
  methods: {
    image(url) {
      return `${this.publicPath}${url}`;
    },
  },

};
</script>
