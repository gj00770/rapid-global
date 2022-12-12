import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import styled from "styled-components";
import styles from "../../../styles/Home.module.css";

export default function Home() {
  const router = useRouter();
  return (
    <div className={styles.container}>
      <HomeContainer>
        <HomeContainer>
          <Login onClick={() => router.push(`/login`)}>로그인</Login>
          <ProductList onClick={() => router.push(`/productList`)}>
            상품정보
          </ProductList>
        </HomeContainer>
      </HomeContainer>
    </div>
  );
}

const Login = styled.div`
  width: 350px;
  height: 50px;
  margin-bottom: 30px;
  background-color: white;
  text-align: center;
  box-shadow: rgb(0 0 0 / 40%) 0px 3px 4px 0px;
`;
const ProductList = styled.div`
  width: 350px;
  height: 50px;
  background-color: white;
  text-align: center;
  box-shadow: rgb(0 0 0 / 40%) 0px 3px 4px 0px;
`;
const HomeContainer = styled.div`
  font-size: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #7dd2ff;
  width: 100vw;
  height: 100vh;
`;
const ProductContainer = styled.div`
  box-shadow: rgb(0 0 0 / 7%) 0px 3px 4px 0px;
  width: 80vw;
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
  margin-top: 15px;
`;
