import { Button } from "@components/Checkout/Common";
import {
  useOrderDispatch,
  useOrderState,
} from "@components/Checkout/OrderContext";
import { useState } from "react";
import * as S from "./CoupangCash.style";

interface PropsType {
  holdingCash: number;
}

const CoupangCash = ({ holdingCash }: PropsType) => {
  const { usedCash } = useOrderState();
  const dispatch = useOrderDispatch();

  const [isInputActive, setIsInputActive] = useState(false);
  const [inputValue, setInputValue] = useState(usedCash);

  return (
    <S.Container>
      <S.CashInfoBox>
        <div style={{ width: "115px" }}>
          {usedCash > 0 && "-"}
          {usedCash}원
        </div>
        <div>보유 : {holdingCash}원</div>
        {holdingCash > 0 && (
          <Button
            title="쿠팡캐시입력"
            margin="0 0 0 3px"
            onClick={() => {
              setIsInputActive(!isInputActive);
              setInputValue(0);
            }}
          />
        )}
      </S.CashInfoBox>
      {isInputActive && (
        <S.CashInputBox>
          <div>
            <S.Input
              value={inputValue}
              onChange={(e) => {
                if (!isNaN(+e.target.value)) setInputValue(+e.target.value);
              }}
            />
            <span>{` 원`}</span>
            <S.SmallBar>|</S.SmallBar>
            <input
              type={"checkbox"}
              checked={inputValue === holdingCash}
              onChange={(e) => {
                if (e.target.checked) setInputValue(holdingCash);
                else setInputValue(0);
              }}
            />
            <span>모두사용</span>
          </div>
          <S.Button
            onClick={() => {
              dispatch({ type: "CHANGE_USEDCASH", value: inputValue });
            }}
            disabled={inputValue > holdingCash}
          >
            쿠팡캐시적용
          </S.Button>
          {inputValue > holdingCash && (
            <S.ExcessWarning>
              ❗️ 사용가능한 캐시를 초과 입력하였습니다.
            </S.ExcessWarning>
          )}
        </S.CashInputBox>
      )}
    </S.Container>
  );
};

export default CoupangCash;
