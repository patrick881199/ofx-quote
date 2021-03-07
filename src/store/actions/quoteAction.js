import { GET_QUOTE, QUOTE_ERROR, USER_INPUT_INFO } from "../types";
import axios from "axios";
import { getQuoteUrl } from "../../api";

//calling ofx api
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

//no calling api
//just store the following three user-input info into store for showing in the result later
//because in the retuning api data, there are no following info(needed to show in the result)
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
