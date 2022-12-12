import React, { useState } from "react";
import styled from "styled-components";
import { GetProductListDTO } from "../../../../v1/res/product/get_product_list.res.dto";
import Edit from "../../../modal/Edit";
interface Props {
  itemInfo: GetProductListDTO;
  curPage: number;
}
const Product = (props: Props) => {
  //console.log("hi");
  //console.log(props.itemInfo);
  const [isOpen, setIsOpen] = useState(false);
  const openCloseHandler = () => {
    setIsOpen(!isOpen);
  };
  return (
    <ProductContainer>
      <ThumbnailTitleContainer>
        {isOpen ? (
          <Edit
            openCloseHandler={openCloseHandler}
            itemInfo={props.itemInfo}
            curPage={props.curPage}
          />
        ) : null}
        <Thumbnail src={props.itemInfo.selectedThumbnailUrl} />
        <Title>{props.itemInfo.title}</Title>
      </ThumbnailTitleContainer>
      <EditButton onClick={openCloseHandler}>편집</EditButton>
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
  background-color: white;
  box-shadow: rgb(0 0 0 / 40%) 0px 3px 4px 0px;
  width: 80vw;
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
  margin-top: 15px;
  border-radius: 20px;
`;
const EditButton = styled.div`
  cursor: pointer;
  margin: 9px 9px 0px 0px;
`;
export default React.memo(Product);
