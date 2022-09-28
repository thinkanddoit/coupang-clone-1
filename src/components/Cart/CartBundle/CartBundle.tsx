import { CartDataType } from "@customTypes/cart";
import CartBundleLayout from "./CartBundleLayout/CartBundleLayout";
import * as S from "./CartBundle.style";
import Image from "next/image";
import CartItemPrice from "./CartItemPrice/CartItemPrice";
import CartItemDeliveryDate from "./CartItemDeliveryDate/CartItemDeliveryDate";
import { Loading, QuantityPicker } from "@components/Common";
import { useDeleteCartItem } from "../hooks";

interface PropsType {
  cartData: CartDataType[];
  checkedList: number[];
  onChange: (e: any, key: number) => void;
}
const CartBundle = ({ cartData, checkedList, onChange }: PropsType) => {
  const { mutate, isLoading } = useDeleteCartItem();

  return (
    <>
      {isLoading && <Loading />}
      {cartData &&
        cartData.map((e) => {
          return (
            <CartBundleLayout key={e.id}>
              <S.CheckBoxContainer>
                <input
                  type={"checkbox"}
                  checked={checkedList.includes(e.id)}
                  onChange={(el) => onChange(el, e.id)}
                />
              </S.CheckBoxContainer>
              <S.ImageContainer>
                <Image
                  src={e.product.imageUrl}
                  alt={e.product.name}
                  width={"78px"}
                  height={"78px"}
                  layout="fixed"
                />
              </S.ImageContainer>

              <S.InfoContainer>
                <S.NameContainer>{e.product.name}</S.NameContainer>
                <S.InfoBottomLayout>
                  <CartItemDeliveryDate
                    expectedDeliveryDate={e.product.expectedDeliveryDate}
                    isEarlyDelivery={e.product.isEarlyDelivery}
                  />
                  <S.CartItemContainer>
                    <S.CartItemSpan>
                      {e.product.originalPrice.toLocaleString()}원
                    </S.CartItemSpan>
                    <QuantityPicker quantity={e.quantity} id={e.id} />
                  </S.CartItemContainer>
                  <S.CartItemContainer>
                    <S.CartItemSpan>
                      {e.product.originalPrice.toLocaleString()}원
                    </S.CartItemSpan>
                    <S.DeleteButton onClick={() => mutate(e.id)} />
                  </S.CartItemContainer>
                </S.InfoBottomLayout>
              </S.InfoContainer>
              <CartItemPrice
                price={e.product.originalPrice}
                name={e.product.name}
                isRocket={e.product.rocketType === "fresh"}
              />
            </CartBundleLayout>
          );
        })}
    </>
  );
};

export default CartBundle;
