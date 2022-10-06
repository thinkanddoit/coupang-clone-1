import { OrderSheetDataType } from "@customTypes/checkout";
import { TableLayout, TableRow, Title } from "@components/Checkout/Common";
import {
  CoupangCash,
  TotalCheckoutPrice,
  EmptyCoupon,
  PayMethod,
} from "@components/Checkout/CheckoutInfo";
import * as S from "./CheckoutInfo.style";
import { useOrderState } from "../OrderContext";

interface PropsType {
  data: OrderSheetDataType;
}

const CheckoutInfo = ({ data }: PropsType) => {
  const orderRequestBody = useOrderState();

  const allPrice = data.orderItems.reduce(
    (a, c) => a + c.product.originalPrice * c.quantity,
    0
  );
  const alallShipFeelPrice = data.orderItems.reduce(
    (a, c) => a + c.product.shippinFee,
    0
  );

  return (
    <S.Container>
      <Title title="결제정보" />
      <TableLayout>
        <TableRow title="총상품가격">
          <b>{allPrice.toLocaleString()}</b>원
        </TableRow>
        <TableRow title="할인쿠폰">
          <EmptyCoupon />
        </TableRow>
        <TableRow title="배송비">
          <b>{alallShipFeelPrice.toLocaleString()}</b>원
        </TableRow>
        <TableRow title="쿠팡캐시">
          <CoupangCash holdingCash={data.coupangCash} />
        </TableRow>
        <TableRow title="총결제금액">
          <TotalCheckoutPrice
            price={allPrice + alallShipFeelPrice - orderRequestBody.usedCash}
          />
        </TableRow>
        <TableRow title="결제방법">
          <PayMethod coupayMoney={data.coupayMoney} />
        </TableRow>
      </TableLayout>
    </S.Container>
  );
};

export default CheckoutInfo;
