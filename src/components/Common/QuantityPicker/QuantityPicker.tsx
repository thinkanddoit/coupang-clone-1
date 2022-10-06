import React, { useState } from "react";
import { useUpdateCartItemQuantity } from "@components/Cart/hooks";
import { Loading } from "@components/Common";
import * as S from "./QuantityPicker.style";

interface PropsType {
  quantity: number;
  id: number;
}
const QuantityPicker = ({ quantity, id }: PropsType) => {
  const { isLoading, mutate } = useUpdateCartItemQuantity();

  const increment = () => {
    mutate({ id, quantity: quantity + 1 });
  };
  const decrement = () => {
    mutate({ id, quantity: quantity - 1 });
  };

  return (
    <S.Container>
      {isLoading && <Loading />}
      <S.Button onClick={decrement} disabled={quantity == 1}>
        &ndash;
      </S.Button>
      <S.input type="text" value={quantity} readOnly />
      <S.Button onClick={increment}>&#xff0b;</S.Button>
    </S.Container>
  );
};

export default QuantityPicker;
