import Image from "next/image";
import * as S from "./CartTitle.style";

const CartTitle = () => {
  return (
    <S.Container>
      <Image
        src="/cart-title.png"
        alt="cart-title"
        width={"900px"}
        height={"45px"}
      />
    </S.Container>
  );
};

export default CartTitle;
