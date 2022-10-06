import { OrderRequestBodyType } from "@customTypes/checkout";
import { useReducer } from "react";

function reducer(state: OrderRequestBodyType, action: any) {
  switch (action.type) {
    case "CHANGE_ADDRESS":
      return {
        ...state,
        addressId: action.value,
      };
    case "CHANGE_USEDCASH":
      return {
        ...state,
        usedCash: action.value,
      };
    case "CHANGE_PAYMETHOD":
      return {
        ...state,
        payMethod: action.value,
        ...action.option,
      };
    default:
      return state;
  }
}

function useOrder(initialState: OrderRequestBodyType) {
  const [orderRequestBody, dispatch] = useReducer(reducer, initialState);
  return [orderRequestBody, dispatch];
}

export default useOrder;
