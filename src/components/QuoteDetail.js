import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useHistory } from "react-router-dom";

import { SET_LOADING_TRUE } from "../store/types";
import { quoteAnim } from "../animation";

const QuoteDetail = () => {
  //get detial quote info from redux store
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

  //when user click the shadow area of quotedetail component
  //redirect to "/" which is the form
  const shadowClickHandler = (e) => {
    //checking whether shadow area is clicked by detect the event class name
    if (e.target.classList.contains("Shadow")) {
      dispatch({
        type: SET_LOADING_TRUE,
      });
      history.push(`/`);
    }
  };

  return (
    //Add showing animation for the component
    <StyledGameDetail
      className="Shadow"
      onClick={(e) => shadowClickHandler(e)}
      variants={quoteAnim}
      initial="hidden"
      animate="show"
      data-testid="Shadow"
    >
      <Content>
        {CustomerRate !== undefined && CustomerRate !== 0 ? (
          <>
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
          </>
        ) : (
          <Warning>Term currency is currently not supported</Warning>
        )}
      </Content>
    </StyledGameDetail>
  );
};

const StyledGameDetail = styled(motion.div)`
  z-index: 10;
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
  width: 50%;
  margin: 10rem auto;
  padding: 3rem;
  h1 {
    width: 70%;
    margin: auto;
  }
  .alignLeft {
    text-align: left;
  }
  @media screen and (max-width: 1280px) {
    width: 80%;
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
  /* Media Query */
  @media screen and (max-width: 1280px) {
    font-size: 5rem;
  }
`;

const Warning = styled.h2`
  font-size: 4rem;
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
  @media screen and (max-width: 1280px) {
    font-size: 3rem;
  }
`;

const Amount = styled.div`
  width: 70%;
  margin: auto;
  text-align: left;
  font-size: 6rem;
  span {
    color: #5fc8ea;
  }
  @media screen and (max-width: 1280px) {
    font-size: 4rem;
  }

  @media screen and (max-width: 800px) {
    font-size: 2.5rem;
  }
`;
export default QuoteDetail;
