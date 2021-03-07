import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

//Get the currency info(get from api) fro redux store
const CurrencyDropDownMenu = ({
  defaultValue,
  onChangeHandler,
  content,
  required,
}) => {
  //get dialcode info from redux store
  const countryInfo = useSelector((state) => state.countryInfo);
  const { loading: countryInfoLoading, currencyInfo } = countryInfo;
  const [options, setOptions] = useState([]);

  //when dialcode returned from api, loop and display it
  useEffect(() => {
    if (!countryInfoLoading) {
      for (var key in currencyInfo) {
        const v = currencyInfo[key];
        options.push(
          <option value={v.code} key={v.code}>
            {v.name_plural} {v.code}
          </option>
        );
      }

      setOptions(options.slice());
    }
  }, [countryInfoLoading]);

  return (
    <Select
      onChange={(e) => onChangeHandler(e.target.value)}
      id={content}
      name={content}
      required={required}
      defaultValue={defaultValue}
    >
      <optgroup label="Popular Currencies">
        <option value="AUD">Australian Dollar (AUD)</option>
        <option value="EUR">Euro (EUR)</option>
        <option value="GBP">British Pound (GBP)</option>
        <option value="JPY">Japanese Yen (JPY)</option>
        <option value="USD">US Dollar (USD)</option>
      </optgroup>
      {options}
    </Select>
  );
};

const Select = styled.select`
  width: 100%;

  height: 4.5rem;
  padding: 1rem 1.5rem;
  font-size: 2rem;
  border: 1px solid lightgray;
  border-radius: 0.5rem;
  outline: none;
  color: #797979;
`;

export default CurrencyDropDownMenu;

// <option value="EUR">Euro (EUR)</option>
//       <option value="GBP">British Pound (GBP)</option>
//       <option value="JPY">Japanese Yen (JPY)</option>
//       <option value="USD">US Dollar (USD)</option>
//       <option value="AED">UAE Dirham (AED)</option>
//       <option value="ARS">Argentine Peso (ARS)</option>
//       <option value="AUD">Australian Dollar (AUD)</option>
//       <option value="AZN">Azerbaijani New Manat (AZN)</option>
//       <option value="BGN">Bulgarian Lev (BGN)</option>
//       <option value="BHD">Bahraini Dinar (BHD)</option>
//       <option value="BND">Brunei Dollar (BND)</option>
//       <option value="BRL">Brazilian Real (BRL)</option>
//       <option value="CAD">Canadian Dollar (CAD)</option>
//       <option value="CHF">Swiss Franc (CHF)</option>
//       <option value="CLP">Chilean Peso (CLP)</option>
//       <option value="CNH">Chinese Renminbi Off-Shore (CNH)</option>
//       <option value="CNY">Chinese Yuan (CNY)</option>
//       <option value="CZK">Czech Koruna (CZK)</option>
//       <option value="DKK">Danish Kroner (DKK)</option>
//       <option value="EGP">Egyptian Pound (EGP)</option>
//       <option value="EUR">Euro (EUR)</option>
//       <option value="FJD">Fiji Dollar (FJD)</option>
//       <option value="GBP">British Pound (GBP)</option>
//       <option value="HKD">Hong Kong Dollar (HKD)</option>
//       <option value="HUF">Hungarian Forint (HUF)</option>
//       <option value="IDR">Indonesian Rupiah (IDR)</option>
//       <option value="ILS">Israeli New Shekel (ILS)</option>
//       <option value="INR">Indian Rupee (INR)</option>
//       <option value="JPY">Japanese Yen (JPY)</option>
//       <option value="KRW">Korean Won (KRW)</option>
//       <option value="KWD">Kuwaiti Dinar (KWD)</option>
//       <option value="LKR">Sri Lanka Rupee (LKR)</option>
//       <option value="MAD">Moroccan Dirham (MAD)</option>
//       <option value="MGA">Malagasy Ariary (MGA)</option>
//       <option value="MXN">Mexican Peso (MXN)</option>
//       <option value="MYR">Malaysian Ringgit (MYR)</option>
//       <option value="NOK">Norwegian Kroner (NOK)</option>
//       <option value="NZD">New Zealand Dollar (NZD)</option>
//       <option value="OMR">Omani Rial (OMR)</option>
//       <option value="PEN">Peruvian Nuevo Sol (PEN)</option>
//       <option value="PGK">Papua New Guinea Kina (PGK)</option>
//       <option value="PHP">Philippine Peso (PHP)</option>
//       <option value="PKR">Pakistani Rupee (PKR)</option>
//       <option value="PLN">Polish Zloty (PLN)</option>
//       <option value="RUB">Russian Rouble (RUB)</option>
//       <option value="SAR">Saudi Arabian Riyal (SAR)</option>
//       <option value="SBD">Solomon Islands Dollar (SBD)</option>
//       <option value="SCR">Seychelles Rupee (SCR)</option>
//       <option value="SEK">Swedish Krona (SEK)</option>
//       <option value="SGD">Singapore Dollar (SGD)</option>
//       <option value="THB">Thai Baht (THB)</option>
//       <option value="TOP">Tonga Pa`anga (TOP)</option>
//       <option value="TRY">Turkish Lira (TRY)</option>
//       <option value="TWD">New Taiwan Dollar (TWD)</option>
//       <option value="TZS">Tanzanian Shilling (TZS)</option>
//       <option value="USD">US Dollar (USD)</option>
//       <option value="VND">Vietnamese Dong (VND)</option>
//       <option value="VUV">Vanuatu Vatu (VUV)</option>
//       <option value="WST">Samoa Tala (WST)</option>
//       <option value="XOF">CFA Franc (BCEAO) (XOF)</option>
//       <option value="XPF">Pacific Franc (XPF)</option>
//       <option value="ZAR">South African Rand (ZAR)</option>
