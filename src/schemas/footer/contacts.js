import Schema from 'validate';

const contacts = new Schema({
  title: {
    type: String,
    required: true,
  },
  data: [{
    title: {
      type: String,
      required: true,
    },
    data: [{
      iconClass: {
        type: String,
      },
      name: {
        type: String,
        required: true,
      },
      url: {
        type: String,
        required: true,
      },
    }],
  }],
});

export default contacts;
