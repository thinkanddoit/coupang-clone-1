import { useMemo } from "react";
import * as S from "./RoketTooltip.style";

interface PropsType {
  totalPrice: number;
}

const RoketTooltip = ({ totalPrice }: PropsType) => {
  const StandardPrice = 19800;
  const diff = useMemo(() => StandardPrice - Number(totalPrice), [totalPrice]);
  return (
    <S.Container>
      {(!totalPrice || diff <= 0) && (
        <>
          다른 <S.ColorSpan color="#0073e9">로켓배송 상품</S.ColorSpan>을
          추가해도 함께 <S.ColorSpan color="#00891a">무료배송</S.ColorSpan>{" "}
          가능!
        </>
      )}
      {!!totalPrice && diff > 0 && (
        <>로켓배송 상품을 {diff.toLocaleString()}원 이상 추가하면 구매가능</>
      )}
      <S.Arrow />
    </S.Container>
  );
};

export default RoketTooltip;
