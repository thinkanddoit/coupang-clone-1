import { CartDataType } from "@customTypes/cart";
import * as S from "./CartTotalPrice.style";

interface PropsType {
  checkedCartData: CartDataType[];
}

const CartTotalPrice = ({ checkedCartData }: PropsType) => {
  const allPrice = checkedCartData?.reduce(
    (a, c) => a + c.product.originalPrice,
    0
  );
  const allShipFee = checkedCartData?.reduce(
    (a, c) => a + c.product.shippinFee,
    0
  );
  return (
    <S.Container>
      총 상품가격 <S.H2>{allPrice.toLocaleString()}</S.H2>원
      <S.Plus />총 배송비 <S.H2>{allShipFee.toLocaleString()}</S.H2>원
      <S.Equal />총 주문금액{" "}
      <S.H1>{(allPrice + allShipFee).toLocaleString()}원</S.H1>
    </S.Container>
  );
};

export default CartTotalPrice;
