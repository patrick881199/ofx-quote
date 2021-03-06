import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

const DialcodeDropDownMenu = ({
  value,
  defaultValue,
  onChangeHandler,
  content,
  required,
}) => {
  const countryInfo = useSelector((state) => state.countryInfo);
  const { loading: countryInfoLoading, dialCode } = countryInfo;
  const [options, setOptions] = useState([]);
  useEffect(() => {
    if (!countryInfoLoading) {
      dialCode.map((v, k) => {
        return options.push(
          <option value={v.dial_code} key={k}>
            {v.code}
            {v.dial_code}
          </option>
        );
      });

      setOptions(options.slice());
    }
  }, [countryInfoLoading]);

  return (
    <Select
      value={value}
      onChange={(e) => onChangeHandler(e.target.value)}
      id={content}
      name={content}
      required={required}
      defaultValue={defaultValue}
    >
      {options}
    </Select>
  );
};

const Select = styled.select`
  width: 15%;

  height: 4.5rem;
  padding: 1rem 1.5rem;
  font-size: 2rem;
  border: 1px solid lightgray;
  border-radius: 0.5rem;
  outline: none;
  color: #797979;
`;

export default DialcodeDropDownMenu;
