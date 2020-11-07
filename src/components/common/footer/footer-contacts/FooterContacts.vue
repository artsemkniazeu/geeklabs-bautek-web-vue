<template src="./FooterContacts.html"></template>
<style scoped lang="sass" src="./FooterContacts.sass"></style>
<script>
import contactsSchema from '@/schemas/footer/contacts';
import validators from '@/schemas/validators';

export default {
  name: 'FooterContacts',
  props: {
    contacts: {
      type: Object,
      validator(value) {
        return validators.schemaValidator(contactsSchema, value, 'FooterContacts.vue prop contacts invalid');
      },
    },
  },
};
</script>
