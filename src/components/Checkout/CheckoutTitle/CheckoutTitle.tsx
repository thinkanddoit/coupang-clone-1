import * as S from "./CheckoutTitle.style";

const CheckoutTitle = () => {
  return (
    <S.Container>
      <S.H3>주문/결제</S.H3>
      <S.RightBox>
        장바구니&gt;<S.Em>주문결제 &gt;</S.Em>주문완료
      </S.RightBox>
    </S.Container>
  );
};

export default CheckoutTitle;
