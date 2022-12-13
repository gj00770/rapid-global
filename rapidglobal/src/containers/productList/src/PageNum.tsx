import { useState } from "react";
import styled from "styled-components";

interface Props {
  handleCurPage: (page: number) => void;
  refetch: () => void;
  totalCount: number;
  curPage: number;
}

function PageNum(props: Props) {
  const [pageNum, setPageNum] = useState([1, 2, 3, 4, 5]);
  const onClickRight = () => {
    const pageArr = pageNum.map((ele) => (props.totalCount ? ele + 5 : 0));
    setPageNum(pageArr);
    props.handleCurPage(pageArr[0] * 10);
  };

  const onClickLeft = () => {
    const pageArr = pageNum.map((ele) => ele - 5);
    setPageNum(pageArr);
    props.handleCurPage(pageArr[0] * 10);
  };

  const onClickNumber = (e: React.FormEvent<HTMLDivElement>) => {
    props.handleCurPage(Number(e.currentTarget.dataset.page) * 10);
  };

  return (
    <PageNumContainer>
      {pageNum[0] > 5 ? (
        <LeftArrow onClick={onClickLeft}>{"<"}</LeftArrow>
      ) : null}

      {pageNum.map((ele, idx) => (
        <Page
          onClick={onClickNumber}
          data-page={ele}
          key={idx}
          active={ele === (props.curPage + 10) / 10}
        >
          {(ele - 1) * 10 < props.totalCount ? ele : null}
        </Page>
      ))}
      {props.totalCount > (pageNum[0] + 4) * 10 ? (
        <RightArrow onClick={onClickRight}>{">"}</RightArrow>
      ) : null}
    </PageNumContainer>
  );
}

const PageNumContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 200px;
  margin-bottom: 20px;
`;
const LeftArrow = styled.div`
  cursor: pointer;
`;
const RightArrow = styled.div`
  cursor: pointer;
`;
const Page = styled.div<{ active: boolean }>`
  cursor: pointer;
  color: ${(props) => (props.active ? "white" : "black")}; ;
`;

export default PageNum;
