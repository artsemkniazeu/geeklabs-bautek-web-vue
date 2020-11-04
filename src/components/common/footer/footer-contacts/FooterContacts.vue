<template src="./FooterContacts.html"></template>
<style scoped lang="sass" src="./FooterContacts.sass"></style>
<script>
import contactsSchema from '@/schemas/footer/contacts';

export default {
  name: 'FooterContacts',
  props: {
    contacts: {
      type: Object,
      validator(value) {
        const errors = contactsSchema.validate(value);
        const valid = errors.length === 0;
        console.log(value);
        if (!valid) {
          console.error('FooterContacts prop contacts', errors);
        }
        return valid;
      },
    },
  },
};
</script>
