import { ProductModel } from "../../model/product.model";
import { PaginationReqDTO } from "../common/pagination.req.dto";

export type SearchProductListDTO = Partial<Pick<ProductModel, "title">> &
  PaginationReqDTO;
