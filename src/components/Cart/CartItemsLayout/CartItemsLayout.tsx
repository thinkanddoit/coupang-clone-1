import CartBundleTitle from "../CartBundleTitle/CartBundleTitle";
import * as S from "./CartItemsLayout.style";

type BundleType = "normal" | "roket";

interface PropsType {
  type: BundleType;
  children: React.ReactNode;
  itemCount: number;
}

const CartItemsLayout = ({ type, children, itemCount }: PropsType) => {
  return (
    <>
      <CartBundleTitle type={type} />
      <S.Container>
        <div>{children}</div>
        {type === "roket" && (
          <S.ShippinFeeContainer>무료</S.ShippinFeeContainer>
        )}
        {type === "normal" && (
          <div style={{}}>
            {Array(itemCount)
              .fill(0)
              .map((_, idx) => (
                <S.ShippinFeeContainer key={idx} height="120px">
                  무료
                </S.ShippinFeeContainer>
              ))}
          </div>
        )}
      </S.Container>
    </>
  );
};

export default CartItemsLayout;
