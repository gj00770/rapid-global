import React, { useState } from "react";
import styled from "styled-components";

function Login() {
  return (
    <LoginContainer>
      <Name /> <Password />
    </LoginContainer>
  );
}

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const Name = styled.input`
  display: flex;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  padding-bottom: 40px;
`;
const Password = styled.input`
  display: flex;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  padding-bottom: 40px;
`;
export default Login;
