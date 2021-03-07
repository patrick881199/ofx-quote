import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAsterisk } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { getQuote, setUserInputInfo } from "../store/actions/quoteAction";
import QuoteDetail from "./QuoteDetail";
import { useHistory, useLocation } from "react-router-dom";
import CurrencyDropDownMenu from "./CurrencyDropDownMenu";
import DialcodeDropDownMenu from "./DialcodeDropDownMenu";
import { foramValidation } from "../util";
import { motion } from "framer-motion";
import { quoteAnim } from "../animation";

const QuoteForm = () => {
  const star = <FontAwesomeIcon icon={faAsterisk} />;

  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [dialcode, setDialcode] = useState("+61");
  const [phone, setPhone] = useState("");
  const [fromCurrency, setFromCurrency] = useState("AUD");
  const [toCurrency, setToCurrency] = useState("USD");
  const [amount, setAmount] = useState("");
  const [isFormValidate, setIsFormValidate] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const dispatch = useDispatch();
  const quoteInfo = useSelector((state) => state.quoteInfo);

  const { loading: quoteInfoLoading } = quoteInfo;

  const formSubmitHandler = (e) => {
    e.preventDefault();
    const message = foramValidation(amount, phone);

    if (message !== null) {
      setErrorMessage(message);
      setIsFormValidate(false);
      return;
    } else {
      setIsFormValidate(true);
      dispatch(setUserInputInfo(fromCurrency, toCurrency, amount));
      dispatch(getQuote(fromCurrency, toCurrency, amount));
    }
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
      {showQuoteDetail && !quoteInfoLoading && (
        <QuoteDetail variants={quoteAnim} />
      )}
      <h2>Quick Quote</h2>
      {!isFormValidate && (
        <ErrorMessage
          transition={{ duration: 0.25 }}
          initial={{ scale: 0.1 }}
          animate={{ scale: !isFormValidate ? 1 : 0.1 }}
        >
          <p>{errorMessage}</p>
        </ErrorMessage>
      )}
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
              minLength="2"
              maxLength="15"
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
              minLength="2"
              maxLength="15"
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
            <PhoneNumberWrapper>
              <DialcodeDropDownMenu
                value={dialcode}
                content="dialcode"
                onChangeHandler={setDialcode}
                required={true}
              />
              <input
                style={{ width: "85%" }}
                type="text"
                id="phone"
                name="phone"
                minLength="6"
                maxLength="15"
                placeholder="Telephone / Mobile"
                value={phone}
                onChange={(e) => {
                  setPhone(e.target.value);
                }}
              />
            </PhoneNumberWrapper>
          </div>
        </div>

        <div className="oneline">
          <div className="inputWrapper">
            <label htmlFor="fromCurrency">
              From Currency <span>{star}</span>
            </label>

            <CurrencyDropDownMenu
              content="fromCurrency"
              defaultValue="AUD"
              onChangeHandler={setFromCurrency}
              required={true}
            />
          </div>

          <div className="inputWrapper">
            <label htmlFor="toCurrency">
              To Currency <span>{star}</span>
            </label>

            <CurrencyDropDownMenu
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
              minLength="1"
              maxLength="7"
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

  /* Media Query */
  @media screen and (max-width: 1280px) {
    width: 80%;
  }
`;

const PhoneNumberWrapper = styled.div`
  display: flex;
  width: 100%;
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
const ErrorMessage = styled(motion.div)`
  width: 100%;
  border: 1px solid lightgray;
  padding: 1rem;
  border-radius: 0.5rem;
  p {
    color: red;
  }
`;

export default QuoteForm;
