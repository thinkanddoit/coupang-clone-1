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

export interface OrderRequestBodyType {
  ordersheetId: number;
  addressId: number;
  usedCash: number;
  payMethod: string;
  // "mobile" | "coupaymoney";
  /** 'mobile' 결제에서 필수입니다. */
  mobileCarrier?: string;
  // "skt" | "kt" | "hello" | "kct";
  /** 'coupaymoney' 결제에서 필수입니다. */
  usedCoupaymoney?: number;
}

export type OrderActionType =
  | { type: "CHANGE_ADDRESS"; value: number }
  | { type: "CHANGE_USEDCASH"; value: number }
  | { type: "CHANGE_PAYMETHOD"; value: string; option: any };
