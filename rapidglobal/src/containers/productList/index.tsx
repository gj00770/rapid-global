import axios from "axios";
import React, { useState } from "react";
import styled from "styled-components";
import { useProduct } from "../../hooks/useProduct";
import Edit from "../../modal/Edit";
import Product from "./src/Product";

function ProductList() {
  const { data } = useProduct();
  console.log(data);

  return (
    <ProductContainer>
      {data?.list.map((data) => (
        <Product itemInfo={data} key={data.id} />
      ))}
    </ProductContainer>
  );
}

const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
export default ProductList;
