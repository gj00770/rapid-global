import React, { useState } from "react";
import styled from "styled-components";
import { GetProductListDTO } from "../../../../v1/res/product/get_product_list.res.dto";
import Edit from "../../../modal/Edit";
interface Props {
  itemInfo: GetProductListDTO;
}
const Product = (props: Props) => {
  console.log("hi");
  //console.log(props.itemInfo);
  const [isOpen, setIsOpen] = useState(false);
  const openCloseHandler = () => {
    setIsOpen(!isOpen);
  };
  return (
    <ProductContainer>
      <ThumbnailTitleContainer>
        {isOpen ? (
          <Edit openCloseHandler={openCloseHandler} itemInfo={props.itemInfo} />
        ) : null}
        <Thumbnail src={props.itemInfo.selectedThumbnailUrl} />
        <Title>{props.itemInfo.title}</Title>
      </ThumbnailTitleContainer>
      <div onClick={openCloseHandler}>편집</div>
    </ProductContainer>
  );
};

const Thumbnail = styled.img`
  width: 100px;
  height: 100px;
`;
const Title = styled.div`
  margin-left: 10px;
`;
const ThumbnailTitleContainer = styled.div`
  display: flex;
  align-items: center;
`;
const ProductContainer = styled.div`
  box-shadow: rgb(0 0 0 / 7%) 0px 3px 4px 0px;
  width: 80vw;
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
  margin-top: 15px;
`;
export default React.memo(Product);
