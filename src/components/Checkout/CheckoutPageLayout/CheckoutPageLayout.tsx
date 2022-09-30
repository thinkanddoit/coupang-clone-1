import Image from "next/image";
import { CheckoutTitle } from "@components/Checkout";
import * as S from "./CheckoutPageLayout.style";

interface PropsType {
  children: React.ReactNode;
}

const CheckoutPageLayout = ({ children }: PropsType) => {
  return (
    <S.Container>
      <S.Header>
        <S.ImageBox>
          <Image
            src="https://image7.coupangcdn.com/image/coupang/common/logo_coupang_w350.png"
            alt="쿠팡"
            width={"174px"}
            height={"41px"}
          />
        </S.ImageBox>
      </S.Header>

      <S.Body>
        <CheckoutTitle />
        {children}
      </S.Body>
    </S.Container>
  );
};

export default CheckoutPageLayout;
