export interface CartDataType {
  id: number;
  product: ProductDataType;
  quantity: number;
}

type rocketType = "fresh" | null;

export interface ProductDataType {
  expectedDeliveryDate: string;
  id: number;
  imageUrl: string;
  isAssured: boolean;
  isEarlyDelivery: boolean;
  isMdRecommended: boolean;
  isRecommended: boolean;
  isSoldout: boolean;
  maxPoint: number;
  name: string;
  originalPrice: number;
  rating: number;
  reviewCount: number;
  rocketType: rocketType;
  salePrice: number;
  shippinFee: number;
  weight: number;
  wowPrice: number;
}
