import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAsterisk } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { getQuote, setUserInputInfo } from "../store/actions/quoteAction";
import QuoteDetail from "./QuoteDetail";
import Loading from "./Loading";
import { useHistory, useLocation } from "react-router-dom";
import DropDownMenu from "./DropDownMenu";

const QuoteForm = () => {
  const star = <FontAwesomeIcon icon={faAsterisk} />;

  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [fromCurrency, setFromCurrency] = useState("AUD");
  const [toCurrency, setToCurrency] = useState("USD");
  const [amount, setAmount] = useState("");

  const dispatch = useDispatch();
  const quoteInfo = useSelector((state) => state.quoteInfo);

  const { loading: quoteInfoLoading } = quoteInfo;

  const formSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(setUserInputInfo(fromCurrency, toCurrency, amount));
    dispatch(getQuote(fromCurrency, toCurrency, amount));
  };

  const history = useHistory();

  useEffect(() => {
    if (!quoteInfoLoading) {
      history.push("/quote");
    }
  }, [quoteInfoLoading]);

  const path = useLocation().pathname;
  const showQuoteDetail = path.includes("quote");

  return (
    <Wrapper className="formWrapper">
      {showQuoteDetail ? !quoteInfoLoading ? <QuoteDetail /> : "" : ""}
      <h2>Quick Quote</h2>
      <form
        onSubmit={(e) => {
          formSubmitHandler(e);
        }}
      >
        <div className="oneline">
          <div className="inputWrapper">
            <label htmlFor="firstname">
              First Name <span>{star}</span>
            </label>

            <input
              type="text"
              id="firstname"
              name="firstname"
              placeholder="First Name"
              value={firstname}
              onChange={(e) => {
                setFirstname(e.target.value);
              }}
              required
            />
          </div>

          <div className="inputWrapper">
            <label htmlFor="lastname">
              Last Name <span>{star}</span>
            </label>
            <input
              type="text"
              id="lastname"
              name="lastname"
              placeholder="Last Name"
              value={lastname}
              onChange={(e) => {
                setLastname(e.target.value);
              }}
              required
            />
          </div>
        </div>
        <div className="oneline">
          <div className="inputWrapper">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
        </div>
        <div className="oneline">
          <div className="inputWrapper">
            <label htmlFor="phone">Telephone / Mobile</label>
            <input
              type="text"
              id="phone"
              name="phone"
              placeholder="Telephone / Mobile"
              value={phone}
              onChange={(e) => {
                setPhone(e.target.value);
              }}
            />
          </div>
        </div>

        <div className="oneline">
          <div className="inputWrapper">
            <label htmlFor="fromCurrency">
              From Currency <span>{star}</span>
            </label>
            {/* <input
              type="text"
              id="fromCurrency"
              name="fromCurrency"
              placeholder="From Currency"
              value={fromCurrency}
              onChange={(e) => {
                setFromCurrency(e.target.value);
              }}
              required
            /> */}
            <DropDownMenu
              content="fromCurrency"
              defaultValue="AUD"
              onChangeHandler={setFromCurrency}
              required={true}
            />

            {/* <Select
              onChange={(e) => setFromCurrency(e.target.value)}
              id="fromCurrency"
              name="fromCurrency"
              required
              defaultValue="AUD"
            >
              <optgroup label="Popular Currencies">
                <option value="AUD">Australian Dollar (AUD)</option>
                <option value="EUR">Euro (EUR)</option>
                <option value="GBP">British Pound (GBP)</option>
                <option value="JPY">Japanese Yen (JPY)</option>
                <option value="USD">US Dollar (USD)</option>
              </optgroup>
            </Select> */}
          </div>

          <div className="inputWrapper">
            <label htmlFor="toCurrency">
              To Currency <span>{star}</span>
            </label>
            {/* <input
              type="text"
              id="toCurrency"
              name="toCurrency"
              placeholder="To Currency"
              value={toCurrency}
              onChange={(e) => {
                setToCurrency(e.target.value);
              }}
              required
            /> */}

            <DropDownMenu
              content="toCurrency"
              defaultValue="USD"
              onChangeHandler={setToCurrency}
              required={true}
            />
          </div>
        </div>
        <div className="oneline">
          <div className="inputWrapper">
            <label htmlFor="amount">
              Amount <span>{star}</span>
            </label>
            <input
              type="text"
              id="amount"
              name="amount"
              placeholder="Amount"
              value={amount}
              onChange={(e) => {
                setAmount(e.target.value);
              }}
              required
            />
          </div>
        </div>

        <div className="oneline">
          <Button type="submit" value="GET QUOTE" />
        </div>
      </form>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  font-size: 1.5rem;
  width: 60%;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h2 {
    width: 100%;
    margin: 2rem 0rem;
  }
  form {
    width: 100%;
    border: 1px solid lightgray;
    padding: 1rem;
    border-radius: 0.5rem;
    margin: 2rem 0rem;
    .oneline {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .inputWrapper {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      width: 100%;
      margin: 1rem 1rem;
      label {
        padding: 1rem 0rem;
        cursor: pointer;
        span {
          font-size: 1rem;
          color: #ff4949;
        }
      }
      input {
        width: 100%;

        height: 4.5rem;
        padding: 1rem 1.5rem;
        font-size: 2rem;
        border: 1px solid lightgray;
        border-radius: 0.5rem;
        outline: none;
        color: #797979;

        ::placeholder {
          /* Chrome, Firefox, Opera, Safari 10.1+ */
          color: lightgray;
          opacity: 1; /* Firefox */
        }

        :-ms-input-placeholder {
          /* Internet Explorer 10-11 */
          color: lightgray;
        }

        ::-ms-input-placeholder {
          /* Microsoft Edge */
          color: lightgray;
        }
      }
    }
  }
`;

const Button = styled.input`
  padding: 1.3rem 5rem;
  background-color: #077ca3;
  border: none;
  border-radius: 2rem;
  color: white;
  font-size: 2rem;
  margin: 1rem;
  transition: all 0.5s ease;
  :hover {
    background-color: #26a5cf;
    cursor: pointer;
  }
`;

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

export default QuoteForm;
