import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { motion } from "framer-motion";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faStar as eStar } from "@fortawesome/free-regular-svg-icons";
import { useHistory } from "react-router-dom";

import { SET_RETURNED_FALSE } from "../store/types";
import { SET_LOADING_TRUE } from "../store/types";
const QuoteDetail = () => {
  //const playstation = <FontAwesomeIcon icon={faPlaystation} />;

  const quoteInfo = useSelector((state) => state.quoteInfo);
  const {
    CustomerRate,
    CustomerAmount,
    toCurrency,
    fromCurrency,
    amount,
  } = quoteInfo;

  const history = useHistory();
  const dispatch = useDispatch();
  const shadowClickHandler = (e) => {
    if (e.target.classList.contains("Shadow")) {
      dispatch({
        type: SET_LOADING_TRUE,
      });
      history.push(`/`);
    }
  };

  return (
    <StyledGameDetail className="Shadow" onClick={(e) => shadowClickHandler(e)}>
      <Content>
        <h1>OFX Customer Rate</h1>
        <Rate>{CustomerRate}</Rate>
        <h1 className="alignLeft">From</h1>
        <Amount>
          {fromCurrency} <span>{amount}</span>
        </Amount>
        <h1 className="alignLeft">To</h1>
        <Amount>
          {toCurrency} <span>{CustomerAmount}</span>
        </Amount>
      </Content>
    </StyledGameDetail>
  );
};

const StyledGameDetail = styled.div`
  background-color: rgba(0, 0, 0, 0.1);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  overflow: scroll;
`;

const Content = styled.div`
  text-align: center;
  border-radius: 2rem;
  background-color: white;
  width: 40%;
  margin: 10rem auto;
  padding: 3rem;
  h1 {
    width: 70%;
    margin: auto;
  }
  .alignLeft {
    text-align: left;
  }
`;

const Rate = styled.h2`
  font-size: 8rem;
  font-weight: bolder;
  background: linear-gradient(left, #38d39f, #38a4d3);
  background: -webkit-gradient(
    linear,
    left top,
    right top,
    from(#38d39f),
    to(#38a4d3)
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Amount = styled.div`
  width: 70%;
  margin: auto;
  text-align: left;
  font-size: 6rem;
  span {
    color: #5fc8ea;
  }
`;
export default QuoteDetail;