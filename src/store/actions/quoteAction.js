import { GET_QUOTE, QUOTE_ERROR, USER_INPUT_INFO } from "../types";
import axios from "axios";
import { getQuoteUrl } from "../../api";
export const getQuote = (fromCurrency, toCurrency, amount) => async (
  dispatch
) => {
  try {
    const res = await axios.get(getQuoteUrl(fromCurrency, toCurrency, amount));
    dispatch({
      type: GET_QUOTE,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: QUOTE_ERROR,
      payload: error,
    });
  }
};

export const setUserInputInfo = (fromCurrency, toCurrency, amount) => (
  dispatch
) => {
  const userInputInfo = {
    fromCurrency: fromCurrency,
    toCurrency: toCurrency,
    amount: amount,
  };
  dispatch({
    type: USER_INPUT_INFO,
    payload: userInputInfo,
  });
};
