import { requester } from "../requester";

export async function editProduct(title: string, id: number) {
  try {
    await requester.put(
      `http://ec2-52-79-228-35.ap-northeast-2.compute.amazonaws.com:8002/api/v1/product/${id}`,
      { title: title }
    );
  } catch (err) {
    if (err.status === 401) {
      alert("다시 로그인해주세요");
    }
  }
}
