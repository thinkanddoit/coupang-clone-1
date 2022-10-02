import { Button } from "@components/Common";
import * as S from "./CheckoutButton.style";
import {
  useOrderDispatch,
  useOrderState,
} from "@components/Checkout/OrderContext";

const CheckoutButton = () => {
  const dispatch = useOrderDispatch();
  const orderRequestBody = useOrderState();
  const { payMethod, mobileCarrier } = orderRequestBody;

  console.log("orderRequestBody", orderRequestBody);

  const clickHandler = () => {
    if (payMethod === "mobile") {
      if (!mobileCarrier) {
        dispatch({
          type: "CHANGE_PAYMETHOD",
          value: "mobile",
          option: { mobileCarrier: "warning" },
        });
        window.alert("통신사를 선택해주세요");
      } else if (mobileCarrier === "warning") {
        window.alert("통신사를 선택해주세요");
      }
    }
  };
  return (
    <S.Container>
      <Button name={"결제하기"} onClick={clickHandler} />
    </S.Container>
  );
};

export default CheckoutButton;
