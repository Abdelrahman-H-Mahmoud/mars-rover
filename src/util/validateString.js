/**
 * 
 * @param {string} str
 * @returns {boolean} if the string is valid
 */
const validateString = (str) => {
  if (!str || typeof str !== "string")
    return false;
  let strRegex = new RegExp("^[FBLR]+$", "i");
  return strRegex.test(str);
}

module.exports = validateString;