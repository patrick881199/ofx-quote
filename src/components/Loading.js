import React from "react";

import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Loading = () => {
  const Spinner = <FontAwesomeIcon icon={faSpinner} spin />;

  return (
    <StyledGameDetail className="Shadow">
      <StyledSpinner>{Spinner}</StyledSpinner>
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
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledSpinner = styled.div`
  font-size: 5rem;
`;

export default Loading;
