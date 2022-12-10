import axios from "axios";
import React, { useState } from "react";
import styled from "styled-components";

function Edit() {
  // console.log(data?.list);
  return (
    <EditContainer>
      <Name />
    </EditContainer>
  );
}

const EditContainer = styled.div`
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
export default Edit;
