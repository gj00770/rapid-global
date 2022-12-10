import { OptionModel } from '@dtos/v1/model/option.model';
import { ProductModel } from '@dtos/v1/model/product.model';

export type UpdateProductDTO = Partial<Omit<ProductModel, 'createdAt'>> & {
  optionList?: OptionModel[];
};
