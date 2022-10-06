import * as S from "./TotalCheckoutPrice.style";

interface PropsType {
  price: number;
}

const TotalCheckoutPrice = ({ price }: PropsType) => {
  return (
    <S.Container>
      <S.TotoalPrice>{price.toLocaleString()}원</S.TotoalPrice>
      <S.CaseToBeEarnedBox>
        캐시적립 예정 {Math.floor(price / 100).toLocaleString()}원
      </S.CaseToBeEarnedBox>
    </S.Container>
  );
};

export default TotalCheckoutPrice;
