import axios from "axios";
import { useRouter } from "next/router";
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
  const router = useRouter();
  const onChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };
  const onClickLogin = () => {
    useLogin({ name: name, password: password });
    router.push("/");
  };
  return (
    <LoginBackground>
      <LoginContainer>
        <InputIdName>ID</InputIdName>
        <Name onChange={onChangeName} />{" "}
        <InputPassWordName>Password</InputPassWordName>
        <Password onChange={onChangePassword} />
        <LoginButton onClick={onClickLogin}>로그인</LoginButton>
      </LoginContainer>
    </LoginBackground>
  );
}

const LoginBackground = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
`;
const LoginContainer = styled.div`
  width: 400px;
  height: 300px;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: rgb(0 0 0 / 40%) 5px 5px 10px;
`;
const InputIdName = styled.div`
  margin: 20px 0px 5px 0px;
  width: 280px;
`;
const InputPassWordName = styled.div`
  margin: 20px 0px 5px 0px;
  width: 280px;
`;
const Name = styled.input`
  width: 300px;
  height: 30px;
  background-color: #d3d3d3;
  border-radius: 30px;
  border: none;
  font-size: 22px;
  text-align: center;
`;
const Password = styled.input`
  width: 300px;
  height: 30px;
  background-color: #d3d3d3;
  border-radius: 30px;
  border: none;
  text-align: center;
  font-size: 22px;
`;
const LoginButton = styled.div`
  background-color: #7dd2ff;
  margin-top: 50px;
  width: 300px;
  height: 30px;
  text-align: center;
  line-height: 30px;
  border-radius: 30px;
  color: white;
  cursor: pointer;
`;
export default Login;
