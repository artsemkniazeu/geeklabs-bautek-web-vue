<template src="./Footer.html"></template>
<style scoped lang="sass" src="./Footer.sass"></style>
<script>
import content from '@/services/data/content-service';
import FooterContacts from '@/components/common/footer/footer-contacts/FooterContacts.vue';

const { footer } = content;

export default {
  name: 'Footer',
  components: {
    FooterContacts,
  },
  data() {
    return {
      contacts: footer.contacts,
      map: footer.map,
    };
  },
};
</script>
