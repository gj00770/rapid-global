import { useRouter } from "next/router";
import styled from "styled-components";
import styles from "../../../styles/Home.module.css";
import { useProduct } from "../../hooks/useProduct";

export default function Home() {
  const router = useRouter();
  const { data } = useProduct(0);
  const onClickLogOut = () => {
    localStorage.setItem("accessToken", "");
    router.push("./login");
  };
  return (
    <div className={styles.container}>
      <HomeContainer>
        <HomeContainer>
          {data ? (
            <Login onClick={onClickLogOut}>로그아웃</Login>
          ) : (
            <Login onClick={() => router.push(`/login`)}>로그인</Login>
          )}

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
  cursor: pointer;
  line-height: 50px;
`;
const ProductList = styled.div`
  width: 350px;
  height: 50px;
  background-color: white;
  text-align: center;
  box-shadow: rgb(0 0 0 / 40%) 0px 3px 4px 0px;
  cursor: pointer;
  line-height: 50px;
`;
const HomeContainer = styled.div`
  font-size: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
`;
