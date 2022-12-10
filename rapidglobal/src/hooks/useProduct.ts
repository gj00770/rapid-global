// import axios from "axios";
// import { useQuery } from "react-query";
// //  - API : http://ec2-52-79-228-35.ap-northeast-2.compute.amazonaws.com:8002/api/v1/auth/login POST
// // - Req DTO : LoginDTO  ( name : t , password : t )
// // - 로그인 성공 시 access_token 토큰이 반환됩니다.
// // - 토큰을 원하는 곳에 저장하신 뒤 메인페이지(Route : /)로 이동시켜주세요.
// // - 2번 문제부터 API 호출 시 header Authorization에 `Bearer ${토큰}` 를 넣어주셔야 합니다.

import axios from "axios";
import { useQuery } from "react-query";
import { PaginationReqDTO } from "../../v1/req/common/pagination.req.dto";
import { PaginationResDTO } from "../../v1/res/common/pagination.res.dto";
import { GetProductListDTO } from "../../v1/res/product/get_product_list.res.dto";

export function useProduct() {
  const query = useQuery<PaginationResDTO<GetProductListDTO>>(
    "123",
    async () => {
      const test = localStorage.getItem("accessToken");
      try {
        const { data } = await axios.get(
          "http://ec2-52-79-228-35.ap-northeast-2.compute.amazonaws.com:8002/api/v1/product/list",
          {
            headers: { Authorization: `Bearer ${test}` },
          }
        );
        return data;
      } catch (err) {
        return null;
      }
    },
    { refetchOnMount: true }
  );

  return {
    data: query.data,
    isLoading: query.isLoading,
    refetch: query.refetch,
  };
}
