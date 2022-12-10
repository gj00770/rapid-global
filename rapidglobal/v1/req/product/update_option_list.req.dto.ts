import { OptionModel } from '@dtos/v1/model/option.model';
import { ProductModel } from '@dtos/v1/model/product.model';

export type UpdateOptionListDTO = Partial<Omit<ProductModel, 'createdAt'>> & {
  list?: UpdateOptionDTO[];
};

type UpdateOptionDTO = Partial<Omit<OptionModel, 'productId'>>;
