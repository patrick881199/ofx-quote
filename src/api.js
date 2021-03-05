export const getQuoteUrl = (fromCurrency, toCurrency, amount) =>
  `https://api.ofx.com/PublicSite.ApiService/OFX/spotrate/Individual/${fromCurrency}/${toCurrency}/${amount}?format=json`;
