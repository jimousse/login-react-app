const validateEmail = (value) => {
  const regexEmail =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  return value.trim().match(regexEmail);
};

const validatePassword = (value) => {
  return value.trim().length > 6;
};

export { validateEmail, validatePassword };
