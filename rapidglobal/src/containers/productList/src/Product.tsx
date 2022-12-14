import React, { useState } from "react";
import styled from "styled-components";
import { GetProductListDTO } from "../../../../v1/res/product/get_product_list.res.dto";
import { useProduct } from "../../../hooks/useProduct";
import Edit from "../../../modal/Edit";
import { editProduct } from "../../../remotes/product/editProduct";
interface Props {
  itemInfo: GetProductListDTO;
  curPage: number;
}
const Product = (props: Props) => {
  //console.log("hi");
  //console.log(props.itemInfo);
  const [isOpen, setIsOpen] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [title, setTitle] = useState(" ");
  const openCloseHandler = () => {
    setIsOpen(!isOpen);
  };
  const { refetch } = useProduct(props.curPage);
  const onClickEdit = () => {
    editProduct(title, props.itemInfo.id);
    setTimeout(() => refetch(), 1000);
    setIsEdit(false);
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
        {isEdit ? (
          <IsEditContainer>
            <InputTitle
              type="text"
              onChange={(e) => setTitle(e.target.value)}
            />
            <ConfirmButton onClick={onClickEdit}>확인</ConfirmButton>
            <ConfirmButton onClick={() => setIsEdit(false)}>취소</ConfirmButton>
          </IsEditContainer>
        ) : (
          <IsEditContainer>
            <Title>{props.itemInfo.title}</Title>
            <EditImg
              src="data:image/png;base64,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"
              onClick={() => setIsEdit(true)}
            />
          </IsEditContainer>
        )}
      </ThumbnailTitleContainer>
      <EditButton onClick={openCloseHandler}>편집</EditButton>
    </ProductContainer>
  );
};

const Thumbnail = styled.img`
  width: 100px;
  height: 100px;
`;
const InputTitle = styled.input`
  width: 400px;
  border: none;
  background-color: #d3d3d3;
  height: 30px;
  border-radius: 30px;
  text-align: center;
`;
const ConfirmButton = styled.div`
  margin-left: 20px;
  line-height: 30px;
  cursor: pointer;
`;
const IsEditContainer = styled.div`
  display: flex;
  margin-left: 10px;
`;
const Title = styled.div`
  cursor: pointer;
`;
const EditImg = styled.img`
  width: 20px;
  margin-left: 20px;
  cursor: pointer;
`;
const ThumbnailTitleContainer = styled.div`
  display: flex;
  align-items: center;
`;
const ProductContainer = styled.div`
  background-color: white;
  box-shadow: rgb(0 0 0 / 40%) 0px 3px 4px 0px;
  width: 1200px;
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
