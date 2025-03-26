const { Validator } = require("node-input-validator");

const AccountLogin = {
  email: "required|email",
  password: "required|string",
};

const AccountRegister = {
  username: "required|string",
  email: "required|email",
  password: "required|string",
  confirmPassword: "required|string",
};

const AccountCreate = {
  username: "required|string",
  email: "required|email",
  password: "required|string",
};

const AccountUpdate = {
  username: "string",
  email: "string",
  password: "string",
};

const validateAccount = async (data, schema) => {
  const validator = new Validator(data, schema);
  const result = await validator.check();

  if (!result) {
    throw {
      code: 422,
      error: validator.errors,
    };
  }
};

module.exports = {
  AccountCreate,
  AccountUpdate,
  validateAccount,
  AccountLogin,
  AccountRegister,
};
