import { GET_COUNTRY_INFO_ERROR, GET_COUNTRY_INFO } from "../types";
import axios from "axios";
import { getCurrencyInfo, getCountryDialCode } from "../../api";

//calling two api to get currency and dial code info
export const getCurrency = () => async (dispatch) => {
  try {
    const currencyInfo = await axios.get(getCurrencyInfo());

    const dialCode = await axios.get(getCountryDialCode());

    const result = { currencyInfo: currencyInfo.data, dialCode: dialCode.data };

    dispatch({
      type: GET_COUNTRY_INFO,
      payload: result,
    });
  } catch (error) {
    dispatch({
      type: GET_COUNTRY_INFO_ERROR,
      payload: error,
    });
  }
};
