import {
  GET_QUOTE,
  QUOTE_ERROR,
  SET_LOADING_TRUE,
  USER_INPUT_INFO,
} from "../types";

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

    case SET_LOADING_TRUE:
      return {
        ...state,
        loading: true,
      };

    //store user-input data
    case USER_INPUT_INFO:
      return {
        ...state,
        ...action.payload,
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
