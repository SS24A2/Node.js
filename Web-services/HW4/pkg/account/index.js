const mongoose = require("mongoose");

const accountSchema = mongoose.Schema({
  username: String,
  email: String,
  password: String,
  numOfSuccessfulLogins:{
    type: Number, 
    min:0,
    default: 0
  },
  numOfFailedLogins:{
    type: Number, 
    min:0,
    default: 0
  },
});

const AccountsModel = mongoose.model("Account", accountSchema, "accounts");

const getAccounts = async () => {
  return await AccountsModel.find();
};


const getByEmail = async (email) => {
  return await AccountsModel.findOne({ email });
};

const createAccount = async (data) => {
  const newAccount = new AccountsModel(data);
  return await newAccount.save();
};

const updateAccount = async (_id, data) => {
  return await AccountsModel.updateOne({ _id }, data);
};

const removeAccount = async (_id) => {
  return await AccountsModel.deleteOne({ _id });
};

const updateNumOfSuccessfulLogins = async (email, newValue) => {
  return await AccountsModel.updateOne({email}, {$set:{numOfSuccessfulLogins:newValue}});
};
const updateNumOfFailedLogins = async (email, newValue) => {
  return await AccountsModel.updateOne({email}, {$set:{numOfFailedLogins:newValue}});
};

module.exports = {
  getAccounts,
  getByEmail,
  createAccount,
  updateAccount,
  removeAccount,
  updateNumOfSuccessfulLogins,
  updateNumOfFailedLogins,
};
