<template src="./Goods.html"></template>
<style scoped lang="sass" src="./Goods.sass"></style>
<script>
import content from '@/services/data/content-service';

const { goods } = content;

export default {
  name: 'Goods',
  data() {
    return {
      selectedChip: null,
      chips: [],
      items: [],
    };
  },
  mounted() {
    this.items = [];
    this.chips = goods.map(({ title, tag }) => ({
      id: tag,
      name: title,
    }));
    if (this.$route.params.tag) {
      this.selectedChip = this.chips.find((chip) => chip.id === this.$route.params.tag) || null;
    }
  },
  methods: {
    selectChip(chip) {
      this.selectedChip = chip || null;
      this.$router.push({ path: '', params: { tag: chip.id } });
    },

  },
  computed: {
    itemsFiltered() {
      const goodsFilter = (good) => (
        (this.selectedChip && this.selectedChip.id === good.tag) || (!this.selectedChip)
      );
      const items = goods.filter(goodsFilter)
        .map((good) => good.items)
        .reduce((prev, current) => [...prev, ...current]);
      return items;
    },
  },
};
</script>
