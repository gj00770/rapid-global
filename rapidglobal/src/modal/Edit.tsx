import axios from "axios";
import { title } from "process";
import React, { useState } from "react";
import styled from "styled-components";
import { GetProductListDTO } from "../../v1/res/product/get_product_list.res.dto";
import { useProduct } from "../hooks/useProduct";
interface Props {
  openCloseHandler: () => void;
  itemInfo: GetProductListDTO;
}
async function EditProduct(title: string, id: number) {
  const accessToken = localStorage.getItem("accessToken");
  await axios.put(
    `http://ec2-52-79-228-35.ap-northeast-2.compute.amazonaws.com:8002/api/v1/product/${id}`,
    {
      title,
    },
    {
      headers: { Authorization: `Bearer ${accessToken}` },
    }
  );
}
function Edit(props: Props) {
  const [title, setTitle] = useState(" ");
  const { refetch } = useProduct();
  const onClickEdit = () => {
    EditProduct(title, props.itemInfo.id);
    setTimeout(() => refetch(), 1000);
    props.openCloseHandler();
  };
  return (
    <EditModalBackground>
      <EditContainer>
        <CloseButton onClick={props.openCloseHandler}>x</CloseButton>
        <Title onChange={(e) => setTitle(e.target.value)} />
        <div>{props.itemInfo.title}</div>
        <div onClick={onClickEdit}>버튼</div>
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
const EditContainer = styled.div`
  position: relative;
  width: 600px;
  height: 600px;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const CloseButton = styled.div`
  top: 0;
  right: 6px;
  font-size: 20px;

  position: absolute;
`;
const Title = styled.input`
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
export default Edit;
