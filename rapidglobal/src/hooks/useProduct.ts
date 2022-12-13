import axios from "axios";
import { useRouter } from "next/router";
import { useQuery } from "react-query";
import { PaginationResDTO } from "../../v1/res/common/pagination.res.dto";
import { GetProductListDTO } from "../../v1/res/product/get_product_list.res.dto";

export function useProduct(page: number) {
  const router = useRouter();
  const query = useQuery<PaginationResDTO<GetProductListDTO>>(
    `${page}`,
    async () => {
      const test = localStorage.getItem("accessToken");
      try {
        const { data } = await axios.get(
          "http://ec2-52-79-228-35.ap-northeast-2.compute.amazonaws.com:8002/api/v1/product/list",
          {
            headers: { Authorization: `Bearer ${test}` },
            params: { take: 10, skip: page },
          }
        );
        return data;
      } catch (err) {
        if (err.response.status === 401) {
          alert("로그인해주세요");
          router.push("/login");
        }
        console.log(err);
      }
    }
  );

  return {
    data: query.data,
    isLoading: query.isLoading,
    refetch: query.refetch,
  };
}
