import Image from "next/image";
import * as S from "./CartItemPrice.style";

interface PropsType {
  price: number;
  name: string;
  isRocket: boolean;
}
const CartItemPrice = ({ price, name, isRocket }: PropsType) => {
  return (
    <S.Container>
      <S.PriceContainer>{`${price.toLocaleString()}원`}</S.PriceContainer>
      {isRocket && (
        <Image
          src="https://img1a.coupangcdn.com/image/cmg/icon/ios/logo_rocket_large@3x.png"
          alt={name}
          width={"56px"}
          height={"14px"}
          layout="fixed"
        />
      )}
    </S.Container>
  );
};

export default CartItemPrice;
