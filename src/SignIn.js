import React from "react";
import styled from "styled-components";
import { logos } from "./Icons/Resources";

const Container = styled.div`
    width: 100%;    
`;

const LogoImg = styled.img`
    width: 20%;
    margin: 0px auto;
`;

const LogoDiv = styled.div`
    text-align: center;
    margin-top: 90px;
    font-size: 23px;
    font-weight: bold;
    color: #5a7cd3;
`;

const NameText = styled.div`
    font-size: 23px;
    font-weight: bold;
    margin-top: 60px;
    color: #5a7cd3;
    margin-left: 30px
`;

const InputBox = styled.input`
  width: 30%;
  margin: 35px;
  background-color: rgba(0, 0, 0, 0);
  border: none;
  border-bottom: 1.5px solid #5a7cd3;
  padding: 0px 0px 10px 10px;
  font-size: 13px;
  border-radius: 0;
  flex: 1;
  float: left;

  @media (max-width: 430px) {
    width: 50%;
  }
`;

const Duplicate_Btn = styled.div`
    text-align: center;
    font-size: 1px;
    font-weight: bold;
    cursor: pointer;
    color: white;
    border-radius: 4px;
    height: 20px;
    background-color: #828ed1;
    flex: 0.3;
    padding-top: 6px;
    margin-top: 35px;
    margin-right: 50px;
    
`;

const CheckBox = styled.input`
  padding: 20px;
  position: absolute;
  color: white;
  font-size: 15px;
  left: 50px;
  zoom: 1.2;
  ::placeholder {
    color: black;
  }
`;


const Box = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 30px;
`;

const Box1 = styled.div`
  display: flex;
//   flex-direction: column;
  margin-top: 30px;
`;

const Text = styled.div`
  flex: 1;
  font-weight: bold;
  margin-left: 10px;
  text-decoration: underline;
  margin-top: 2px;

`;

const Wrap = styled.div`
    flex: 1; 
    width: 330px;
    margin-left: 150px;
    margin-top: 2px;
`;

const InputBoxWrapper = styled.div`
    display: flex;    
    font-size: 13px;
    color: #5a7cd3;
`;


const Btn = styled.div`
  padding: 3px 20px;
  width: 75%;
  margin: 20px 0px 0px;
  text-align: center;
  font-size: 17px;
  font-weight: bold;
  line-height: 3;
  cursor: pointer;
  color: white;
  border-radius: 10px;
  background-color: #d2d2d2
`;

const SignIn = () => {
    return (
        <Container>
            <LogoDiv>
                <LogoImg src = {logos.main_logo}/>
                <p>?????? ??????</p>
            </LogoDiv>
            <Box1>
                <InputBox placeholder="???????????? ???????????????"/>
                <Duplicate_Btn>????????????</Duplicate_Btn>
            </Box1>
            <Box>
            <InputBoxWrapper>
                <CheckBox id="didAgree" type="checkbox" />
                <Wrap>[??????] ????????? ???????????? ????????????</Wrap>
                <Text>??????</Text>
            </InputBoxWrapper>
            <Btn>????????????</Btn>
            </Box>
        </Container>
        
    )
  };
  export default SignIn;
  