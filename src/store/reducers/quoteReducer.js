import { GET_QUOTE, QUOTE_ERROR } from "../types";

const initialState = {
  loading: true,
};

const quoteReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_QUOTE:
      return {
        ...state,
        ...action.payload,
        loading: false,
      };
    case QUOTE_ERROR:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default quoteReducer;
