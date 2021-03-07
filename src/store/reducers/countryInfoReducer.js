import { GET_COUNTRY_INFO, GET_COUNTRY_INFO_ERROR } from "../types";

//
const initialState = {
  loading: true,
  currencyInfo: {},
  dialCode: [],
};

const countryInfoReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COUNTRY_INFO:
      return {
        ...state,
        currencyInfo: { ...action.payload.currencyInfo },
        dialCode: [...action.payload.dialCode],
        loading: false,
      };

    case GET_COUNTRY_INFO_ERROR:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default countryInfoReducer;
