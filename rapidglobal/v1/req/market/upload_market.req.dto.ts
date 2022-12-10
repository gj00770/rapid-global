import { MARKET } from 'enums/market';

export type UploadMarketDTO = {
  productList: UploadProductDTO[];
};

type UploadProductDTO = {
  id: number;
  marketList: (keyof typeof MARKET)[];
};
