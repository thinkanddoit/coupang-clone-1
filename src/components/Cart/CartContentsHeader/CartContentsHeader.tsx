import * as S from "./CartContentsHeader.style";

type PurchaseType = "normal" | "regularDelivery";

interface PropsType {
  isEmpty: boolean;
  isAllChecked?: boolean;
}

const CartContentsHeader = ({ isEmpty, isAllChecked }: PropsType) => {
  return (
    <S.Container isEmpty={isEmpty}>
      {!isEmpty && (
        <S.AllCheckBoxContainer>
          <input type={"checkbox"} />
          <S.Item marginLeft="7px">전체선택</S.Item>
        </S.AllCheckBoxContainer>
      )}
      <S.Item width={isEmpty ? "" : "630px"}>상품정보</S.Item>
      <S.Item width={isEmpty ? "" : "90px"}>상품금액</S.Item>
      <S.Item width={isEmpty ? "" : "90px"}>배송비</S.Item>
    </S.Container>
  );
};

export default CartContentsHeader;
