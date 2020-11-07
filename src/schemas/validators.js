// eslint-disable-next-line no-useless-escape
const isUrl = (val) => val.match(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/gi);

const schemaValidator = (schema, value, message) => {
  const errors = schema.validate(value);
  const valid = errors.length === 0;
  if (!valid) {
    console.error(message, errors);
  }
  return valid;
};

export default {
  isUrl,
  schemaValidator,
};
