import { GreyBox } from "@components/Checkout/CheckoutInfo/PayMethod";
import * as S from "./CoupayMoneyView.style";

interface PropsType {
  money: number;
}

const CoupayMoneyView = ({ money }: PropsType) => {
  return (
    <GreyBox>
      <S.BalanceBox>
        <S.Span>- 잔액</S.Span>
        <S.Span>{money.toLocaleString()}원</S.Span>
      </S.BalanceBox>
      <S.AlertBox>*잔액이 부족할 경우, 결제 진행 시에 충전됩니다.</S.AlertBox>
    </GreyBox>
  );
};

export default CoupayMoneyView;
