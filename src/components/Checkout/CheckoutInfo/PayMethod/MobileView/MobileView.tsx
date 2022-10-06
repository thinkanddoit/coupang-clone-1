import { GreyBox } from "@components/Checkout/CheckoutInfo/PayMethod";
import { SelectBox } from "@components/Checkout/Common";
import { OptionType } from "@components/Checkout/Common/SelectBox/SelectBox";
import {
  useOrderDispatch,
  useOrderState,
} from "@components/Checkout/OrderContext";
import * as S from "./MobileView.style";

const MobileView = () => {
  const { mobileCarrier } = useOrderState();
  const dispatch = useOrderDispatch();

  const MOBILE_LIST: OptionType[] = [
    { value: "warning", name: "선택" },
    { value: "skt", name: "SKT" },
    { value: "kt", name: "KT" },
    { value: "hello", name: "헬로모바일" },
    { value: "kct", name: "KCT" },
  ];

  const changeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch({
      type: "CHANGE_PAYMETHOD",
      value: "mobile",
      option: { mobileCarrier: e.target.value },
    });
  };

  return (
    <GreyBox>
      <S.Container>
        <S.Span>- 통신사 종류</S.Span>
        <SelectBox
          options={MOBILE_LIST}
          onChange={changeHandler}
          defaultValue={mobileCarrier}
        />
        {mobileCarrier === "warning" && (
          <S.NoOptionWarning>통신사 정보를 추가해주세요</S.NoOptionWarning>
        )}
      </S.Container>
    </GreyBox>
  );
};

export default MobileView;
