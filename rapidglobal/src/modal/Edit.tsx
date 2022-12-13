import React, { useState } from "react";
import styled from "styled-components";
import { GetProductListDTO } from "../../v1/res/product/get_product_list.res.dto";
import { useProduct } from "../hooks/useProduct";
import { editProduct } from "../remotes/product/editProduct";
interface Props {
  openCloseHandler: () => void;
  itemInfo: GetProductListDTO;
  curPage: number;
}

function Edit(props: Props) {
  const [title, setTitle] = useState(" ");
  const { refetch } = useProduct(props.curPage);
  const onClickEdit = () => {
    editProduct(title, props.itemInfo.id);
    setTimeout(() => refetch(), 1000);
    props.openCloseHandler();
  };
  return (
    <EditModalBackground>
      <EditContainer>
        <ModalRequest>제목을 입력해주세요</ModalRequest>
        <CloseButton onClick={props.openCloseHandler}>x</CloseButton>
        <CurrentTitle>{props.itemInfo.title}</CurrentTitle>
        <Title onChange={(e) => setTitle(e.target.value)} />
        <ConfirmButton onClick={onClickEdit}>확인</ConfirmButton>
      </EditContainer>
    </EditModalBackground>
  );
}
const EditModalBackground = styled.div`
  top: 0;
  left: 0;
  position: absolute;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const ModalRequest = styled.div`
  margin-top: 120px;
  font-size: 25px;
`;
const EditContainer = styled.div`
  position: relative;
  width: 600px;
  height: 600px;
  background-color: white;
  display: flex;
  flex-direction: column;

  align-items: center;
`;
const CloseButton = styled.div`
  top: 0;
  right: 6px;
  font-size: 20px;
  position: absolute;
`;
const Title = styled.input`
  width: 400px;
  border: none;
  background-color: #d3d3d3;
  height: 30px;
  border-radius: 30px;
  margin-top: 50px;
  text-align: center;
`;
const CurrentTitle = styled.div`
  margin-top: 80px;
  width: 400px;
  font-size: 24px;
  text-align: center;
`;
const ConfirmButton = styled.div`
  margin-top: 50px;
  width: 200px;
  font-size: 24px;
  text-align: center;
  background-color: #7dd2ff;
  color: white;
  border-radius: 20px;
`;
export default Edit;
