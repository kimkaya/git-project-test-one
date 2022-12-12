import React from "react";
import styled from "styled-components";

const StyledP = styled.p`
  font-size: 12px;
  color: #FFB200;
  margin: 5px 0;
`;

const LimitOnLength = ({ children }) => {
  return <StyledP>{children}</StyledP>;
};

export default LimitOnLength;
