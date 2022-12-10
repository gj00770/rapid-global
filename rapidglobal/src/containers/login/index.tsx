import axios from "axios";
import React, { useState } from "react";
import styled from "styled-components";
import { LoginDTO } from "../../../v1/req/auth/login.req.dto";
import { LoginResultDTO } from "../../../v1/res/auth/login_result.res.dto";

async function useLogin(loginInfo: LoginDTO) {
  const token = await axios.post<LoginResultDTO>(
    "http://ec2-52-79-228-35.ap-northeast-2.compute.amazonaws.com:8002/api/v1/auth/login",
    loginInfo
  );
  console.log(token.data.access_token);
  console.log("accessToken", token.data.access_token);
  localStorage.setItem("accessToken", token.data.access_token);
}

function Login() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const onChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };
  return (
    <LoginContainer>
      <Name onChange={onChangeName} /> <Password onChange={onChangePassword} />
      <LoginButton onClick={() => useLogin({ name: name, password: password })}>
        로그인
      </LoginButton>
    </LoginContainer>
  );
}

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 80vh;
`;
const Name = styled.input`
  width: 300px;
  margin-top: 50px;
`;
const Password = styled.input`
  width: 300px;
  margin-top: 30px;
`;
const LoginButton = styled.div`
  background-color: #d3d3d3;
  margin-top: 30px;
  width: 300px;
  height: 30px;
  text-align: center;
  line-height: 30px;
`;
export default Login;
