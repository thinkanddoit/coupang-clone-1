import * as S from "./PayMethod.style";
import {
  CoupayMoneyView,
  MobileView,
} from "@components/Checkout/CheckoutInfo/PayMethod";
import {
  useOrderDispatch,
  useOrderState,
} from "@components/Checkout/OrderContext";

interface PropsType {
  coupayMoney: number;
}

const PayMethod = ({ coupayMoney }: PropsType) => {
  const { payMethod, mobileCarrier } = useOrderState();
  const dispatch = useOrderDispatch();

  interface PMLData {
    key: string;
    name: string;
    optionKey: string;
  }

  const PAY_METHOD_LIST: PMLData[] = [
    { key: "coupaymoney", name: "쿠페이 머니", optionKey: "usedCoupaymoney" },
    { key: "mobile", name: "휴대폰", optionKey: "mobileCarrier" },
  ];

  const onChangeHandler = (data: PMLData) => {
    if (data.key === "coupaymoney") {
      dispatch({
        type: "CHANGE_PAYMETHOD",
        value: data.key,
        option: { [data.optionKey]: coupayMoney },
      });
    } else if (data.key === "mobile") {
      dispatch({
        type: "CHANGE_PAYMETHOD",
        value: data.key,
        option: { [data.optionKey]: mobileCarrier },
      });
    }
  };

  return (
    <>
      <S.Container>
        {PAY_METHOD_LIST.map((data: PMLData) => {
          return (
            <S.RatioBox key={data.key}>
              <S.Ratio
                type={"radio"}
                value={data.key}
                onChange={() => {
                  onChangeHandler(data);
                }}
                checked={payMethod === data.key}
              />
              <S.ArrowLabel checked={payMethod === data.key}>
                {data.name}
              </S.ArrowLabel>
            </S.RatioBox>
          );
        })}
      </S.Container>
      {payMethod === "coupaymoney" && <CoupayMoneyView money={coupayMoney} />}
      {payMethod === "mobile" && <MobileView />}
    </>
  );
};

export default PayMethod;
