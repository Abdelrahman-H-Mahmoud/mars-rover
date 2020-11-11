const validateString = (str) => {
  if (!str || typeof str !== "string")
    return false;
}

module.exports = validateString;