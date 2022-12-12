import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`

  position: absolute;
width: 128px;
height: 107px;

background: #FFB200;
border-radius: 30px;
`;

const LoginButton = function ({ type, children }) {
  return <StyledButton type={type}>{children}</StyledButton>;
};

export default LoginButton;

  // /* 공통 스타일 */
  // width: 100%;
  // color: white;
  // cursor: pointer;
  // text-align: center;

  // /* 크기 */
  // height: 40px;
  // font-size: 16px;
  // font-weight: 200;

  // /* 색상 */
  // background: #FFB200;

  // margin-top: 6px;