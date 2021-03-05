import { GET_QUOTE, QUOTE_ERROR } from "../types";
import axios from "axios";
import { getQuoteUrl } from "../../api";
const getQuote = (fromCurrency, toCurrency, amount) => async (dispatch) => {
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

export default getQuote;
