import React, { useState } from "react";
import styled from "styled-components";
import { useProduct } from "../../hooks/useProduct";
import PageNum from "./src/PageNum";
import Product from "./src/Product";

function ProductList() {
  const [curPage, setCurPage] = useState<number>(0);
  const { data, refetch } = useProduct(curPage ?? 0);
  const handleCurPage = (page: number) => {
    setCurPage(page - 10);
  };
  return (
    <ProductContainer>
      <ProductBanner>상품리스트</ProductBanner>
      {data?.list.map((data) => (
        <Product itemInfo={data} key={data.id} curPage={curPage} />
      ))}
      <PageNum
        handleCurPage={handleCurPage}
        curPage={curPage}
        refetch={refetch}
        totalCount={data ? data.totalCount : 0}
      />
    </ProductContainer>
  );
}

const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const ProductBanner = styled.div`
  color: white;
  font-size: 37px;
  margin-top: 12px;
`;

export default ProductList;
