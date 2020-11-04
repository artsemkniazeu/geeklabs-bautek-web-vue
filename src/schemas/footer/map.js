import Schema from 'validate';

import validators from '@/schemas/validators';

const { isUrl } = validators;

const map = new Schema({
  url: {
    type: String,
    required: true,
    use: {
      isUrl,
    },
  },
});

export default map;
