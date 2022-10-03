import {
  BuyerInfo,
  CheckoutInfo,
  CheckoutPageLayout,
  ReceiverInfo,
} from "@components/Checkout";
import CheckoutButton from "@components/Checkout/CheckoutButton/\bCheckoutButton";
import { OrderProvide } from "@components/Checkout/OrderContext";
import { OrderSheetDataType } from "@customTypes/checkout";
import { CheckoutService } from "@services";
import React from "react";
interface PropsType {
  ordersheetId: number;
  data: OrderSheetDataType;
}

const CheckoutPage = ({ ordersheetId, data }: PropsType) => {
  const initialState = {
    ordersheetId: Number(ordersheetId),
    addressId: data.address.id,
    usedCash: 0,
    payMethod: "coupaymoney",
    usedCoupaymoney: data.coupayMoney,
  };

  return (
    <CheckoutPageLayout>
      <OrderProvide initialState={initialState}>
        <BuyerInfo data={data.buyer} />
        <ReceiverInfo initialData={data.address} />
        <CheckoutInfo data={data} />
        <CheckoutButton />
      </OrderProvide>
    </CheckoutPageLayout>
  );
};

export async function getServerSideProps(context: any) {
  const { id } = context.query;
  const cookie = context.req?.headers.cookie;

  return {
    props: {
      ordersheetId: id,
      data: await CheckoutService.getOrderSheetInSSR(id, cookie),
    },
  };
}

export default CheckoutPage;
