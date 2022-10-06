import { OrderActionType, OrderRequestBodyType } from "@customTypes/checkout";
import React, { useContext, createContext, Dispatch } from "react";
import { useOrder } from "./hooks";

type OrderDispatch = Dispatch<OrderActionType>;

const OrderStateContext = createContext<OrderRequestBodyType | null>(null);
const OrderDispatchContext = createContext<OrderDispatch | null>(null);

export const OrderProvide = ({
  initialState,
  children,
}: {
  initialState: OrderRequestBodyType;
  children: React.ReactNode;
}) => {
  const [orderRequestBody, dispatch] = useOrder(initialState);

  return (
    <OrderStateContext.Provider value={orderRequestBody}>
      <OrderDispatchContext.Provider value={dispatch}>
        {children}
      </OrderDispatchContext.Provider>
    </OrderStateContext.Provider>
  );
};

export function useOrderState() {
  const orderRequestBody = useContext(OrderStateContext);
  if (!orderRequestBody) throw new Error("Cannot find SampleProvider"); // 유효하지 않을땐 에러를 발생
  return orderRequestBody;
}

export function useOrderDispatch() {
  const dispatch = useContext(OrderDispatchContext);
  if (!dispatch) throw new Error("Cannot find SampleProvider"); // 유효하지 않을땐 에러를 발생
  return dispatch;
}
