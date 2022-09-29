import { CartDataType } from "./cart";

export interface AddressType {
  base: string;
  detail: string;
  id: number;
  isFreshAvailable: boolean;
  isWowAAvailable: boolean;
  phoneNumber: string;
  receiver: string;
}
export interface BuyerType {
  email: string;
  name: string;
  phoneNumber: string;
}
type CouponType = any;

export interface OrderSheetDataType {
  address: AddressType;
  buyer: BuyerType;
  coupangCash: number;
  coupayMoney: number;
  coupons: CouponType[];
  orderItems: CartDataType[];
}
