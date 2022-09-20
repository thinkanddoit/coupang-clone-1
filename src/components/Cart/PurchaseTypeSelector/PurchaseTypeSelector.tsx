import * as S from "./PurchaseTypeSelector.style";

type PurchaseType = "normal" | "regularDelivery";

interface PropsType {
  selected: PurchaseType;
  normalCount?: number;
  rdCount?: number;
}

const PurchaseTypeSelector = ({
  selected,
  normalCount = 0,
  rdCount = 0,
}: PropsType) => {
  return (
    <S.Container>
      <S.Item
        selected={selected === "normal"}
      >{`일반구매 (${normalCount})`}</S.Item>
      <S.Item
        selected={selected === "regularDelivery"}
      >{`정기배송 (${normalCount})`}</S.Item>
    </S.Container>
  );
};

export default PurchaseTypeSelector;
