import * as S from "./CartContentsHeader.style";

interface PropsType {
  isEmpty: boolean;
  allChecked: boolean;
  onChange: (e: any) => void;
}

const CartContentsHeader = ({ isEmpty, allChecked, onChange }: PropsType) => {
  return (
    <S.Container isEmpty={isEmpty}>
      {!isEmpty && (
        <S.AllCheckBoxContainer>
          <input type={"checkbox"} checked={allChecked} onChange={onChange} />
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
