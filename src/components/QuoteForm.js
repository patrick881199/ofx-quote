import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAsterisk } from "@fortawesome/free-solid-svg-icons";

const QuoteForm = () => {
  const star = <FontAwesomeIcon icon={faAsterisk} />;
  return (
    <Wrapper className="formWrapper">
      <h2>Quick Quote</h2>
      <form action="">
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
              required
            />
          </div>
        </div>
        <div className="oneline">
          <div className="inputWrapper">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="firstname"
              name="firstname"
              placeholder="Email"
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
            />
          </div>
        </div>

        <div className="oneline">
          <div className="inputWrapper">
            <label htmlFor="fromCurrency">
              From Currency <span>{star}</span>
            </label>
            <input
              type="text"
              id="fromCurrency"
              name="fromCurrency"
              placeholder="From Currency"
              required
            />
          </div>

          <div className="inputWrapper">
            <label htmlFor="toCurrency">
              To Currency <span>{star}</span>
            </label>
            <input
              type="text"
              id="toCurrency"
              name="toCurrency"
              placeholder="To Currency"
              required
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
              required
            />
          </div>
        </div>
        <div className="oneline">
          <input type="submit" value="GET QUOTE" />
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

export default QuoteForm;
