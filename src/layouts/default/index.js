import Default from '@/layouts/default/Default.vue';

export default {
  name: 'DefaultLayout',
  created() {
    this.$parent.$emit('update:layout', Default);
  },
  render() {
    return this.$slots.default[0];
  },
};
