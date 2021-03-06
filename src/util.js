const isNumeric = (str) => {
  if (typeof str != "string") return false; // we only process strings!
  return (
    !isNaN(str) && // use type coercion to parse the _entirety_ of the string (`parseFloat` alone does not do this)...
    !isNaN(parseFloat(str))
  ); // ...and ensure strings of whitespace fail
};

const validAmount = (amount) => {
  if (!isNumeric(amount)) {
    return false;
  } else {
    if (amount < 0 || amount > 1000000) return false;
  }
  return true;
};

const validPhone = (phone) =>
  phone.match(/^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g);

export const foramValidation = (amount, phone) => {
  let message = null;

  if (phone !== null && !validPhone(phone)) {
    message = "Invalid phone number";
  } else if (!validAmount(amount)) {
    message = "Invalid amount";
  }

  return message;
};
