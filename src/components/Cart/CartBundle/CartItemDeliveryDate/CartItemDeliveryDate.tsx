import * as S from "./CartItemDeliveryDate.style";
import { dateFormat } from "./utils";

const EarlyDeliveryInfo = () => {
  return <S.EarlyDeliveryInfo>(밤 12시 전 주문 시)</S.EarlyDeliveryInfo>;
};

interface PropsType {
  expectedDeliveryDate: string;
  isEarlyDelivery: boolean;
}

const CartItemDeliveryDate = ({
  expectedDeliveryDate,
  isEarlyDelivery,
}: PropsType) => {
  return (
    <div>
      <S.DeliveryDate isEarlyDelivery={isEarlyDelivery}>
        {`${dateFormat(expectedDeliveryDate)} ${
          isEarlyDelivery ? "보장" : "예정"
        }`}
      </S.DeliveryDate>
      {isEarlyDelivery && <EarlyDeliveryInfo />}
    </div>
  );
};

export default CartItemDeliveryDate;
