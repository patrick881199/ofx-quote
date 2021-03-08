//check whether input amount is numeric
const isNumeric = (str) => {
  if (typeof str != "string") return false;
  return !isNaN(str) && !isNaN(parseFloat(str));
};

const validAmount = (amount) => {
  if (!isNumeric(amount)) {
    return false;
  } else {
    if (amount < 0 || amount > 1000000000) return false;
  }
  return true;
};

const validPhone = (phone) =>
  phone.match(/^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s/0-9]*$/g); //eslint-disable-line

export const foramValidation = (amount, phone, fromCurrency, toCurrency) => {
  let message = null;

  if (phone.length > 0 && !validPhone(phone)) {
    message = "Invalid phone number";
  } else if (fromCurrency === toCurrency) {
    message = "Please pick different currency";
  } else if (!validAmount(amount)) {
    message = "Invalid amount";
  }

  return message;
};
