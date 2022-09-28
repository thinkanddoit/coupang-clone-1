import { CartDataType } from "@customTypes/cart";

export const getRoketData = (cartData: CartDataType[]) =>
  cartData.filter((e) => e.product.rocketType === "fresh");

export const getNormalData = (cartData: CartDataType[]) =>
  cartData.filter((e) => e.product.rocketType !== "fresh");

export const getCheckedData = (
  cartData: CartDataType[],
  checkedList: number[]
) => cartData.filter((e) => checkedList.includes(e.id));
