import {
  CartBundle,
  CartBundlePriceTotal,
  CartBundleTitle,
} from "@components/Cart";
import { CartDataType } from "@customTypes/cart";
import { getCheckedData } from "@components/Cart/utils/cartDataUtil";
import * as S from "./CartItemsLayout.style";

type BundleType = "normal" | "roket";

interface PropsType {
  type: BundleType;
  cartData: CartDataType[];
  checkedList: number[];
  onChangeEach: (e: React.ChangeEvent<HTMLInputElement>, id: number) => void;
}

const CartItemsLayout = ({
  type,
  cartData,
  checkedList,
  onChangeEach,
}: PropsType) => {
  return (
    <>
      {!!cartData.length && (
        <>
          <CartBundleTitle type={type} />
          <S.Container>
            <div>
              <CartBundle
                cartData={cartData}
                checkedList={checkedList}
                onChange={onChangeEach}
              />
            </div>
            {type === "roket" && (
              <S.ShippinFeeContainer>무료</S.ShippinFeeContainer>
            )}
            {type === "normal" && (
              <div style={{}}>
                {Array(cartData.length)
                  .fill(0)
                  .map((_, idx) => (
                    <S.ShippinFeeContainer key={idx} height="120px">
                      무료
                    </S.ShippinFeeContainer>
                  ))}
              </div>
            )}
          </S.Container>
          <CartBundlePriceTotal
            type={type}
            checkedCartData={getCheckedData(cartData, checkedList)}
          />
        </>
      )}
    </>
  );
};

export default CartItemsLayout;
