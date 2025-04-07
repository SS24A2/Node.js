const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");

const { getByEmail, createAccount } = require("../models/account");
const { AccountLogin, AccountRegister } = require("../models/account/validate");
const { getSection } = require("../pkg/config");
const validateSchema = require("../helper/validateSchema");

const login = async (req, res) => {
  try {
    await validateSchema(req.body, AccountLogin);
    const { email, password } = req.body;

    const account = await getByEmail(email);

    if (!account) {
      return res.status(404).send("Account not found!");
    }

    // account.password e hashiraniot password vo databazata
    if (!bcryptjs.compareSync(password, account.password)) {
      return res.status(400).send("Wrong password!");
    }

    const payload = {
      // vo pozadina ova e req.auth koga ke imame uspesno logiranje
      username: account.username,
      email: account.email,
      id: account._id,
      // new Date() - Od 1vi Januari 1970 Unix do denes 25ti Mart 2025 - go vrakja vremeto vo milisekundi
      // new Date() / 1000 -> Od 1vi Januari 1970 vo sekundi do denes 25ti Mart 2025
      // 7 * 24 * 60 * 60 -> 7 denovi po 24 chasa po 60 minuti po 60 sekundi
      // Zbirot od sekundite od 1vi Januari 1970 do denes 2025 Mart ke se soberat so 7 denovi presmetani vo sekundi
      exp: new Date() / 1000 + 7 * 24 * 60 * 60,
      // exp ke bide 7 denovi vo idnina odkako sme se logirale
    };

    // payload e dostapno vo sekoj request vo req.auth
    // req.auth.username, req.auth.email itn

    // Tokenot spored ovoj payload ke trae 7 denovi od logiranje na korisnikot
    const token = jwt.sign(payload, getSection("development").jwt_secret);
    // ovoj del ke bide biten koga ke go napravime infrastrukturniot kod

    return res.status(200).send({ token });
  } catch (err) {
    console.log(err);
    return res.status(500).send("Invalid Server Error!");
  }
};

const register = async (req, res) => {
  try {
    await validateSchema(req.body, AccountRegister);
    const { username, email, password, confirmPassword } = req.body;

    const userExists = await getByEmail(email);

    if (userExists) {
      return res.status(400).send("Account with this email already exists!");
    }

    if (password !== confirmPassword) {
      return res.status(400).send("Passwords do not match!");
    }

    const data = {
      username,
      email,
      password: bcryptjs.hashSync(password),
    };

    const account = await createAccount(data);
    return res.status(200).send(account);
  } catch (err) {
    console.log(err);
    return res.status(500).send("Invalid Server Error!");
  }
};

module.exports = {
  login,
  register,
};
