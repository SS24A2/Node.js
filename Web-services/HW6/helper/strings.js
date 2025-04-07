// Za da generirame ID za fajl

const makeId = (length) => {
  let result = "";
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charLength = characters.length;

  // result += "a"
  // result += "b"
  // result = "ab"

  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charLength));
  }

  return result;
};

module.exports = makeId;

// /user_1234/vangel.jpg
// /user_1234/vangel.jpg

// /user_1234/vangel_5axsCw.jpg
// /user_1234/vangel_c8OAAc.jpg

// /user_5678/vangel.jpg
