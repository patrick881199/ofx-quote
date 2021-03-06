import { combineReducers } from "redux";
import quoteReducer from "./quoteReducer";
import countryInfoReducer from "./countryInfoReducer";

export default combineReducers({
  quoteInfo: quoteReducer,
  countryInfo: countryInfoReducer,
});
