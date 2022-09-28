import { CartDataType } from "@customTypes/cart";
import * as S from "./CartBundlePriceTotal.style";
import RoketTooltip from "./RoketTooltip/RoketTooltip";

type BundleType = "normal" | "roket";

interface PropsType {
  type: BundleType;
  checkedCartData: CartDataType[];
}

const CartBundlePriceTotal = ({ type, checkedCartData }: PropsType) => {
  const allPrice = checkedCartData?.reduce(
    (a, c) => a + c.product.originalPrice * c.quantity,
    0
  );
  const allShipFee = checkedCartData?.reduce(
    (a, c) => a + c.product.shippinFee,
    0
  );
  return (
    <S.Container>
      <span style={{ position: "relative" }}>
        {type === "roket" && <RoketTooltip totalPrice={allPrice} />}
      </span>
      <span>
        <>
          상품가격 <S.Number>{allPrice.toLocaleString()}</S.Number>원
        </>
        <S.Plus />
        {type === "normal" && (
          <>
            배송비 <S.Number>{allShipFee.toLocaleString()}</S.Number>원
          </>
        )}
        {type === "roket" && (
          <>
            배송비 <b>무료</b>
          </>
        )}
        <S.Equal />
        주문금액{" "}
        <S.Number isBold={true}>
          {(allPrice + allShipFee).toLocaleString()}
        </S.Number>
        원
      </span>
    </S.Container>
  );
};

export default CartBundlePriceTotal;
