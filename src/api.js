//ofx api
export const getQuoteUrl = (fromCurrency, toCurrency, amount) =>
  `https://api.ofx.com/PublicSite.ApiService/OFX/spotrate/Individual/${fromCurrency}/${toCurrency}/${amount}?format=json`;

//api to get currency info
export const getCurrencyInfo = () =>
  `https://gist.githubusercontent.com/Fluidbyte/2973986/raw/8bb35718d0c90fdacb388961c98b8d56abc392c9/Common-Currency.json`;

//api to get dialcode info
export const getCountryDialCode = () =>
  `https://gist.githubusercontent.com/Goles/3196253/raw/9ca4e7e62ea5ad935bb3580dc0a07d9df033b451/CountryCodes.json`;
