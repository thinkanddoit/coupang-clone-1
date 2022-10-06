import { NextRouter } from "next/router";

export interface RouterAndQueryPropsType {
  router: NextRouter;
  query: Partial<QueryTypeForGetProductDataList>;
}

export interface QueryTypeForGetProductDataList {
  page: number;
  listSize: number;
  sorter: string;
}

export type ProductDataListType = ProductDataType[];

export interface ProductDataType {
  name: string;
  imageUrl: string;
  rating: number;
  reviewCount: number;
  originalPrice: number;
  salePrice: number;
  id: number;
  rocketType: any;
  weight: any;
  wowPrice: number;
  shippinFee: number;
  isRecommended: boolean;
  isMdRecommended: boolean;
  isSoldout: boolean;
  maxPoint: number;
  expectedDeliveryDate: string;
  isAssured: boolean;
  isEarlyDelivery: boolean;
}
