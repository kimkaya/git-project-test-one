import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "../_actions/user_actions";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";
import logo from "../assets/logo.png";
import LoginInput from "../components/Login/LoginInput";
import LoginButton from "../components/Login/LoginButton";
import StyledContainer from "../components/Style/styledContainer";
import { Button } from "@mui/material";

const FlexBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 50px 0px 12px 0px;
`
const Logo = styled.img`
    display: inline-block;
    width: 48px;
    height: 52px;
`;
const LogoTitle = styled.h2`
  color: #757575;
  font-size: 16px;
  font-weight: normal;
  padding: 28px 8px 0px 0px;
  letter-spacing: -0.045rem;
`;
const StyledDiv = styled.div`
  color: #FFB200;
  text-align: center;
  margin-top: 20px;
  font-weight: 500;
  font-size: 16px;
`;
const StyledSpan = styled.span`
  color: #909090;
  font-weight: 300;
  margin-right: 10px;
  letter-spacing: -0.05rem;
`;

function Login({ history, rpost }) {
  const dispatch = useDispatch();
  const [inputs, setInput] = useState({
    userId: "",
    userPw: "",
  });

  const { userId, userPw } = inputs;

  const onChange = (e) => {
    const { value, name } = e.target;
    setInput({
      ...inputs,
      [name]: value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    let body = {
      id: userId,
      password: userPw,
    };
    if (!userId || !userPw) {
      alert("필수 항목을 작성하세요!");
    } else {
      dispatch(loginUser(body))
        .then((response) => {
          if (response.payload.loginSuccess) {
            window.localStorage.setItem('userId', response.payload.userId);
            history.push("/board");
          } else {
            alert(response.payload.message);
          }
        })
    }
  };

  const test = (e) => {

    let api = '/rpost';
    
    let data = {
      id:1,
      name:"무열",
      age:29
    };

    let testtt;
    console.log("test",api);
    console.log("test",data);


    rpost({api: api, data: data},(err, response) => {
        console.log("2",api);
        console.log("2",data);
        if(err) {
          console.log(err);
          // asaaa(null);
          // testtt = null;
        }
        else {
          console.log(response);
          // asaaa(response);
          // testtt = response;
          
        }})
    
    // post.rpost({api: api, data: data},(err, response) => {
    //   console.log("2",api);
    //   console.log("2",data);
    //   if(err) {
    //     console.log(err);
    //     // asaaa(null);
    //     // testtt = null;
    //   }
    //   else {
    //     console.log(response);
    //     // asaaa(response);
    //     // testtt = response;
        
    //   }
    // }) 

  }

  return (
    <StyledContainer>
      <div>
        <FlexBox>
          <Logo src={logo} alt="logo" />
          <LogoTitle>
            <strong> JOIN</strong>
            <br/> 
            기회와 소통의 장, 가치를 만들어 가는 직업인들의 커뮤니티
          </LogoTitle>
        </FlexBox>
        <form onSubmit={onSubmit}>
          <LoginInput
            type="text"
            name="userId"
            placeholder="아이디"
            onChange={onChange}
            value={userId}
          />
          <LoginButton type="submit">로그인</LoginButton>
          <LoginInput
            type="password"
            name="userPw"
            placeholder="비밀번호"
            onChange={onChange}
            value={userPw}
          />
          {/* <Button onClick={e => {test(e)}}>test</Button> */}
          
        </form>
        <StyledDiv>
          <Link to="./register">
            <StyledSpan>기업회원이신가요?</StyledSpan>회원가입
          </Link>
        </StyledDiv>
        <StyledDiv>
          <Link to="./officeregister">
              <StyledSpan>개인회원이신가요?</StyledSpan>회원가입
          </Link>
        </StyledDiv>
      </div>
    </StyledContainer>
  );
}

export default withRouter(Login);
