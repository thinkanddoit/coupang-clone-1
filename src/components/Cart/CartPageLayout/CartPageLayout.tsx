import { Header } from "@components/Common";
import Image from "next/image";
import * as S from "./CartPageLayout.style";

interface PropsType {
  children: React.ReactNode;
}
const CartPageLayout = ({ children }: PropsType) => {
  return (
    <S.Container>
      <Header />
      <S.WhiteBox>
        <S.ImageContainer>
          <Image
            src="/cart-title.png"
            alt="cart-title"
            width={"900px"}
            height={"45px"}
          />
        </S.ImageContainer>
        {children}
      </S.WhiteBox>
    </S.Container>
  );
};

export default CartPageLayout;
